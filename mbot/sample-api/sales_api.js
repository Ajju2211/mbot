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
      "totaldata": {
        "total_qty": 89,
        "total_amt": 2990330
      },
      "data": [
        {
          "order_type": "Dinein",
          "total": {
            "qty": "40",
            "amt": 418060.18
          },
          "outlets": [
            {
              "name": "NANDA OUTLET",
              "total_qty": 20,
              "total_amt": 209030.09
            },
            {
              "name": "AZHAR OUTLET",
              "total_qty": 20,
              "total_amt": 209030.09
            }
          ]
        },
        {
          "order_type": "Swiggy",
          "total": {
            "qty": "500",
            "amt": 4182003.18
          },
          "outlets": [
            {
              "name": "NANDA OUTLET",
              "total_qty": 20,
              "total_amt": 2090003.09
            },
            {
              "name": "AZHAR OUTLET",
              "total_qty": 100,
              "total_amt": 3535002.99
            },
            {
              "name": "KHAN OUTLET",
              "total_qty": 120,
              "total_amt": 2828200.89
            },
            {
              "name": "MANSOOR OUTLET",
              "total_qty": 200,
              "total_amt": 2929700.12
            },
            {
              "name": "KHALIL OUTLET",
              "total_qty": 180,
              "total_amt": 2543100.50
            },
            {
              "name": "BAWARCHI",
              "total_qty": 150,
              "total_amt": 3012009.45
            },
          ]
        },
      ]
    },
    toppayments:{
      "totaldata": {
          "total_qty": 89,
          "total_amt": 299033
      },
      "data": [
          {
              "outletname": "NANDHA OUTLET",
              "total_amt":60129.23,
              "payment_type": [
                  {
                      "itemname": "online",
                      "total_amt": 20903.09
                  },
                  {
                      "itemname": "cash",
                      "total_amt": 20903.09
                  },
                  {
                      "itemname": "swiggy",
                      "total_amt": 20903.09
                  }
              ]
          },
          {
              "outletname": "Mohan test",
              "total_amt":60129.23,
              "payment_type": [
                  {
                      "itemname": "card",
                      "total_amt": 20903.09
                  },
                  {
                      "itemname": "cash",
                      "total_amt": 20903.09
                  }
              ]
          }
      ]
  }
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

module.exports.toppayments = async (req, res) => {
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
      result: data.toppayments,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
