const axios = require("axios");
const BASE_URL = process.env.API_BASE_URL;
const { buildResponse } = require("../../utils/make-response");
const { renameKeys, generateBackgroundColors } = require("../../utils");

module.exports.variance = async (data, token) => {
  const URL = BASE_URL + "/api/v1/reconciliation/variance";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let d = data.for;
  let cards = [];
  result.forEach((outlet) => {
    let obj = {};
    obj.title = outlet.outlet_name;
    obj.metadata = {};
    obj.metadata.title = outlet.outlet_name;
    // Adding atleast 2 vales bcoz ui doesn't have single value
    obj.metadata.data = [
      {
        title: "Amount",
        value: outlet.variance_amount,
      },
      {
        title: "As upto",
        value: data.from + " to " + data.to,
      },
    ];
    cards.push(obj);
  });
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.recon.variance",
    },
    {
      title: "Sub Menu",
      payload: "/main.recon",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({ cards: cards }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};

module.exports.cancellations = async (data, token) => {
  const URL = BASE_URL + "/api/v1/reconciliation/cancellations";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cardWithGraph = [];
  const CHARTTYPE = "bar";
  const DIPLAYLEGEND = "true";
  result.forEach((outlet) => {
    let labels = [];
    // Y-Axis
    let chartData = [];
    outlet.details.forEach((detail) => {
      labels.push(detail.reason);
      chartData.push(detail.cancelled_count);
    });
    cardWithGraph.push({
      title: outlet.outlet_name,
      label1: "Cancellations",
      labels: labels,
      chartsData: chartData,
      backgroundColor: generateBackgroundColors(chartData.length),
      chartType: CHARTTYPE,
      displayLegend: DIPLAYLEGEND,
    });
  });
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.recon.cancellations",
    },
    {
      title: "Sub Menu",
      payload: "/main.recon",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({ chartCards: cardWithGraph }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};

module.exports.cdreport = async (data, token) => {
  const URL = BASE_URL + "/api/v1/reconciliation/bankdepositreport";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cardWithGraph = [];
  const CHARTTYPE = "bar";
  const DIPLAYLEGEND = "true";
  result.forEach((outlet) => {
    let labels = [];
    // Y-Axis
    let chartData = [];
    // Intersection of X-Y axes.
    let chartIntersectData = [];
    outlet.details.forEach((detail) => {
      labels.push(detail.aggregator);
      chartData.push(detail.deposited_amount);
      chartIntersectData.push(detail.total_amount);
    });
    cardWithGraph.push({
      title: outlet.outlet_name,
      label1: "Deposited",
      label2: "Amt",
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
      payload: "/main.recon.cdreport",
    },
    {
      title: "Sub Menu",
      payload: "/main.recon",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({ chartCards: cardWithGraph }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};

module.exports.edcreport = async (data, token) => {
  const URL = BASE_URL + "/api/v1/reconciliation/edcreport";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cardWithGraph = [];
  const CHARTTYPE = "bar";
  const DIPLAYLEGEND = "true";
  result.forEach((outlet) => {
    let labels = [];
    // Y-Axis
    let chartData = [];
    // Intersection of X-Y axes.
    let chartIntersectData = [];
    outlet.details.forEach((detail) => {
      labels.push(detail.aggregator);
      chartData.push(detail.recon);
      chartIntersectData.push(detail.amount_credited);
    });
    cardWithGraph.push({
      title: outlet.outlet_name,
      label1: "Amt",
      label2: "AmtCredited",
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
      payload: "/main.recon.edcreport",
    },
    {
      title: "Sub Menu",
      payload: "/main.recon",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({ chartCards: cardWithGraph }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};

module.exports.expensetab = async (data, token) => {
  const URL = BASE_URL + "/api/v1/reconciliation/expensetab";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cardWithGraph = [];
  const CHARTTYPE = "bar";
  const DIPLAYLEGEND = "true";
  result.forEach((outlet) => {
    let labels = [];
    // Y-Axis
    let chartData = [];
    // Intersection of X-Y axes.
    let chartIntersectData = [];
    outlet.details.forEach((detail) => {
      labels.push(detail.aggregator);
      chartData.push(detail.recon);
      chartIntersectData.push(detail.amount_credited);
    });
    cardWithGraph.push({
      title: outlet.outlet_name,
      label1: "recon",
      label2: "AmtCredited",
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
      payload: "/main.recon.expensetab",
    },
    {
      title: "Sub Menu",
      payload: "/main.recon",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({ chartCards: cardWithGraph }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};

module.exports.pendingpayouts = async (data, token) => {
  const URL = BASE_URL + "/api/v1/reconciliation/pendingpayouts";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cardWithGraph = [];
  const CHARTTYPE = "bar";
  const DIPLAYLEGEND = "true";
  result.forEach((outlet) => {
    let labels = [];
    // Y-Axis
    let chartData = [];
    // Intersection of X-Y axes.
    let chartIntersectData = [];
    outlet.details.forEach((detail) => {
      labels.push(detail.aggregator);
      chartData.push(detail.pending_amount);
      chartIntersectData.push(detail.total_amount);
    });
    cardWithGraph.push({
      title: outlet.outlet_name,
      label1: "PendingAmt",
      label2: "Amt",
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
      payload: "/main.recon.pendingpayouts",
    },
    {
      title: "Sub Menu",
      payload: "/main.recon",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({ chartCards: cardWithGraph }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};
