const axios = require("axios");
const md5 = require("md5");
const { buildResponse } = require("../../utils/make-response");
const salesActions = require("../action-helpers/sales");
const dtUtil = require("../../utils/dateUtil");
module.exports.restart = () => {
    return buildResponse({
        text:"Welcome to the bot.",
        buttons:[
            {
                title:"Sales",
                payload:"/main.sales"
            }
        ]
    });
}

module.exports['main.sales.consolidated.today'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getToday();
    return await salesActions.consolidated(data, token, userObj);
}

module.exports['main.sales.consolidated.yesterday'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getYesterday();
    return await salesActions.consolidated(data, token, userObj);
}

module.exports['main.sales.consolidated.lastmonth'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastMonth();
    return await salesActions.consolidated(data, token, userObj);
}

module.exports['main.sales.consolidated.lastweek'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastWeek();
    return await salesActions.consolidated(data, token, userObj);
}
// topitems
module.exports['main.sales.topitems.today'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getToday();
    return await salesActions.topitems(data, token, userObj);
}
module.exports['main.sales.topitems.yesterday'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getYesterday();
    return await salesActions.topitems(data, token, userObj);
}
module.exports['main.sales.topitems.lastweek'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastWeek();
    return await salesActions.topitems(data, token, userObj);
}
module.exports['main.sales.topitems.lastmonth'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastMonth();
    return await salesActions.topitems(data, token, userObj);
}

// topcategories
module.exports['main.sales.topcategories.today'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getToday();
    return await salesActions.topcategories(data, token, userObj);
}
module.exports['main.sales.topcategories.yesterday'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getYesterday();
    return await salesActions.topcategories(data, token, userObj);
}
module.exports['main.sales.topcategories.lastweek'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastWeek();
    return await salesActions.topcategories(data, token, userObj);
}
module.exports['main.sales.topcategories.lastmonth'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastMonth();
    return await salesActions.topcategories(data, token, userObj);
}

// topordertypes
module.exports['main.sales.topordertypes.today'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getToday();
    return await salesActions.topordertypes(data, token, userObj);
}
module.exports['main.sales.topordertypes.yesterday'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getYesterday();
    return await salesActions.topordertypes(data, token, userObj);
}
module.exports['main.sales.topordertypes.lastweek'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastWeek();
    return await salesActions.topordertypes(data, token, userObj);
}
module.exports['main.sales.topordertypes.lastmonth'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastMonth();
    return await salesActions.topordertypes(data, token, userObj);
}


// top_payment_types
module.exports['main.sales.top_payment_types.today'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getToday();
    return await salesActions.top_payment_types(data, token, userObj);
}
module.exports['main.sales.top_payment_types.yesterday'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getYesterday();
    return await salesActions.top_payment_types(data, token, userObj);
}
module.exports['main.sales.top_payment_types.lastweek'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastWeek();
    return await salesActions.top_payment_types(data, token, userObj);
}
module.exports['main.sales.top_payment_types.lastmonth'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastMonth();
    return await salesActions.top_payment_types(data, token, userObj);
}



// aggregator_revenue
module.exports['main.sales.aggregator_revenue.today'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getToday();
    return await salesActions.aggregator_revenue(data, token, userObj);
}
module.exports['main.sales.aggregator_revenue.yesterday'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getYesterday();
    return await salesActions.aggregator_revenue(data, token, userObj);
}
module.exports['main.sales.aggregator_revenue.lastweek'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastWeek();
    return await salesActions.aggregator_revenue(data, token, userObj);
}
module.exports['main.sales.aggregator_revenue.lastmonth'] = async (userObj) => {
    const token = md5(userObj.manager_id) + md5(userObj.brand_id);
    const data = dtUtil.getLastMonth();
    return await salesActions.aggregator_revenue(data, token, userObj);
}