const { buildResponse } = require("../utils/make-response");
module.exports = {
  "greetings.welcome": () =>
    buildResponse({
      text: "Welcome to the Bot",
      buttons: [
        {
          title: "Sales",
          payload: "/main.sales",
        },
        {
          title: "Reconciliations",
          payload: "/main.recon",
        },
        {
          title: "Payroll",
          payload: "/main.payroll",
        },
        {
          title: "Inventory",
          payload: "/main.inventory",
        },
      ],
    }),
  "greetings.bye": () =>
    buildResponse({
      text: "Thanks for visiting us",
    }),
  "main.sales": () =>
    buildResponse({
      text: "Select the sales types.",
      buttons: [
        {
          title: "Consolidated Sales",
          payload: "/main.sales.consolidated",
        },
        {
          title: "Top Items",
          payload: "/main.sales.topitems",
        },
        {
          title: "Top categories",
          payload: "/main.sales.topcategories",
        },
        {
          title: "Top OrderTypes",
          payload: "/main.sales.topordertypes",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/greetings.welcome",
        },
      ],
    }),
  "main.sales.consolidated": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.sales.consolidated.today",
        },
        {
          title: "Yesterday",
          payload: "/main.sales.consolidated.yesterday",
        },
        {
          title: "LastWeek",
          payload: "/main.sales.consolidated.lastweek",
        },
        {
          title: "LastMonth",
          payload: "/main.sales.consolidated.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.sales",
        },
      ],
    }),
  "main.sales.topitems": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.sales.topitems.today",
        },
        {
          title: "Yesterday",
          payload: "/main.sales.topitems.yesterday",
        },
        {
          title: "LastWeek",
          payload: "/main.sales.topitems.lastweek",
        },
        {
          title: "LastMonth",
          payload: "/main.sales.topitems.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.sales",
        },
      ],
    }),
  "main.sales.topcategories": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.sales.topcategories.today",
        },
        {
          title: "Yesterday",
          payload: "/main.sales.topcategories.yesterday",
        },
        {
          title: "LastWeek",
          payload: "/main.sales.topcategories.lastweek",
        },
        {
          title: "LastMonth",
          payload: "/main.sales.topcategories.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.sales",
        },
      ],
    }),
  "main.sales.topordertypes": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.sales.topordertypes.today",
        },
        {
          title: "Yesterday",
          payload: "/main.sales.topordertypes.yesterday",
        },
        {
          title: "LastWeek",
          payload: "/main.sales.topordertypes.lastweek",
        },
        {
          title: "LastMonth",
          payload: "/main.sales.topordertypes.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.sales",
        },
      ],
    }),
  "main.sales.toppaymentmode": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.sales.toppaymentmode.today",
        },
        {
          title: "Yesterday",
          payload: "/main.sales.toppaymentmode.yesterday",
        },
        {
          title: "LastWeek",
          payload: "/main.sales.toppaymentmode.lastweek",
        },
        {
          title: "LastMonth",
          payload: "/main.sales.toppaymentmode.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.sales",
        },
      ],
    }),
  "main.payroll": () =>
    buildResponse({
      text: "Select the Payroll type.",
      buttons: [
        {
          title: "Absentees",
          payload: "/main.payroll.absentees",
        },
        {
          title: "Average Costing",
          payload: "/main.payroll.avg_costing",
        },
        {
          title: "Average Working hours",
          payload: "/main.payroll.avg_working_hrs",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/greetings.welcome",
        },
      ],
    }),
  "main.payroll.absentees": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.payroll.absentees.today",
        },
        {
          title: "Yesterday",
          payload: "/main.payroll.absentees.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.payroll.absentees.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.payroll.absentees.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.payroll",
        },
      ],
    }),
  "main.payroll.avg_working_hrs": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.payroll.avg_working_hrs.today",
        },
        {
          title: "Yesterday",
          payload: "/main.payroll.avg_working_hrs.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.payroll.avg_working_hrs.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.payroll.avg_working_hrs.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.payroll",
        },
      ],
    }),
  "main.payroll.avg_costing": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Daily",
          payload: "/main.payroll.avg_costing.today",
        },
        {
          title: "Monthly",
          payload: "/main.payroll.avg_costing.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.payroll",
        },
      ],
    }),
  "main.recon": () =>
    buildResponse({
      text: "Select the Reconciliation type.",
      buttons: [
        {
          title: "Variance",
          payload: "/main.recon.variance",
        },
        {
          title: "Cancellations",
          payload: "/main.recon.cancellations",
        },
        {
          title: "Cash Deposit Report",
          payload: "/main.recon.cdreport",
        },
        {
          title: "EDC Report",
          payload: "/main.recon.edcreport",
        },
        {
          title: "Expense Tab",
          payload: "/main.recon.expensetab",
        },
        {
          title: "Pending Payouts",
          payload: "/main.recon.pendingpayouts",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/greetings.welcome",
        },
      ],
    }),
  "main.recon.variance": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Yesterday",
          payload: "/main.recon.variance.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.recon.variance.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.recon.variance.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.recon",
        },
      ],
    }),
  "main.recon.cancellations": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.recon.cancellations.today",
        },
        {
          title: "Yesterday",
          payload: "/main.recon.cancellations.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.recon.cancellations.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.recon.cancellations.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.recon",
        },
      ],
    }),
  "main.recon.cdreport": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.recon.cdreport.today",
        },
        {
          title: "Yesterday",
          payload: "/main.recon.cdreport.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.recon.cdreport.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.recon.cdreport.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.recon",
        },
      ],
    }),
  "main.recon.edcreport": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.recon.edcreport.today",
        },
        {
          title: "Yesterday",
          payload: "/main.recon.edcreport.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.recon.edcreport.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.recon.edcreport.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.recon",
        },
      ],
    }),
  "main.recon.expensetab": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.recon.expensetab.today",
        },
        {
          title: "Yesterday",
          payload: "/main.recon.expensetab.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.recon.expensetab.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.recon.expensetab.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.recon",
        },
      ],
    }),
  "main.recon.pendingpayouts": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.recon.pendingpayouts.today",
        },
        {
          title: "Yesterday",
          payload: "/main.recon.pendingpayouts.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.recon.pendingpayouts.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.recon.pendingpayouts.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.recon",
        },
      ],
    }),
  "main.inventory": () =>
    buildResponse({
      text: "Select the Inventory type.",
      buttons: [
        {
          title: "Pending purchases",
          payload: "/main.inventory.pendingpurchases",
        },
        {
          title: "Pending Vendor payments",
          payload: "/main.inventory.pendingvendorpayments",
        },
        {
          title: "Pending Indents",
          payload: "/main.inventory.pendingindents",
        },
        {
          title: "Pending Physical Checks",
          payload: "/main.inventory.pendingphysicalchecks",
        },
        {
          title: "Pending Productions",
          payload: "/main.inventory.pendingproductions",
        },
        {
          title: "Wastages",
          payload: "/main.inventory.wastages",
        },
        {
          title: "Cost of goods",
          payload: "/main.inventory.costgoods",
        },
        {
          title: "Food cost",
          payload: "/main.inventory.foodcost",
        },
        {
          title: "High/Low Margin Items",
          payload: "/main.inventory.marginitems",
        },
        {
          title: "Loss making Items",
          payload: "/main.inventory.lossitems",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/greetings.welcome",
        },
      ],
    }),
  "main.inventory.pendingpurchases": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.inventory.pendingpurchases.today",
        },
        {
          title: "Yesterday",
          payload: "/main.inventory.pendingpurchases.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.inventory.pendingpurchases.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.inventory.pendingpurchases.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.inventory",
        },
      ],
    }),
  "main.inventory.pendingvendorpayments": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.inventory.pendingvendorpayments.today",
        },
        {
          title: "Yesterday",
          payload: "/main.inventory.pendingvendorpayments.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.inventory.pendingvendorpayments.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.inventory.pendingvendorpayments.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.inventory",
        },
      ],
    }),
  "main.inventory.pendingindents": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.inventory.pendingindents.today",
        },
        {
          title: "Yesterday",
          payload: "/main.inventory.pendingindents.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.inventory.pendingindents.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.inventory.pendingindents.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.inventory",
        },
      ],
    }),
  "main.inventory.pendingphysicalchecks": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.inventory.pendingphysicalchecks.today",
        },
        {
          title: "Yesterday",
          payload: "/main.inventory.pendingphysicalchecks.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.inventory.pendingphysicalchecks.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.inventory.pendingphysicalchecks.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.inventory",
        },
      ],
    }),
  "main.inventory.pendingproductions": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.inventory.pendingproductions.today",
        },
        {
          title: "Yesterday",
          payload: "/main.inventory.pendingproductions.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.inventory.pendingproductions.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.inventory.pendingproductions.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.inventory",
        },
      ],
    }),
  "main.inventory.wastages": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.inventory.wastages.today",
        },
        {
          title: "Yesterday",
          payload: "/main.inventory.wastages.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.inventory.wastages.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.inventory.wastages.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.inventory",
        },
      ],
    }),
  "main.inventory.costgoods": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.inventory.costgoods.today",
        },
        {
          title: "Yesterday",
          payload: "/main.inventory.costgoods.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.inventory.costgoods.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.inventory.costgoods.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.inventory",
        },
      ],
    }),
  "main.inventory.foodcost": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.inventory.foodcost.today",
        },
        {
          title: "Yesterday",
          payload: "/main.inventory.foodcost.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.inventory.foodcost.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.inventory.foodcost.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.inventory",
        },
      ],
    }),
  "main.inventory.marginitems": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.inventory.marginitems.today",
        },
        {
          title: "Yesterday",
          payload: "/main.inventory.marginitems.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.inventory.marginitems.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.inventory.marginitems.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.inventory",
        },
      ],
    }),
  "main.inventory.lossitems": () =>
    buildResponse({
      text: "Please select on which dates you want to see.",
      buttons: [
        {
          title: "Today",
          payload: "/main.inventory.lossitems.today",
        },
        {
          title: "Yesterday",
          payload: "/main.inventory.lossitems.yesterday",
        },
        {
          title: "Last Week",
          payload: "/main.inventory.lossitems.lastweek",
        },
        {
          title: "Last Month",
          payload: "/main.inventory.lossitems.lastmonth",
        },
      ],
      quickReplies: [
        {
          title: "Back",
          payload: "/main.inventory",
        },
      ],
    }),
};
