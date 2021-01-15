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
    },
    approve_expenses:{
      expenses:[
        {
            id:"1",
            tag:"Tag1",
            category:"Cat1",
            expense_name:"Printer powder",
            amount:"1500",
            comments:[
                {
                    created_on:"10/01/21",
                    comment:"Sir Urgent xerox poweder required.",
                    created_by:"Azhar",
                    position:"1"
                },
                {
                    created_on:"11/01/21",
                    comment:"Yes I've checked it , its urgent",
                    created_by:"Kamal",
                    position:"2"
                },
                {
                    created_on:"10/01/21",
                    comment:"No, we don't providing extra things 🔥, I'm cancelling it out.",
                    created_by:"Mansoor",
                    position:"3"
                }
            ]
        },
        {
            id:"2",
            tag:"Tag2",
            category:"Cat2",
            expense_name:"Kitchen ware",
            amount:"2000",
            comments:[
                {
                    created_on:"10/01/21",
                    comment:"Glass cups broken, we need one dozen of them.",
                    created_by:"Azhar",
                    position:"1"
                },
                {
                    created_on:"11/01/21",
                    comment:"Okay, we will provide half dozen adjust this month.",
                    created_by:"Kamal",
                    position:"2"
                }
            ]
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



exports.get_approve_expense = async (req, res) => {
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
      result: data.approve_expenses
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
};


exports.save_approve_expense = async (req, res) => {
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

    // save data
    console.log(JSON.stringify(req.body, null ,4));

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