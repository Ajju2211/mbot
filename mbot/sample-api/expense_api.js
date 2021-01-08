const db = [
  {
    email_id: "test@mail.com",
    password: "mbot@2020",
    brand_id: "12",
    manager_id: "3",
    token: "eccbc87e4b5ce2fe28308fd9f2a7baf3c20ad4d76fe97759aa27a0c99bff6710",
    create_expense: {
      tags: [{
        title: "tag1",
        value: "id1"
      },
      {
        title: "tag2",
        value: "id2"
      },
      {
        title: "tag3",
        value: "id3"
      },
      {
        title: "tag4",
        value: "id4"
      }
      ],
      categories: [{
        title: "cat1",
        value: "cid1"
      },
      {
        title: "cat2",
        value: "cid2"
      },
      {
        title: "cat3",
        value: "cid3"
      },
      {
        title: "cat4",
        value: "cid4"
      }
      ]
    }
  },
];

exports.create_expense = async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    const token = (
      authorization.split("token")[1] || authorization.split("Bearer")[1]
    ).trim();
    console.log(token);

    const data = db.find((ele) => ele.token == token);

    if (!token || !data) {
      return res.status(400).json({
        status: "failed",
        message: "INVALID AUTHORIZATION",
      });
    }

    return res.status(200).json({
      status: "success",
      result: data.create_expense
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

exports.save_expense = async (req, res) => {
  try {
    const authorization = req.headers.authorization;
    const token = (
      authorization.split("token")[1] || authorization.split("Bearer")[1]
    ).trim();
    console.log(token);

    const data = db.find((ele) => ele.token == token);

    if (!token || !data) {
      return res.status(400).json({
        status: "failed",
        message: "INVALID AUTHORIZATION",
      });
    }
    // save Data
    console.log(JSON.stringify(req.body, null, 4));

    return res.status(200).json({
      status: "success"
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
