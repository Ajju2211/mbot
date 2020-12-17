const axios = require("axios");
const BASE_URL = process.env.API_BASE_URL;
const { buildResponse } = require("../../utils/make-response");
const { renameKeys, generateBackgroundColors } = require("../../utils");

module.exports.absentees = async (data, token) => {
  const URL = BASE_URL + "/api/v1/payroll/absentees";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let d = data.for;
  let textMessage = `${d}'s Absentees`;
  let cards = [];
  if (data.for === "week" || data.for === "month") {
    d = "Last Week";
    textMessage = `${d}'s Absentees from ${data.from} - ${data.to}`;
  }
  // textMessage += `\n Total Bills - ${result.totaldata.bill_count} \n Total payroll - ${result.totaldata.totalsale}`;
  let id = 0;
  result.forEach((outlet) => {
    let obj = {};
    obj.table = {};
    obj.metadata = {};
    obj.table.tableData = [];
    outlet.details.forEach((detail) => {
      obj.table.tableData.push({
        id: id,
        name: detail.name,
      });
    });
    obj.table.columns = [
      {
        title: "Name",
        field: "name",
      },
    ];
    obj.table.initialSort = [{ column: "name", dir: "asc" }];
    obj.metadata.title = outlet.outlet_name;
    obj.metadata.data = [
      {
        title: "Category",
        value: outlet.category_name,
      },
      {
        title: "Absentees",
        value: outlet.absentees_count,
      },
    ];
    cards.push(obj);
    id++;
  });
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.payroll.absentees",
    },
    {
      title: "Sub Menu",
      payload: "/main.payroll",
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

module.exports.avg_working_hrs = async (data, token) => {
  const URL = BASE_URL + "/api/v1/payroll/avg-working-hours";
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
      labels.push(detail.name);
      chartData.push(detail.avg_working_hours);
    });
    cardWithGraph.push({
      metadata: {
        title: outlet.outlet_name,
        data: [
          {
            title: "Category",
            value: outlet.category_name,
          },
          {
            title: "Total",
            value: outlet.total_working_hours + " hrs",
          },
        ],
      },
      label1: "AvgWorkingHrs",
      title: outlet.outlet_name,
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
      payload: "/main.payroll.avg_working_hrs",
    },
    {
      title: "Sub Menu",
      payload: "/main.payroll",
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

module.exports.avg_costing = async (data, token) => {
  const URL = BASE_URL + "/api/v1/payroll/avg-costing";
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
      labels.push(detail.name);
      chartData.push(detail.avg_costing);
    });
    cardWithGraph.push({
      metadata: {
        title: outlet.outlet_name,
        data: [
          {
            title: "Category",
            value: outlet.category_name,
          },
          {
            title: "Total",
            value: outlet.total_costing,
          },
        ],
      },
      label1: "AvgCosting",
      title: outlet.outlet_name,
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
      payload: "/main.payroll.avg_costing",
    },
    {
      title: "Sub Menu",
      payload: "/main.payroll",
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
