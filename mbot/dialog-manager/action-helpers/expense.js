const axios = require("axios");
const BASE_URL = process.env.API_BASE_URL;
const { buildResponse } = require("../../utils/make-response");
const { renameKeys, generateBackgroundColors } = require("../../utils");

module.exports.create_expense = async (data, token) => {
    const URL = BASE_URL + "/api/v1/expense/create_expense_form";
    const resp = await axios.post(URL, data, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    let result = resp.data.result;
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
    return buildResponse({ text: textMessage, custom: {payload: "createExpenseForm",data:result } }).concat(
      buildResponse({
        quickReplies: quickReplies1,
      })
    );
  };


  module.exports.save_expense = async (data, token) => {
    const URL = BASE_URL + "/api/v1/expense/save_expense";
    const resp = await axios.post(URL, data, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    let result = resp.data.status;
    let textMessage = `Successfully created expense. \n Have a nice day!...`;

    
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
      })
    );
  };


