const axios = require("axios");
const md5 = require("md5");
const { buildResponse } = require("../../utils/make-response");
const expenseAction = require("../action-helpers/expense");
const dtUtil = require("../../utils/dateUtil");

// create_expense
module.exports['main.expense.create_expense'] = async (userObj, reqData) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);

    return await expenseAction.create_expense(reqData, token);
}

// create_expense.save
module.exports['main.expense.create_expense.save'] = async (userObj, reqData) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);

    return await expenseAction.save_expense(reqData, token);
}

// approve_expense
module.exports['main.expense.approve_expense'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getToday();
    return await expenseAction.approve_expense(data, token);
}