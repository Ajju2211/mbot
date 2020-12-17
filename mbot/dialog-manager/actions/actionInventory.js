const axios = require("axios");
const md5 = require("md5");
const { buildResponse } = require("../../utils/make-response");
const inventoryActions = require("../action-helpers/inventory");
const dtUtil = require("../../utils/dateUtil");

// pendingpurchases
module.exports["main.inventory.pendingpurchases.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await inventoryActions.pendingpurchases(data, token);
};
module.exports["main.inventory.pendingpurchases.yesterday"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await inventoryActions.pendingpurchases(data, token);
};

module.exports["main.inventory.pendingpurchases.lastmonth"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await inventoryActions.pendingpurchases(data, token);
};

module.exports["main.inventory.pendingpurchases.lastweek"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await inventoryActions.pendingpurchases(data, token);
};
// pendingvendorpayments
module.exports["main.inventory.pendingvendorpayments.today"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await inventoryActions.pendingvendorpayments(data, token);
};
module.exports["main.inventory.pendingvendorpayments.yesterday"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await inventoryActions.pendingvendorpayments(data, token);
};
module.exports["main.inventory.pendingvendorpayments.lastweek"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await inventoryActions.pendingvendorpayments(data, token);
};
module.exports["main.inventory.pendingvendorpayments.lastmonth"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await inventoryActions.pendingvendorpayments(data, token);
};

// pendingindents
module.exports["main.inventory.pendingindents.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await inventoryActions.pendingindents(data, token);
};
module.exports["main.inventory.pendingindents.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await inventoryActions.pendingindents(data, token);
};
module.exports["main.inventory.pendingindents.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await inventoryActions.pendingindents(data, token);
};
module.exports["main.inventory.pendingindents.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await inventoryActions.pendingindents(data, token);
};

// pendingphysicalchecks
module.exports["main.inventory.pendingphysicalchecks.today"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await inventoryActions.pendingphysicalchecks(data, token);
};
module.exports["main.inventory.pendingphysicalchecks.yesterday"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await inventoryActions.pendingphysicalchecks(data, token);
};
module.exports["main.inventory.pendingphysicalchecks.lastweek"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await inventoryActions.pendingphysicalchecks(data, token);
};
module.exports["main.inventory.pendingphysicalchecks.lastmonth"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await inventoryActions.pendingphysicalchecks(data, token);
};

// pendingproductions
module.exports["main.inventory.pendingproductions.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await inventoryActions.pendingproductions(data, token);
};
module.exports["main.inventory.pendingproductions.yesterday"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await inventoryActions.pendingproductions(data, token);
};
module.exports["main.inventory.pendingproductions.lastweek"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await inventoryActions.pendingproductions(data, token);
};
module.exports["main.inventory.pendingproductions.lastmonth"] = async (
  userObj
) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await inventoryActions.pendingproductions(data, token);
};

// wastages
module.exports["main.inventory.wastages.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await inventoryActions.wastages(data, token);
};
module.exports["main.inventory.wastages.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await inventoryActions.wastages(data, token);
};
module.exports["main.inventory.wastages.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await inventoryActions.wastages(data, token);
};
module.exports["main.inventory.wastages.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await inventoryActions.wastages(data, token);
};

// costgoods
module.exports["main.inventory.costgoods.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await inventoryActions.costgoods(data, token);
};
module.exports["main.inventory.costgoods.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await inventoryActions.costgoods(data, token);
};
module.exports["main.inventory.costgoods.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await inventoryActions.costgoods(data, token);
};
module.exports["main.inventory.costgoods.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await inventoryActions.costgoods(data, token);
};

// foodcost
module.exports["main.inventory.foodcost.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await inventoryActions.foodcost(data, token);
};
module.exports["main.inventory.foodcost.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await inventoryActions.foodcost(data, token);
};
module.exports["main.inventory.foodcost.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await inventoryActions.foodcost(data, token);
};
module.exports["main.inventory.foodcost.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await inventoryActions.foodcost(data, token);
};

// marginitems
module.exports["main.inventory.marginitems.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await inventoryActions.marginitems(data, token);
};
module.exports["main.inventory.marginitems.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await inventoryActions.marginitems(data, token);
};
module.exports["main.inventory.marginitems.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await inventoryActions.marginitems(data, token);
};
module.exports["main.inventory.marginitems.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await inventoryActions.marginitems(data, token);
};

// lossitems
module.exports["main.inventory.lossitems.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await inventoryActions.lossitems(data, token);
};
module.exports["main.inventory.lossitems.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await inventoryActions.lossitems(data, token);
};
module.exports["main.inventory.lossitems.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await inventoryActions.lossitems(data, token);
};
module.exports["main.inventory.lossitems.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await inventoryActions.lossitems(data, token);
};
