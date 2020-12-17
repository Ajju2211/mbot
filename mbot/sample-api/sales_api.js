const db = [
  {
    email_id: "test@mail.com",
    password: "mbot@2020",
    brand_id: "12",
    manager_id: "3",
    token: "eccbc87e4b5ce2fe28308fd9f2a7baf3c20ad4d76fe97759aa27a0c99bff6710",
    consolidated_sales: {
      totaldata: {
        bill_count: 89,
        totalsale: 299033.0,
      },
      data: [
        {
          outletname: "NANDHA OUTLET",
          bill_count: 20,
          totalsale: 20903.09,
        },
        {
          outletname: "KARTHIKDXB",
          bill_count: 20,
          totalsale: 2093.09,
        },
        {
          outletname: "NANDHA OUTLET",
          bill_count: 20,
          totalsale: 20903.09,
        },
        {
          outletname: "Mohan test",
          bill_count: 20,
          totalsale: 20903.09,
        },
      ],
    },
    topitems: {
      totaldata: {
        total_qty: 89,
        total_amt: 299033,
      },
      data: [
        {
          outletname: "NANDHA OUTLET",
          items: [
            {
              itemname: "Biryani",
              total_qty: 20,
              total_amt: 20903.09,
            },
            {
              itemname: "Salad",
              total_qty: 20,
              total_amt: 20903.09,
            },
          ],
        },
        {
          outletname: "Mohan test",
          items: [
            {
              itemname: "Veg Biryani",
              total_qty: 20,
              total_amt: 20903.09,
            },
            {
              itemname: "Soft Drinks",
              total_qty: 20,
              total_amt: 20903.09,
            },
          ],
        },
      ],
    },
    topcategories: {
      totaldata: {
        total_qty: 89,
        total_amt: 299033,
      },
      data: [
        {
          outletname: "NANDHA OUTLET",
          category: [
            {
              itemname: "Snacks",
              total_qty: 20,
              total_amt: 20903.09,
            },
            {
              itemname: "Soft Drinks",
              total_qty: 20,
              total_amt: 20903.09,
            },
          ],
        },
        {
          outletname: "Mohan test",
          category: [
            {
              itemname: "Main Course",
              total_qty: 20,
              total_amt: 20903.09,
            },
            {
              itemname: "Soft Drinks",
              total_qty: 20,
              total_amt: 20903.09,
            },
          ],
        },
      ],
    },
    topordertypes: {
      totaldata: {
        total_qty: 89,
        total_amt: 299033,
      },
      data: [
        {
          outletname: "NANDHA OUTLET",
          order_type: [
            {
              itemname: "Dinein",
              total_qty: 20,
              total_amt: 20903.09,
            },
            {
              itemname: "Take Away",
              total_qty: 20,
              total_amt: 20903.09,
            },
            {
              itemname: "Dinein1",
              total_qty: 20,
              total_amt: 20903.09,
            },
            {
              itemname: "Take Away1",
              total_qty: 20,
              total_amt: 20903.09,
            },
            {
              itemname: "Dinein2",
              total_qty: 20,
              total_amt: 20903.09,
            },
            {
              itemname: "Take Away2",
              total_qty: 20,
              total_amt: 20903.09,
            },
            {
              itemname: "Dinein3",
              total_qty: 20,
              total_amt: 20903.09,
            },
            {
              itemname: "Take Awaysddsdssdsdsddsd",
              total_qty: 20,
              total_amt: 20903.09,
            },
          ],
        },
        {
          outletname: "Mohan test",
          order_type: [
            {
              itemname: "Home Delivery",
              total_qty: 20,
              total_amt: 20903.09,
            },
            {
              itemname: "Take Away",
              total_qty: 20,
              total_amt: 20903.09,
            },
          ],
        },
      ],
    },
  },
];

// sales API
exports.consolidatedSales = async (req, res) => {
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
      result: data.consolidated_sales,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.topitems = async (req, res) => {
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
      result: data.topitems,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.topcategories = async (req, res) => {
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
      result: data.topcategories,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.topordertypes = async (req, res) => {
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
      result: data.topordertypes,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
