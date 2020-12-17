const moment = require("moment");
const FORMAT = "YYYY-MM-DD";
const LASTWEEK = "week";
const LASTMONTH = "month";
const TODAY = "today";
const YESTERDAY = "yesterday";

// last week from yesterday
module.exports.getLastWeek = () => {
  const yesterday = moment().subtract(1, "days").format(FORMAT);
  // lastWeek from yesterday = 7(Days from yesterday) + 1(Yesterday from today) =8
  const lastWeek = moment().subtract(8, "days").format(FORMAT);
  return {
    from: lastWeek,
    to: yesterday,
    for: LASTWEEK,
  };
};

// Last month from yesterday
module.exports.getLastMonth = () => {
  const yesterday = moment().subtract(1, "days").format(FORMAT);
  const lastMonth = moment()
    .subtract(1, "month")
    .subtract(1, "days")
    .format(FORMAT);
  return {
    from: lastMonth,
    to: yesterday,
    for: LASTMONTH,
  };
};

// Yesterdays
module.exports.getYesterday = () => {
  const yesterday = moment().subtract(1, "days").format(FORMAT);
  return {
    from: yesterday,
    to: yesterday,
    for: YESTERDAY,
  };
};

module.exports.getToday = () => {
  const today = moment().format(FORMAT);
  return {
    from: today,
    to: today,
    for: TODAY,
  };
};

// last week upto yesterday

// Last upto yesterday
// const lastMonth =  moment().subtract(1, "month").subtract(1,"days").format(FORMAT);

// console.log(`Today: ${today} \nLast week: ${lastWeek} - ${today} \nLast Month: ${lastMonth} - ${today}`);
