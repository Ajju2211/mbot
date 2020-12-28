const db = [
  {
    email_id: "test@mail.com",
    password: "mbot@2020",
    brand_id: "12",
    manager_id: "3",
    token: "eccbc87e4b5ce2fe28308fd9f2a7baf3c20ad4d76fe97759aa27a0c99bff6710",
    variance: {
      data: [
        {
          outlet_name: "outlet1",
          variance_amount: 2000,
        },
        {
          outlet_name: "outlet2",
          variance_amount: 2000,
        },
      ],
    },
    cancellations: [
      {
        outlet_name: "outlet1",
        details: [
          {
            reason: "Restaurants Not Accepting Orders",
            cancelled_count: 0,
          },
          {
            reason: "Aggregator Dispute",
            cancelled_count: 0,
          },
          {
            reason: "Iteam Not Available",
            cancelled_count: 0,
          },
          {
            reason: "Restaurants Closed",
            cancelled_count: 0,
          },
        ],
      },
      {
        outlet_name: "outlet2",
        details: [
          {
            reason: "Restaurants Not Accepting Orders",
            cancelled_count: 0,
          },
          {
            reason: "Aggregator Dispute",
            cancelled_count: 0,
          },
          {
            reason: "Iteam Not Available",
            cancelled_count: 0,
          },
          {
            reason: "Restaurants Closed",
            cancelled_count: 0,
          },
        ],
      },
    ],
    bankdepositreport: [
      {
        outlet_name: "outlet1",
        details: [
          {
            aggregator: "Swiggy",
            deposited_amount: 0,
            total_amount: 0,
          },
          {
            aggregator: "Zomato",
            deposited_amount: 0,
            total_amount: 0,
          },
          {
            aggregator: "Dunzo",
            deposited_amount: 0,
            total_amount: 0,
          },
          {
            aggregator: "Amazon",
            deposited_amount: 0,
            total_amount: 0,
          },
        ],
      },
      {
        outlet_name: "outlet2",
        details: [
          {
            aggregator: "Swiggy",
            pending_amount: 0,
            total_amount: 0,
          },
          {
            aggregator: "Zomato",
            pending_amount: 0,
            total_amount: 0,
          },
          {
            aggregator: "Dunzo",
            pending_amount: 0,
            total_amount: 0,
          },
          {
            aggregator: "Amazon",
            pending_amount: 0,
            total_amount: 0,
          },
        ],
      },
    ],
    edcreport: [
      {
        outlet_name: "outlet1",
        details: [
          {
            aggregator: "Swiggy",
            sales: 0,
            amount_credited: 0,
          },
          {
            aggregator: "Zomato",
            sales: 0,
            amount_credited: 0,
          },
          {
            aggregator: "Dunzo",
            sales: 0,
            amount_credited: 0,
          },
          {
            aggregator: "Amazon",
            sales: 0,
            amount_credited: 0,
          },
        ],
      },
      {
        outlet_name: "outlet2",
        details: [
          {
            aggregator: "Swiggy",
            sales: 0,
            amount_credited: 0,
          },
          {
            aggregator: "Zomato",
            sales: 0,
            amount_credited: 0,
          },
          {
            aggregator: "Dunzo",
            sales: 0,
            amount_credited: 0,
          },
          {
            aggregator: "Amazon",
            sales: 0,
            amount_credited: 0,
          },
        ],
      },
    ],
    pendingpayouts: [
      {
        outlet_name: "outlet1",
        details: [
          {
            aggregator: "Swiggy",
            pending_amount: 0,
            total_amount: 0,
          },
          {
            aggregator: "Zomato",
            pending_amount: 0,
            total_amount: 0,
          },
          {
            aggregator: "Dunzo",
            pending_amount: 0,
            total_amount: 0,
          },
          {
            aggregator: "Amazon",
            pending_amount: 0,
            total_amount: 0,
          },
        ],
      },
      {
        outlet_name: "outlet2",
        details: [
          {
            aggregator: "Swiggy",
            pending_amount: 0,
            total_amount: 0,
          },
          {
            aggregator: "Zomato",
            pending_amount: 0,
            total_amount: 0,
          },
          {
            aggregator: "Dunzo",
            pending_amount: 0,
            total_amount: 0,
          },
          {
            aggregator: "Amazon",
            pending_amount: 0,
            total_amount: 0,
          },
        ],
      },
    ],
    expensetab: [
      {
        outlet_name: "outlet1",
        details: [
          {
            aggregator: "Dunzo",
            sales: 0,
            amount_credited: 0,
          },
          {
            aggregator: "Amazon",
            sales: 0,
            amount_credited: 0,
          },
        ],
      },
      {
        outlet_name: "outlet2",
        details: [
          {
            aggregator: "Swiggy",
            sales: 0,
            amount_credited: 0,
          },
          {
            aggregator: "Zomato",
            sales: 0,
            amount_credited: 0,
          },
          {
            aggregator: "Dunzo",
            sales: 0,
            amount_credited: 0,
          },
          {
            aggregator: "Amazon",
            sales: 0,
            amount_credited: 0,
          },
        ],
      },
    ],
    sales_payment_wise: [
      {
          "outletname": "OUTLET A",
          "payment_type": [
              {
                  "itemname": "card 1 Nov  - 4 Nov ",
                  "deduction": 0,
                  "sales": 5357.3,
                  "commission": 53.573,
                  "expected_deposit": 5301.21,
                  "recorded_deposit": 5303.727,
        "date_range": "01 Dec 2020 - 04 Dec 2020",
        "correct": "no"
              },
              {
                  "itemname": "card 1 Nov  - 4 Nov ",
                  "deduction": 0,
                  "sales": 5357.3,
                  "commission": 53.573,
                  "expected_deposit": 5303.727,
                  "recorded_deposit": 5303.727,
        "date_range": "01 Dec 2020 - 04 Dec 2020",
        "correct": "yes"
              },
              {
                  "itemname": "card 1 Nov  - 4 Nov ",
                  "deduction": 0,
                  "sales": 5357.3,
                  "commission": 53.573,
                  "expected_deposit": 5303.727,
                  "recorded_deposit": 5303.727,
        "date_range": "01 Dec 2020 - 04 Dec 2020",
        "correct": "yes"
              }
          ],
    "total_sales":2000,
    "total_deduction":300,
    "total_commission":300,
    "total_expected_deposit":300,
    "total_recorded_deposit":300,
      },
      {
          "outletname": "OUTLET B",
          "payment_type": [
              {
                  "itemname": "card 1 Nov  - 4 Nov ",
                  "deduction": 0,
                  "sales": 5357.3,
                  "commission": 53.573,
                  "expected_deposit": 5303.727,
                  "recorded_deposit": 5303.727,
        "date_range": "01 Dec 2020 - 04 Dec 2020",
        "correct": "yes"
              },
              {
                  "itemname": "card 1 Nov  - 4 Nov ",
                  "deduction": 0,
                  "sales": 5357.3,
                  "commission": 53.573,
                  "expected_deposit": 5303.727,
                  "recorded_deposit": 5303.727,
        "date_range": "01 Dec 2020 - 04 Dec 2020",
        "correct": "yes"
              },
              {
                  "itemname": "card 1 Nov  - 4 Nov ",
                  "deduction": 0,
                  "sales": 5357.3,
                  "commission": 53.573,
                  "expected_deposit": 5303.727,
                  "recorded_deposit": 5303.727,
        "date_range": "01 Dec 2020 - 04 Dec 2020",
        "correct": "yes"
              }
          ],
    "total_sales":2000,
    "total_deduction":300,
    "total_commission":300,
    "total_expected_deposit":300,
    "total_recorded_deposit":300,
      },
  ],
    reconciliation_table: [
      {
          "outletname": "OUTLET A",
          "payment_type": [
              {
                  "itemname": "card 1 Nov  - 4 Nov ",
                  "deduction": 0,
                  "sales": 5357.3,
                  "commission": 53.573,
                  "expected_deposit": 5301.21,
                  "recorded_deposit": 5303.727,
        "date_range": "01 Dec 2020 - 04 Dec 2020",
        "correct": "no"
              },
              {
                  "itemname": "card 1 Nov  - 4 Nov ",
                  "deduction": 0,
                  "sales": 5357.3,
                  "commission": 53.573,
                  "expected_deposit": 5303.727,
                  "recorded_deposit": 5303.727,
        "date_range": "01 Dec 2020 - 04 Dec 2020",
        "correct": "yes"
              },
              {
                  "itemname": "card 1 Nov  - 4 Nov ",
                  "deduction": 0,
                  "sales": 5357.3,
                  "commission": 53.573,
                  "expected_deposit": 5303.727,
                  "recorded_deposit": 5303.727,
        "date_range": "01 Dec 2020 - 04 Dec 2020",
        "correct": "yes"
              }
          ],
    "total_sales":2000,
    "total_deduction":300,
    "total_commission":300,
    "total_expected_deposit":300,
    "total_recorded_deposit":300,
      },
      {
          "outletname": "OUTLET B",
          "payment_type": [
              {
                  "itemname": "card 1 Nov  - 4 Nov ",
                  "deduction": 0,
                  "sales": 5357.3,
                  "commission": 53.573,
                  "expected_deposit": 5303.727,
                  "recorded_deposit": 5303.727,
        "date_range": "01 Dec 2020 - 04 Dec 2020",
        "correct": "yes"
              },
              {
                  "itemname": "card 1 Nov  - 4 Nov ",
                  "deduction": 0,
                  "sales": 5357.3,
                  "commission": 53.573,
                  "expected_deposit": 5303.727,
                  "recorded_deposit": 5303.727,
        "date_range": "01 Dec 2020 - 04 Dec 2020",
        "correct": "yes"
              },
              {
                  "itemname": "card 1 Nov  - 4 Nov ",
                  "deduction": 0,
                  "sales": 5357.3,
                  "commission": 53.573,
                  "expected_deposit": 5303.727,
                  "recorded_deposit": 5303.727,
        "date_range": "01 Dec 2020 - 04 Dec 2020",
        "correct": "yes"
              }
          ],
    "total_sales":2000,
    "total_deduction":300,
    "total_commission":300,
    "total_expected_deposit":300,
    "total_recorded_deposit":300,
      },
  ],

  sales_payment_wise: [
    {
        "aggregator_type": "OUTLET A",
        "outlets": [
            {
                "itemname": "card 1 Nov  - 4 Nov ",
                "deduction": 0,
                "sales": 5357.3,
                "commission": 53.573,
                "expected_deposit": 5301.21,
                "recorded_deposit": 5303.727,
      "date_range": "01 Dec 2020 - 04 Dec 2020",
      "correct": "no"
            },
            {
                "itemname": "card 1 Nov  - 4 Nov ",
                "deduction": 0,
                "sales": 5357.3,
                "commission": 53.573,
                "expected_deposit": 5303.727,
                "recorded_deposit": 5303.727,
      "date_range": "01 Dec 2020 - 04 Dec 2020",
      "correct": "yes"
            },
            {
                "itemname": "card 1 Nov  - 4 Nov ",
                "deduction": 0,
                "sales": 5357.3,
                "commission": 53.573,
                "expected_deposit": 5303.727,
                "recorded_deposit": 5303.727,
      "date_range": "01 Dec 2020 - 04 Dec 2020",
      "correct": "yes"
            }
        ],
  "total_sales":2000,
  "total_deduction":300,
  "total_commission":300,
  "total_expected_deposit":300,
  "total_recorded_deposit":300,
    },
    {
        "outletname": "OUTLET B",
        "payment_type": [
            {
                "itemname": "card 1 Nov  - 4 Nov ",
                "deduction": 0,
                "sales": 5357.3,
                "commission": 53.573,
                "expected_deposit": 5303.727,
                "recorded_deposit": 5303.727,
      "date_range": "01 Dec 2020 - 04 Dec 2020",
      "correct": "yes"
            },
            {
                "itemname": "card 1 Nov  - 4 Nov ",
                "deduction": 0,
                "sales": 5357.3,
                "commission": 53.573,
                "expected_deposit": 5303.727,
                "recorded_deposit": 5303.727,
      "date_range": "01 Dec 2020 - 04 Dec 2020",
      "correct": "yes"
            },
            {
                "itemname": "card 1 Nov  - 4 Nov ",
                "deduction": 0,
                "sales": 5357.3,
                "commission": 53.573,
                "expected_deposit": 5303.727,
                "recorded_deposit": 5303.727,
      "date_range": "01 Dec 2020 - 04 Dec 2020",
      "correct": "yes"
            }
        ],
  "total_sales":2000,
  "total_deduction":300,
  "total_commission":300,
  "total_expected_deposit":300,
  "total_recorded_deposit":300,
    },
],
variance_aggregator_wise : [
  {
      "agg_type": "Swiggy",
      "details": [
          {
              "outlet_name": "Outlet B",
              "pos_total": 0,
              "aggregator_total": 800.1,
              "correct": "no"
          },
          {
              "outlet_name": "Outlet A",
              "pos_total": 0,
              "aggregator_total": 1140.3,
              "correct": "no"
          }
      ]
  }
]

  },
];

// sales API
exports.variance = async (req, res) => {
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
      result: data.variance.data,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.cancellations = async (req, res) => {
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
      result: data.cancellations,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.edcreport = async (req, res) => {
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
      result: data.edcreport,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.bankdepositreport = async (req, res) => {
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
      result: data.bankdepositreport,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.expensetab = async (req, res) => {
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
      result: data.bankdepositreport,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.pendingpayouts = async (req, res) => {
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
      result: data.pendingpayouts,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};


module.exports.sales_payment_wise = async (req, res) => {
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
      result: data.sales_payment_wise,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};


module.exports.reconciliation_table = async (req, res) => {
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
      result: data.reconciliation_table,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};


module.exports.variance_aggregator_wise = async (req, res) => {
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
      result: data.variance_aggregator_wise,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};