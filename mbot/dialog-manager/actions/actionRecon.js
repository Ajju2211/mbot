const axios = require("axios");
const md5 = require("md5");
const { buildResponse } = require("../../utils/make-response");
const reconActions = require("../action-helpers/recon");
const dtUtil = require("../../utils/dateUtil");

// variance
module.exports["main.recon.variance.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await reconActions.variance(data, token);
};

module.exports["main.recon.variance.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await reconActions.variance(data, token);
};

module.exports["main.recon.variance.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await reconActions.variance(data, token);
};
// cancellations
module.exports["main.recon.cancellations.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await reconActions.cancellations(data, token);
};
module.exports["main.recon.cancellations.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await reconActions.cancellations(data, token);
};
module.exports["main.recon.cancellations.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await reconActions.cancellations(data, token);
};
module.exports["main.recon.cancellations.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await reconActions.cancellations(data, token);
};

// cdreport
module.exports["main.recon.cdreport.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await reconActions.cdreport(data, token);
};
module.exports["main.recon.cdreport.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await reconActions.cdreport(data, token);
};
module.exports["main.recon.cdreport.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await reconActions.cdreport(data, token);
};
module.exports["main.recon.cdreport.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await reconActions.cdreport(data, token);
};

// edcreport
module.exports["main.recon.edcreport.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await reconActions.edcreport(data, token);
};
module.exports["main.recon.edcreport.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await reconActions.edcreport(data, token);
};
module.exports["main.recon.edcreport.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await reconActions.edcreport(data, token);
};
module.exports["main.recon.edcreport.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await reconActions.edcreport(data, token);
};

// expensetab
module.exports["main.recon.expensetab.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await reconActions.expensetab(data, token);
};
module.exports["main.recon.expensetab.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await reconActions.expensetab(data, token);
};
module.exports["main.recon.expensetab.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await reconActions.expensetab(data, token);
};
module.exports["main.recon.expensetab.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await reconActions.expensetab(data, token);
};

// pendingpayouts
module.exports["main.recon.pendingpayouts.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await reconActions.pendingpayouts(data, token);
};
module.exports["main.recon.pendingpayouts.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await reconActions.pendingpayouts(data, token);
};
module.exports["main.recon.pendingpayouts.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await reconActions.pendingpayouts(data, token);
};
module.exports["main.recon.pendingpayouts.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await reconActions.pendingpayouts(data, token);
};
