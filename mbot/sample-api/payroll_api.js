const db = [
  {
    email_id: "test@mail.com",
    password: "mbot@2020",
    brand_id: "12",
    manager_id: "3",
    token: "eccbc87e4b5ce2fe28308fd9f2a7baf3c20ad4d76fe97759aa27a0c99bff6710",
    absentees: [
      {
        outlet_name: "outlet1",
        category_name: "Admin",
        absentees_count: 1,
        details: [
          {
            name: "employee name",
          },
          {
            name: "employee name",
          },
        ],
      },
      {
        outlet_name: "outlet2",
        category_name: "HR",
        absentees_count: 1,
        details: [
          {
            name: "employee name",
          },
          {
            name: "employee name",
          },
        ],
      },
    ],
    avg_working_hrs: [
      {
        outlet_name: "outlet1",
        category_name: "Admin",
        total_working_hours: 1,
        details: [
          {
            name: "employee name",
            avg_working_hours: 1,
          },
          {
            name: "employee name",
            avg_working_hours: 1,
          },
        ],
      },
      {
        outlet_name: "outlet2",
        category_name: "HR",
        total_working_hours: 1,
        details: [
          {
            name: "employee name",
            avg_working_hours: 1,
          },
          {
            name: "employee name",
            avg_working_hours: 1,
          },
        ],
      },
    ],
    avg_costing: [
      {
        outlet_name: "outlet1",
        category_name: "Admin",
        total_costing: 1,
        details: [
          {
            name: "employee name",
            avg_costing: 1,
          },
          {
            name: "employee name",
            avg_costing: 1,
          },
        ],
      },
      {
        outlet_name: "outlet2",
        category_name: "HR",
        total_costing: 1,
        details: [
          {
            name: "employee name",
            avg_costing: 1,
          },
          {
            name: "employee name",
            avg_costing: 1,
          },
        ],
      },
    ],
  },
];

module.exports.absentees = async (req, res) => {
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
      result: data.absentees,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.avg_working_hrs = async (req, res) => {
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
      result: data.avg_working_hrs,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.avg_costing = async (req, res) => {
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
      result: data.avg_costing,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
