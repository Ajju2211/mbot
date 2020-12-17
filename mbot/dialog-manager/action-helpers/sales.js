const axios = require("axios");
const BASE_URL = process.env.API_BASE_URL;
const { buildResponse } = require("../../utils/make-response");
const { renameKeys, generateBackgroundColors } = require("../../utils");

module.exports.consolidated = async (data, token) => {
  const URL = BASE_URL + "/api/v1/sales/consolidated";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let d = data.for;
  let textMessage = `${d}'s Consolidated sales`;
  let cards = [];
  if (data.for === "week" || data.for === "month") {
    d = "Last Week";
    textMessage = `${d}'s Consolidated sales from ${data.from} - ${data.to}`;
  }
  textMessage += `\n Total Bills - ${result.totaldata.bill_count} \n Total Sales - ${result.totaldata.totalsale}`;
  result.data.forEach((outlet) => {
    let obj = {};
    obj.title = outlet.outletname;
    obj.metadata = {};
    obj.metadata.title = outlet.outletname;
    obj.metadata.data = [
      {
        title: "Bill Counts",
        value: outlet.bill_count,
      },
      {
        title: "Total Sales",
        value: outlet.totalsale,
      },
    ];
    cards.push(obj);
  });
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.sales.consolidated",
    },
    {
      title: "Sub Menu",
      payload: "/main.sales",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({ text: textMessage, cards: cards }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};

module.exports.topitems = async (data, token) => {
  const URL = BASE_URL + "/api/v1/sales/topitems";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let d = data.for;
  let textMessage = `${d}'s Top Items`;
  let cardWithGraph = [];
  if (data.for === "week" || data.for === "month") {
    d = "Last Week";
    textMessage = `${d}'s Top Items from ${data.from} - ${data.to}`;
  }
  textMessage += `\n Total Quantities - ${result.totaldata.total_qty} \n Total Amount - ${result.totaldata.total_amt}`;
  const CHARTTYPE = "bar";
  const DIPLAYLEGEND = "true";
  result.data.forEach((outlet) => {
    let labels = [];
    // Y-Axis
    let chartData = [];
    // Intersection of X-Y axes.
    let chartIntersectData = [];
    outlet.items.forEach((item) => {
      labels.push(item.itemname);
      chartData.push(item.total_amt);
      chartIntersectData.push(item.total_qty);
    });
    cardWithGraph.push({
      title: outlet.outletname,
      label1: "Amount",
      label2: "Qty",
      labels: labels,
      chartsData: chartData,
      chartsIntersectData: chartIntersectData,
      backgroundColor: generateBackgroundColors(chartData.length),
      chartType: CHARTTYPE,
      displayLegend: DIPLAYLEGEND,
    });
  });
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.sales.topitems",
    },
    {
      title: "Sub Menu",
      payload: "/main.sales",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({ text: textMessage, chartCards: cardWithGraph }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};

module.exports.topcategories = async (data, token) => {
  const URL = BASE_URL + "/api/v1/sales/topcategories";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let d = data.for;
  let textMessage = `${d}'s Top Categories`;
  let cardWithGraph = [];
  if (data.for === "week" || data.for === "month") {
    d = "Last Week";
    textMessage = `${d}'s Top Categories from ${data.from} - ${data.to}`;
  }
  textMessage += `\n Total Quantities - ${result.totaldata.total_qty} \n Total Amount - ${result.totaldata.total_amt}`;
  const CHARTTYPE = "bar";
  const DIPLAYLEGEND = "true";
  result.data.forEach((outlet) => {
    let labels = [];
    // Y-Axis
    let chartData = [];
    // Intersection of X-Y axes.
    let chartIntersectData = [];
    outlet.category.forEach((item) => {
      labels.push(item.itemname);
      chartData.push(item.total_amt);
      chartIntersectData.push(item.total_qty);
    });
    cardWithGraph.push({
      title: outlet.outletname,
      label1: "Amount",
      label2: "Qty",
      labels: labels,
      chartsData: chartData,
      chartsIntersectData: chartIntersectData,
      backgroundColor: generateBackgroundColors(chartData.length),
      chartType: CHARTTYPE,
      displayLegend: DIPLAYLEGEND,
    });
  });
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.sales.topcategories",
    },
    {
      title: "Sub Menu",
      payload: "/main.sales",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({ text: textMessage, chartCards: cardWithGraph }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};

module.exports.topordertypes = async (data, token) => {
  const URL = BASE_URL + "/api/v1/sales/topordertypes";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let d = data.for;
  let textMessage = `${d}'s Top OrderTypes`;
  let cardWithGraph = [];
  if (data.for === "week" || data.for === "month") {
    d = "Last Week";
    textMessage = `${d}'s Top OrderTypes from ${data.from} - ${data.to}`;
  }
  textMessage += `\n Total Quantities - ${result.totaldata.total_qty} \n Total Amount - ${result.totaldata.total_amt}`;
  const CHARTTYPE = "bar";
  const DIPLAYLEGEND = "true";
  result.data.forEach((outlet) => {
    let labels = [];
    // Y-Axis
    let chartData = [];
    // Intersection of X-Y axes.
    let chartIntersectData = [];
    outlet.order_type.forEach((item) => {
      labels.push(item.itemname);
      chartData.push(item.total_amt);
      chartIntersectData.push(item.total_qty);
    });
    cardWithGraph.push({
      title: outlet.outletname,
      label1: "Amount",
      label2: "Qty",
      labels: labels,
      chartsData: chartData,
      chartsIntersectData: chartIntersectData,
      backgroundColor: generateBackgroundColors(chartData.length),
      chartType: CHARTTYPE,
      displayLegend: DIPLAYLEGEND,
    });
  });
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.sales.topordertypes",
    },
    {
      title: "Sub Menu",
      payload: "/main.sales",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({ text: textMessage, chartCards: cardWithGraph }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};
