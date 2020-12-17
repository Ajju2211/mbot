const axios = require("axios");
const md5 = require("md5");
const { buildResponse } = require("../../utils/make-response");
const payrollActions = require("../action-helpers/payroll");
const dtUtil = require("../../utils/dateUtil");

module.exports["main.payroll.absentees.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await payrollActions.absentees(data, token);
};

module.exports["main.payroll.absentees.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await payrollActions.absentees(data, token);
};

module.exports["main.payroll.absentees.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await payrollActions.absentees(data, token);
};

module.exports["main.payroll.absentees.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await payrollActions.absentees(data, token);
};
// avg_working_hrs
module.exports["main.payroll.avg_working_hrs.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await payrollActions.avg_working_hrs(data, token);
};
module.exports["main.payroll.avg_working_hrs.yesterday"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getYesterday();
  return await payrollActions.avg_working_hrs(data, token);
};
module.exports["main.payroll.avg_working_hrs.lastweek"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastWeek();
  return await payrollActions.avg_working_hrs(data, token);
};
module.exports["main.payroll.avg_working_hrs.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await payrollActions.avg_working_hrs(data, token);
};

// avg_costing
module.exports["main.payroll.avg_costing.today"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getToday();
  return await payrollActions.avg_costing(data, token);
};
// module.exports['main.payroll.avg_costing.yesterday'] = async (userObj) => {
//     const token = md5(userObj.manager_id) + md5(userObj.brand_id);
//     const data = dtUtil.getYesterday();
//     return await payrollActions.avg_costing(data, token);
// }
// module.exports['main.payroll.avg_costing.lastweek'] = async (userObj) => {
//     const token = md5(userObj.manager_id) + md5(userObj.brand_id);
//     const data = dtUtil.getLastWeek();
//     return await payrollActions.avg_costing(data, token);
// }
module.exports["main.payroll.avg_costing.lastmonth"] = async (userObj) => {
  const token = md5(userObj.manager_id) + md5(userObj.brand_id);
  const data = dtUtil.getLastMonth();
  return await payrollActions.avg_costing(data, token);
};
