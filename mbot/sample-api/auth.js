const db = [
  {
    email_id: "test@mail.com",
    password: "mbot@2020",
    brand_id: "12",
    manager_id: "3",
    token: "eccbc87e4b5ce2fe28308fd9f2a7baf3c20ad4d76fe97759aa27a0c99bff6710",
  },
];

module.exports.login = (req, res) => {
  const { email_id, password } = req.body;
  if (!email_id || !password) {
    return res.status(400).json({
      status: "failed",
      message: "no email,password",
    });
  }
  const user = db.find(
    (ele) => ele.email_id === email_id && ele.password === password
  );
  if (!user) {
    return res.status(400).json({
      status: "failed",
      message: "no user",
    });
  }

  return res.status(200).json({
    status: "success",
    result: {
      brand_id: user.brand_id,
      manager_id: user.manager_id,
      email:  user.email_id
    },
  });
};

exports.getUserData = async (req, res) => {
  try {
    // 1) check email_id in db
    const currentUser = db.find((ele) => ele.email_id == req.body.email_id);

    // 2) return required data
    res.status(200).json({
      status: "success",
      result: {
        brand_id: currentUser.brand_id,
        manager_id: currentUser.manager_id,
        email_id: currentUser.email_id,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};
