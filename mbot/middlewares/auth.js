const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { buildResponse } = require("../utils/make-response");
const axios = require("axios");
const BASE_URL = "http://client-bot-server.herokuapp.com";
const db = [
  {
    email: "test@mail.com",
    password: "mbot@2020",
    brand_id: "34",
    manager_id: "2",
  },
];

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

  // 1) Check if email and password exist
  if (!email || !password) {
    return res.status(400).json({
      status: "failed",
      data: "Please provide email and password",
    });
  }

  // 2) Check if user exists && password is correct
  // const user = db.find((ele) => ele.email == email && ele.password == password);
  const URL = BASE_URL + "/api/v1/login";
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
    const token = signToken(user.result.email);

    // 3)Sending Userdata and Token , maxAge is 7 days,
    res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(200).json({
      status: "success",
      token,
      data: user.result,
    });
  } catch (error) {
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
    console.log(decoded);
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
    console.error(err);
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
