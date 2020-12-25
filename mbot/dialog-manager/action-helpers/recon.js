const axios = require("axios");
const BASE_URL = process.env.API_BASE_URL;
const { buildResponse } = require("../../utils/make-response");
const { renameKeys, generateBackgroundColors, capitalizedCamelCase } = require("../../utils");

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


module.exports.reconciliation_table = async (data, token) => {
  const URL = BASE_URL + "/api/v1/reconciliation/reconciliation_table";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let d = data.for;
  let textMessage = `${d}'s Reconciliation Table`;
  if (data.for === "week" || data.for === "month") {
    d = "Last "+d;
    textMessage = `${d}'s Reconciliation Table from ${data.from} - ${data.to}`;
  }
  console.log(result);
  // textMessage += `\n Total Quantities - ${result.totaldata.total_qty || "-"} \n Total Amount - ${result.totaldata.total_amt || "-"}`;
  let chart = {};
  let labels = [];
  let data1 = [];
  let cards = [];
  result.forEach((outlet) => {
    let cardObj = {};
    let minicards = [];
    labels.push(capitalizedCamelCase(outlet.outletname));
    // For the Chart
    data1.push(outlet.total_amt);
    // For the cards
    cardObj.title = capitalizedCamelCase(outlet.outletname);
    let i=0;
    // cards.push();
    outlet.payment_type.forEach((item) => {
      let miniCardObj = {};
      miniCardObj.metadata = {};
      miniCardObj.metadata.title = item.itemname;
      let tickHtml = "";
      let tick = 0;
      if(item.correct.toLowerCase()=="yes"){
        tickHtml = '<i class="fa fa-check"  style = "color:orange;display:flex;font-size:1.1em !important" aria-hidden="true"></i>';
        tick=1;
      }
      else{
        tickHtml = '<i class="fa fa-times"  style = "color:red;display:flex;font-size:1.1em !important" aria-hidden="true"></i>';
        tick = 0;
      }
      miniCardObj.metadata.data = [
        {
          title: "Sales",
          value: item.sales,
        },
        {
          title: "Recorded/Expected",
          value: item.expected_deposit+'/'+'<span style="display:flex;">'+item.recorded_deposit+'</span>'+' '+tickHtml
        }
      ];

      miniCardObj.table = {};
      miniCardObj.table.tableData = [];
        let PaymentTypeObj = {
          id:i,
          name: item.itemname,
          deduction: item.deduction,
          sales: item.sales,
          commission: item.commission,
          expected_deposit: item.expected_deposit,
          recorded_deposit: item.recorded_deposit,
          date_range: item.date_range,
          correct: tick
        };
        miniCardObj.table.tableData.push(PaymentTypeObj);
        i++;
      miniCardObj.table.columns = [{
        title:"Name",
        field:"name"
      },
      {
        title:"Deduction",
        field:"deduction",
        bottomCalc:"sum"
      },
      {
        title:"sales",
        field:"sales",
        bottomCalc:"sum"
      },
      {
        title:"commission",
        field:"commission",
        bottomCalc:"sum"
      },
      {
        title:"Expected Deposit",
        field:"expected_deposit",
        bottomCalc:"sum"
      },
      {
        title:"Recorded Deposit",
        field:"recorded_deposit",
        bottomCalc:"sum"
      },
      {
        title:"Date Range",
        field:"date_range"
      },
      {
        title:"Correct",
        field:"correct",
        formatter:"tickCross"
      }
    ];
      minicards.push(miniCardObj);
    });
    cardObj.minicards = minicards;
    cards.push(cardObj);

  });
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.recon.reconciliation_table",
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

  return buildResponse({
    text: textMessage,
     groupedSimpleCards: {cards: cards}
  }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};