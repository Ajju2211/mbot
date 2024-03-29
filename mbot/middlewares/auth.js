const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { buildResponse } = require("../utils/make-response");
const axios = require("axios");
const BASE_URL = process.env.API_BASE_URL;


const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.logout = async (req, res) => {
  // will clear the cookie
  res.clearCookie("jwt");
  res.status(200);
  // trigger loginform in chatbot.
  res.send(
    buildResponse({
      custom: {
        payload: "loginform",
      },
    })
  );
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  console.log("base URL:"+BASE_URL+":");

  // 1) Check if email and password exist
  if (!email || !password) {
    return res.status(400).json({
      status: "failed",
      data: "Please provide email and password",
    });
  }

  // 2) Check if user exists && password is correct
  const URL = BASE_URL + "/api/v1/user/login";
  const reqBody = {
    email_id: email,
    password: password,
  };
  try {
    const resp = await axios.post(URL, reqBody, {
      headers: {
        "Content-Type": "application/json",
        // If any authorization header token  for login API
        // authorization: `Bearer ${token}`,
      },
    });
    const user = resp.data;

    if (!user) {
      // If Incorrect Sending response
      return res.status(400).json({
        status: "failed",
        data: "Invalid email and password",
      });
    }

    // Signed Token
    const token = signToken(user.result.email_id);

    // 3)Sending Userdata and Token , maxAge is 7 days,
    res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      // DISABLING SAMESITE
      // sameSite: "none",
      // DISABLING ONLY HTTPS MODE
      // secure: true,
    });
    res.status(200).json({
      status: "success",
      token,
      data: user.result,
    });
  } catch (error) {
    console.log("FROM LOGIN ROUTE: "+error.message);
    return res.status(400).json({
      status: "failed",
      data: "Invalid email and password",
    });
  }
};

exports.protect = async (req, res, next) => {
  try {
    let token;

    // 1) Getting token and check of its there
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    if (!token) {
      // trigger loginform
      return res.send(
        buildResponse({
          custom: {
            payload: "loginform",
            error: "Please login to continue",
          },
        })
      );
    }

    // 2) validate the token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    console.log("JWT Decoded email_id: "+decoded.id);
    // 3) get user details
    // const currentUser = db.find((ele) => ele.email == decoded.id);
    const url = BASE_URL + "/api/v1/user/verifyUser";
    const dataRes = await axios.post(
      url,
      { email_id: decoded.id },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (dataRes.status != 200) {
      throw "INTERNAL SERVER ERROR";
    }
    const currentUser = dataRes.data.result;

    // GRANT ACCESS TO PROTECTED ROUTE
    res.user = currentUser;
    res.locals.user = currentUser;
    next();
  } catch (err) {
    console.error("FROM Protect Route: "+err.message);
    // trigger loginform if no valid jwt token(User is logged out)
    return res.send(
      buildResponse({
        custom: {
          payload: "loginform",
          error: err.message,
        },
      })
    );
  }
};
