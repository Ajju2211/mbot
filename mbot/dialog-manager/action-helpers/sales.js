const axios = require("axios");
const BASE_URL = process.env.API_BASE_URL;
const { buildResponse } = require("../../utils/make-response");
const { renameKeys, generateBackgroundColors, capitalizedCamelCase } = require("../../utils");

module.exports.consolidated = async (data, token, userObj) => {
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
    d = "Last "+d;
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
  // multiSimpleCards
  return buildResponse({ text: textMessage, multiSimpleCards: { cards: cards, minicardlimit: 5 } }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    }, userObj)
  );
};

module.exports.topitems = async (data, token, userObj) => {
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
    d = "Last "+d;
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
    }, userObj)
  );
};

module.exports.topcategories = async (data, token, userObj) => {
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
    d = "Last "+d;
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
    }, userObj)
  );
};

module.exports.topordertypes = async (data, token, userObj) => {
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
  if (data.for === "week" || data.for === "month") {
    d = "Last "+d;
    textMessage = `${d}'s Top OrderTypes from ${data.from} - ${data.to}`;
  }
  console.log(result);
  textMessage += `\n Total Quantities - ${result.totaldata.total_qty} \n Total Amount - ${result.totaldata.total_amt}`;
  let chart = {};
  let labels = [];
  let data1 = [];
  let data2 = [];
  let cards = [];
  result.data.forEach((order) => {
    console.log(order);
    let cardObj = {};
    let minicards = [];
    labels.push(capitalizedCamelCase(order.order_type));
    // For the Chart
    data1.push(order.total.qty);
    data2.push(order.total.amt);
    // For the cards
    cardObj.title = order.order_type;
    // cards.push();
    order.outlets.forEach((item) => {
      let miniCardObj = {};
      miniCardObj.metadata = {};
      miniCardObj.metadata.title = item.name;
      miniCardObj.metadata.data = [
        {
          title: "TotalQty",
          value: item.total_qty,
        },
        {
          title: "TotalAmt",
          value: item.total_amt,
        }
      ];

      minicards.push(miniCardObj);
    });
    cardObj.minicards = minicards;
    cards.push(cardObj);

  });
  chart = {
    title1: "Qty",
    title2: "Amt",
    labels: labels,
    data1: data1,
    data2: data2,
  };
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

  return buildResponse({ scrollableChart: chart, text: textMessage }).concat(buildResponse({
     groupedSimpleCards2: {cards: cards}
  }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    }, userObj)
  ));
};

module.exports.top_payment_types = async (data, token, userObj) => {
  const URL = BASE_URL + "/api/v1/sales/top_payment_types";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let d = data.for;
  let textMessage = `${d}'s Top PaymentTypes`;
  if (data.for === "week" || data.for === "month") {
    d = "Last "+d;
    textMessage = `${d}'s Top PaymentTypes from ${data.from} - ${data.to}`;
  }
  console.log(result);
  textMessage += `\n Total Quantities - ${result.totaldata.total_qty || "-"} \n Total Amount - ${result.totaldata.total_amt || "-"}`;
  let chart = {};
  let labels = [];
  let data1 = [];
  let cards = [];
  result.data.forEach((outlet) => {
    let cardObj = {};
    let minicards = [];
    labels.push(capitalizedCamelCase(outlet.outletname));
    // For the Chart
    data1.push(outlet.total_amt);
    // For the cards
    cardObj.title = outlet.outletname;
    // cards.push();
    outlet.payment_type.forEach((item) => {
      let miniCardObj = {};
      miniCardObj.metadata = {};
      miniCardObj.metadata.title = item.itemname;
      miniCardObj.metadata.data = [
        {
          title: "TotalAmt",
          value: item.total_amt,
        }
      ];

      minicards.push(miniCardObj);
    });
    cardObj.minicards = minicards;
    cards.push(cardObj);

  });
  chart = {
    title1: "Amt",
    labels: labels,
    data1: data1
  };
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.sales.top_payment_types",
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

  return buildResponse({ scrollableChart: chart, text: textMessage }).concat(buildResponse({
     groupedSimpleCards2: {cards: cards, minicardrowlimit: 1}
  }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    }, userObj)
  ));
};


module.exports.aggregator_revenue = async (data, token, userObj) => {
  const URL = BASE_URL + "/api/v1/sales/aggregator_revenue";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let d = data.for;
  let textMessage = `${d}'s Aggregator Revenue in Sales`;
  if (data.for === "week" || data.for === "month") {
    d = "Last "+d;
    textMessage = `${d}'s Aggregator Revenue in Sales from ${data.from} - ${data.to}`;
  }
  console.log(result);
  // textMessage += `\n Total Quantities - ${result.totaldata.total_qty || "-"} \n Total Amount - ${result.totaldata.total_amt || "-"}`;
  let chart = {};
  let labels = [];
  let data1 = [];
  let cards = [];
  result.forEach((aggregator) => {
    let cardObj = {};
    let minicards = [];
    labels.push(capitalizedCamelCase(aggregator.agg_type));
    // For the Chart
    data1.push(aggregator.total_amt);
    // For the cards
    cardObj.title = capitalizedCamelCase(aggregator.agg_type);
    let i=0;
    // cards.push();
    aggregator.details.forEach((item) => {
      let miniCardObj = {};
      miniCardObj.metadata = {};
      miniCardObj.metadata.title = item.outlet_name;
      miniCardObj.metadata.data = [
        {
          title: "Payable",
          value:item.customer_payable
        },
        {
          title: "Sales",
          value:item.sales
        },
        {
          title: "Earnings",
          value: item.earnings
        },
        {
          title: "Difference",
          value: item.difference
        }
      ];


      // miniCardObj.table = {};
      // miniCardObj.table.tableData = [];
      //   let PaymentTypeObj = {
      //     id:i,
      //     name: item.itemname,
      //     deduction: item.deduction,
      //     sales: item.sales,
      //     commission: item.commission,
      //     expected_deposit: item.expected_deposit,
      //     recorded_deposit: item.recorded_deposit,
      //     date_range: item.date_range,
      //     correct: tick
      //   };
    //     miniCardObj.table.tableData.push(PaymentTypeObj);
    //     i++;
    //   miniCardObj.table.columns = [{
    //     title:"Name",
    //     field:"name"
    //   },
    //   {
    //     title:"Deduction",
    //     field:"deduction",
    //     bottomCalc:"sum"
    //   },
    //   {
    //     title:"sales",
    //     field:"sales",
    //     bottomCalc:"sum"
    //   },
    //   {
    //     title:"commission",
    //     field:"commission",
    //     bottomCalc:"sum"
    //   },
    //   {
    //     title:"Expected Deposit",
    //     field:"expected_deposit",
    //     bottomCalc:"sum"
    //   },
    //   {
    //     title:"Recorded Deposit",
    //     field:"recorded_deposit",
    //     bottomCalc:"sum"
    //   },
    //   {
    //     title:"Date Range",
    //     field:"date_range"
    //   },
    //   {
    //     title:"Correct",
    //     field:"correct",
    //     formatter:"tickCross"
    //   }
    // ];
      minicards.push(miniCardObj);
    });
    cardObj.minicards = minicards;
    cards.push(cardObj);

  });
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.sales.aggregator_revenue",
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

  return buildResponse({
    text: textMessage,
     groupedSimpleCards2: {cards: cards, minicardrowlimit:4}
  }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    }, userObj)
  );
};