const db = [
  {
    email_id: "test@mail.com",
    password: "mbot@2020",
    brand_id: "12",
    manager_id: "3",
    token: "eccbc87e4b5ce2fe28308fd9f2a7baf3c20ad4d76fe97759aa27a0c99bff6710",
    pending_purchases: [
      {
        outletname: "NANDHA OUTLET",
        po_number: "XXXXXXXX",
        requested_date: "2020-10-28",
        delivery_date: "2020-10-28",
        products: [
          {
            name: "product_name",
            requested_quantity: 10,
            pending_quantity: 10,
          },
          {
            name: "product_name",
            requested_quantity: 10,
            pending_quantity: 10,
          },
        ],
      },
      {
        outletname: "KARTHIKDXB",
        po_number: "XXXXXXXX",
        requested_date: "2020-10-28",
        delivery_date: "2020-10-28",
        products: [
          {
            name: "product_name",
            requested_quantity: 10,
            pending_quantity: 10,
          },
          {
            name: "product_name",
            requested_quantity: 10,
            pending_quantity: 10,
          },
        ],
      },
      {
        outletname: "Mohan test",
        po_number: "XXXXXXXX",
        requested_date: "2020-10-28",
        delivery_date: "2020-10-28",
        products: [
          {
            name: "product_name",
            requested_quantity: 10,
            pending_quantity: 10,
          },
          {
            name: "product_name",
            requested_quantity: 10,
            pending_quantity: 10,
          },
        ],
      },
    ],
    pending_vendor_payments: [
      {
        outletname: "NANDHA OUTLET",
        dishes: [
          {
            vendor_name: "Vendor",
            amount: 10000,
          },
          {
            vendor_name: "Vendor2",
            amount: 20000,
          },
        ],
      },
      {
        outletname: "KARTHIKDXB",
        dishes: [
          {
            vendor_name: "Vendor",
            amount: 10000,
          },
          {
            vendor_name: "Vendor2",
            amount: 20000,
          },
        ],
      },
    ],
    pending_indents: [
      {
        outletname: "NANDHA OUTLET",
        indent_number: "XXXXXXXX",
        requested_date: "2020-10-28",
        delivery_date: "2020-10-28",
        products: [
          {
            name: "product_name",
            requested_quantity: 10,
            pending_quantity: 10,
          },
          {
            name: "product_name",
            requested_quantity: 10,
            pending_quantity: 10,
          },
        ],
      },
      {
        outletname: "KARTHIKDXB",
        indent_number: "XXXXXXXX",
        requested_date: "2020-10-28",
        delivery_date: "2020-10-28",
        products: [
          {
            name: "product_name",
            requested_quantity: 10,
            pending_quantity: 10,
          },
          {
            name: "product_name",
            requested_quantity: 10,
            pending_quantity: 10,
          },
        ],
      },
      {
        outletname: "Mohan test",
        indent_number: "XXXXXXXX",
        requested_date: "2020-10-28",
        delivery_date: "2020-10-28",
        products: [
          {
            name: "product_name",
            requested_quantity: 10,
            pending_quantity: 10,
          },
          {
            name: "product_name",
            requested_quantity: 10,
            pending_quantity: 10,
          },
        ],
      },
    ],
    pending_physical_checks: [
      {
        outletname: "NANDHA OUTLET",
        dishes: [
          {
            category_name: "category",
            physical_check_date: "2020-10-28",
          },
          {
            category_name: "category2",
            physical_check_date: "2020-10-28",
          },
        ],
      },
      {
        outletname: "KARTHIKDXB",
        dishes: [
          {
            category_name: "category",
            physical_check_date: "2020-10-28",
          },
          {
            category_name: "category2",
            physical_check_date: "2020-10-28",
          },
        ],
      },
    ],
    pending_productions: [
      {
        outletname: "NANDHA OUTLET",
        dishes: [
          {
            category_name: "category",
            physical_check_date: "2020-10-28",
          },
          {
            category_name: "category1",
            physical_check_date: "2020-10-28",
          },
        ],
      },
      {
        outletname: "KARTHIKDXB",
        dishes: [
          {
            category_name: "category",
            physical_check_date: "2020-10-28",
          },
          {
            category_name: "category1",
            physical_check_date: "2020-10-28",
          },
        ],
      },
    ],
    wastages: [
      {
        outletname: "NANDHA OUTLET",
        dishes: [
          {
            dish_name: "dish",
            wastage_qty: 20,
            cost: 20903.09,
            type: "food",
          },
          {
            dish_name: "dish2",
            wastage_qty: 20,
            cost: 20903.09,
            type: "raw_material",
          },
        ],
      },
      {
        outletname: "KARTHIKDXB",
        dishes: [
          {
            dish_name: "dish",
            wastage_qty: 20,
            cost: 20903.09,
            type: "food",
          },
          {
            dish_name: "dish2",
            wastage_qty: 20,
            cost: 20903.09,
            type: "raw_material",
          },
        ],
      },
    ],
    cost_of_goods: [
      {
        outletname: "NANDHA OUTLET",
        dishes: [
          {
            category_name: "category",
            dish_name: "dish",
            cost: 10,
          },
          {
            category_name: "category",
            dish_name: "dish2",
            cost: 20,
          },
        ],
      },
      {
        outletname: "KARTHIKDXB",
        dishes: [
          {
            category_name: "category",
            dish_name: "dish",
            cost: 10,
          },
          {
            category_name: "category",
            dish_name: "dish2",
            cost: 20,
          },
        ],
      },
    ],
    food_cost: [
      {
        outletname: "NANDHA OUTLET",
        dishes: [
          {
            category_name: "category",
            dish_name: "dish",
            dish_sold: 10,
            average_dish_selling_price: 5320,
            food_cost: 20,
            wastage_amount: 20,
          },
          {
            category_name: "category",
            dish_name: "dish2",
            dish_sold: 10,
            average_dish_selling_price: 5320,
            food_cost: 20,
            wastage_amount: 20,
          },
        ],
      },
      {
        outletname: "KARTHIKDXB",
        dishes: [
          {
            category_name: "category",
            dish_name: "dish",
            dish_sold: 10,
            average_dish_selling_price: 5320,
            food_cost: 20,
            wastage_amount: 20,
          },
          {
            category_name: "category",
            dish_name: "dish2",
            dish_sold: 10,
            average_dish_selling_price: 5320,
            food_cost: 20,
            wastage_amount: 20,
          },
        ],
      },
    ],
    high_low_margins: [
      {
        outletname: "NANDHA OUTLET",
        dishes: [
          {
            category_name: "category",
            dish_name: "dish",
            ordertype: [
              {
                order_type: "Swiggy",
                amount: 500,
              },
              {
                order_type: "Zomato",
                amount: 490,
              },
              {
                order_type: "Dinein",
                amount: 500,
              },
            ],
          },
          {
            category_name: "category",
            dish_name: "dish2",
            ordertype: [
              {
                order_type: "Swiggy",
                amount: 500,
              },
              {
                order_type: "Zomato",
                amount: 500,
              },
              {
                order_type: "Dinein",
                amount: 500,
              },
            ],
          },
        ],
      },
      {
        outletname: "KARTHIKDXB",
        dishes: [
          {
            category_name: "category",
            dish_name: "dish",
            ordertype: [
              {
                order_type: "Swiggy",
                amount: 500,
              },
              {
                order_type: "Zomato",
                amount: 500,
              },
              {
                order_type: "Dinein",
                amount: 500,
              },
            ],
          },
        ],
      },
    ],
    loss_making_items: [
      {
        outletname: "KARTHIKDXB",
        dishes: [
          {
            category_name: "category",
            dish_name: "dish1",
            ordertype: [
              {
                order_type: "Zomato",
                quantity: -5,
              },
              {
                order_type: "Dinein",
                quantity: -5,
              },
            ],
          },
        ],
      },
      {
        outletname: "KARTHIKDXB",
        dishes: [
          {
            category_name: "category",
            dish_name: "dish1",
            ordertype: [
              {
                order_type: "Zomato",
                quantity: -5,
              },
              {
                order_type: "Dinein",
                quantity: -5,
              },
            ],
          },
        ],
      },
    ],
  },
];

module.exports.pending_purchases = async (req, res) => {
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
      result: data.pending_purchases,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.pending_indents = async (req, res) => {
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
      result: data.pending_indents,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.pending_physical_checks = async (req, res) => {
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
      result: data.pending_physical_checks,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.pending_productions = async (req, res) => {
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
      result: data.pending_productions,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.pending_vendor_payments = async (req, res) => {
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
      result: data.pending_vendor_payments,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
module.exports.high_low_margins = async (req, res) => {
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
      result: data.high_low_margins,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
module.exports.food_cost = async (req, res) => {
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
      result: data.food_cost,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
module.exports.cost_of_goods = async (req, res) => {
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
      result: data.cost_of_goods,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
module.exports.wastages = async (req, res) => {
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
      result: data.wastages,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};

module.exports.loss_making_items = async (req, res) => {
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
      result: data.loss_making_items,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};
