const axios = require("axios");
const BASE_URL = process.env.API_BASE_URL;
const { buildResponse } = require("../../utils/make-response");
const { renameKeys, generateBackgroundColors } = require("../../utils");

module.exports.create_expense = async (data, token, userObj) => {
  const URL = BASE_URL + "/api/v1/expense/create_expense_form";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  // sending token for the upload API at client side
  result.token = token;
  let textMessage = `Please fill the details of expense to add!`;


  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.expense",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  // multiSimpleCards
  return buildResponse({ text: textMessage, custom: { payload: "createExpenseForm", data: result } }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    }, userObj)
  );
};




module.exports.save_expense = async (data, token, userObj) => {
  const URL = BASE_URL + "/api/v1/expense/save_expense";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.status;
  console.log("MESSAGE:");
  console.log(resp.data);

  let textMessage = `Successfully created expense. \n Have a nice day!...`;
  textMessage = resp.data.message;
// 200 Failed
  if(resp.data.status==="failed"){
    // Toast with silent true
    return buildResponse({ silent: "yes", toast:resp.data.message }, userObj);
  }
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.expense",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  // multiSimpleCards
  return buildResponse({ text: textMessage }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    }, userObj)
  );
};


module.exports.approve_expense = async (data, token, userObj) => {
  const URL = BASE_URL + "/api/v1/expense/get_approval_expense";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let textMessage = `Here's the approvals pending...`;

  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.expense",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  // multiSimpleCards
  return buildResponse({ text: textMessage, custom: { payload: "approveExpense", expenses: result.expenses } }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    }, userObj)
  );
};



module.exports.save_approve_expense = async (data, token, userObj) => {
  const URL = BASE_URL + "/api/v1/expense/save_approve_expense";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let textMessage = `Succefully done...`;
  console.log(textMessage);

  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.expense",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  // multiSimpleCards
  return buildResponse({ text: textMessage }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    }, userObj)
  );
};