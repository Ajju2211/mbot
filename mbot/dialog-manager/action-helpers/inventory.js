const axios = require("axios");
const BASE_URL = "http://client-bot-server.herokuapp.com";
const { buildResponse } = require("../../utils/make-response");
const { renameKeys, generateBackgroundColors } = require("../../utils");

module.exports.pendingpurchases = async (data, token) => {
  const URL = BASE_URL + "/api/v1/inventory/pending-purchases";
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
    let metadata = {};
    metadata.title = outlet.outletname;
    metadata.data = [
      {
        title: "Requested-Date",
        value: outlet.requested_date,
      },
      {
        title: "Delivery-Date",
        value: outlet.delivery_date,
      },
      {
        title: "PO-NO",
        value: outlet.po_number,
      },
    ];

    outlet.products.forEach((item) => {
      labels.push(item.name);
      chartData.push(item.requested_quantity);
      chartIntersectData.push(item.pending_quantity);
    });
    cardWithGraph.push({
      metadata: metadata,
      label1: "RequestedQty",
      label2: "PendingQty",
      title: outlet.outletname,
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
      payload: "/main.inventory.pendingpurchases",
    },
    {
      title: "Sub Menu",
      payload: "/main.inventory",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];

  return buildResponse({
    chartCards: cardWithGraph,
  }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};

module.exports.pendingvendorpayments = async (data, token) => {
  const URL = BASE_URL + "/api/v1/inventory/pending-vendor-payments";
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
    outlet.dishes.forEach((item) => {
      labels.push(item.vendor_name);
      chartData.push(item.amount);
    });
    cardWithGraph.push({
      label1: "Amount",
      title: outlet.outletname,
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
      payload: "/main.inventory.pendingvendorpayments",
    },
    {
      title: "Sub Menu",
      payload: "/main.inventory",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({
    chartCards: cardWithGraph,
  }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};

module.exports.pendingindents = async (data, token) => {
  const URL = BASE_URL + "/api/v1/inventory/pending-indents";
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
    let metadata = {};
    metadata.title = outlet.outletname;
    metadata.data = [
      {
        title: "Requested-Date",
        value: outlet.requested_date,
      },
      {
        title: "Delivery-Date",
        value: outlet.delivery_date,
      },
      {
        title: "INDENT-NO",
        value: outlet.indent_number,
      },
    ];

    outlet.products.forEach((item) => {
      labels.push(item.name);
      chartData.push(item.requested_quantity);
      chartIntersectData.push(item.pending_quantity);
    });
    cardWithGraph.push({
      label1: "RequestedQty",
      label2: "PendingQty",
      metadata: metadata,
      title: outlet.outletname,
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
      payload: "/main.inventory.pendingindents",
    },
    {
      title: "Sub Menu",
      payload: "/main.inventory",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({
    chartCards: cardWithGraph,
  }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};
module.exports.pendingphysicalchecks = async (data, token) => {
  const URL = BASE_URL + "/api/v1/inventory/pending-physical-checks";
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
    outlet.dishes.forEach((item) => {
      labels.push(item.category_name);
      chartData.push(item.physical_check_date);
    });
    cardWithGraph.push({
      label1: "Phy.Check.Date",
      title: outlet.outletname,
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
      payload: "/main.inventory.pendingphysicalchecks",
    },
    {
      title: "Sub Menu",
      payload: "/main.inventory",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({
    chartCards: cardWithGraph,
  }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};

module.exports.pendingproductions = async (data, token) => {
  const URL = BASE_URL + "/api/v1/inventory/pending-productions";
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
    outlet.dishes.forEach((item) => {
      labels.push(item.category_name);
      chartData.push(item.physical_check_date);
    });
    cardWithGraph.push({
      label1: "Phy.Check.Date",
      title: outlet.outletname,
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
      payload: "/main.inventory.pendingproductions",
    },
    {
      title: "Sub Menu",
      payload: "/main.inventory",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({
    chartCards: cardWithGraph,
  }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};

module.exports.wastages = async (data, token) => {
  const URL = BASE_URL + "/api/v1/inventory/wastages";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  console.log(resp);
  let cards = [];
  let id = 0;
  result.forEach((outlet) => {
    let obj = {};
    obj.table = {};
    obj.metadata = {};
    obj.table.tableData = [];
    outlet.dishes.forEach((dish) => {
      obj.table.tableData.push({
        id: id,
        name: dish.dish_name,
        qty: dish.wastage_qty,
        cost: dish.cost,
        type: dish.type,
      });
    });
    obj.table.columns = [
      {
        title: "Name",
        field: "name",
      },
      {
        title: "Qty",
        field: "qty",
      },
      {
        title: "Cost",
        field: "cost",
      },
      {
        title: "Type",
        field: "type",
      },
    ];
    obj.table.initialSort = [{ column: "name", dir: "asc" }];
    obj.metadata.title = outlet.outletname;
    obj.metadata.data = [
      {
        title: "From",
        value: data.from,
      },
      {
        title: "To",
        value: data.to,
      },
    ];
    cards.push(obj);
    id++;
  });
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.inventory.wastages",
    },
    {
      title: "Sub Menu",
      payload: "/main.inventory",
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

module.exports.costgoods = async (data, token) => {
  const URL = BASE_URL + "/api/v1/inventory/cost-of-goods";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cards = [];
  let id = 0;
  result.forEach((outlet) => {
    let obj = {};
    obj.table = {};
    obj.metadata = {};
    obj.table.tableData = [];
    outlet.dishes.forEach((dish) => {
      obj.table.tableData.push({
        id: id,
        name: dish.dish_name,
        category: dish.category_name,
        cost: dish.cost,
      });
    });
    obj.table.columns = [
      {
        title: "Name",
        field: "name",
      },
      {
        title: "Category",
        field: "category",
      },
      {
        title: "Cost",
        field: "cost",
      },
    ];
    obj.table.initialSort = [{ column: "name", dir: "asc" }];
    obj.metadata.title = outlet.outletname;
    obj.metadata.data = [
      {
        title: "From",
        value: data.from,
      },
      {
        title: "To",
        value: data.to,
      },
    ];
    cards.push(obj);
    id++;
  });

  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.inventory.costgoods",
    },
    {
      title: "Sub Menu",
      payload: "/main.inventory",
    },
    {
      title: "Main Menu",
      payload: "/greetings.welcome",
    },
  ];
  return buildResponse({cards: cards }).concat(
    buildResponse({
      quickReplies: quickReplies1,
    })
  );
};

module.exports.foodcost = async (data, token) => {
  const URL = BASE_URL + "/api/v1/inventory/food-cost";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cards = [];
  let id = 0;
  result.forEach((outlet) => {
    let obj = {};
    obj.table = {};
    obj.metadata = {};
    obj.table.tableData = [];
    outlet.dishes.forEach((dish) => {
      obj.table.tableData.push({
        id: id,
        name: dish.dish_name,
        category: dish.category_name,
        cost: dish.cost,
        dish_sold: dish.dish_sold,
        average_dish_selling_price: dish.average_dish_selling_price,
        food_cost: dish.food_cost,
        wastage_amount: dish.wastage_amount,
      });
    });
    obj.table.columns = [
      {
        title: "Name",
        field: "name",
      },
      {
        title: "Category",
        field: "category",
      },
      {
        title: "Cost",
        field: "cost",
      },
      {
        title: "Dish Sold",
        field: "dish_sold",
      },
      {
        title: "Avg. S.P",
        field: "average_dish_selling_price",
      },
      {
        title: "Food cost",
        field: "food_cost",
      },
      {
        title: "Wastage Amt.",
        field: "wastage_amount",
      },
    ];
    obj.table.initialSort = [{ column: "name", dir: "asc" }];
    obj.metadata.title = outlet.outletname;
    obj.metadata.data = [
      {
        title: "From",
        value: data.from,
      },
      {
        title: "To",
        value: data.to,
      },
    ];
    cards.push(obj);
    id++;
  });
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.inventory.foodcost",
    },
    {
      title: "Sub Menu",
      payload: "/main.inventory",
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

module.exports.marginitems = async (data, token) => {
  const URL = BASE_URL + "/api/v1/inventory/high-low-margins";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cards = [];
  let id = 0;
  result.forEach((outlet) => {
    let obj = {};
    obj.table = {};
    obj.metadata = {};
    obj.table.tableData = [];
    outlet.dishes.forEach((dish) => {
      dish.ordertype.forEach((otype) => {
        obj.table.tableData.push({
          id: id,
          name: dish.dish_name,
          category: dish.category_name,
          order_type: otype.order_type,
          amount: otype.amount,
        });
      });
    });
    obj.table.columns = [
      {
        title: "Name",
        field: "name",
      },
      {
        title: "Category",
        field: "category",
      },
      {
        title: "Order Type",
        field: "order_type",
      },
      {
        title: "Amount",
        field: "amount",
      },
    ];
    obj.table.initialSort = [{ column: "name", dir: "asc" }];
    obj.metadata.title = outlet.outletname;
    obj.metadata.data = [
      {
        title: "From",
        value: data.from,
      },
      {
        title: "To",
        value: data.to,
      },
    ];
    cards.push(obj);
    id++;
  });
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.inventory.marginitems",
    },
    {
      title: "Sub Menu",
      payload: "/main.inventory",
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

module.exports.lossitems = async (data, token) => {
  const URL = BASE_URL + "/api/v1/inventory/loss-making-items";
  const resp = await axios.post(URL, data, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  let result = resp.data.result;
  let cards = [];
  let id = 0;
  result.forEach((outlet) => {
    let obj = {};
    obj.table = {};
    obj.metadata = {};
    obj.table.tableData = [];
    outlet.dishes.forEach((dish) => {
      dish.ordertype.forEach((otype) => {
        obj.table.tableData.push({
          id: id,
          name: dish.dish_name,
          category: dish.category_name,
          order_type: otype.order_type,
          amount: otype.amount,
        });
      });
    });
    obj.table.columns = [
      {
        title: "Name",
        field: "name",
      },
      {
        title: "Category",
        field: "category",
      },
      {
        title: "Order Type",
        field: "order_type",
      },
      {
        title: "Amount",
        field: "amount",
      },
    ];
    obj.table.initialSort = [{ column: "name", dir: "asc" }];
    obj.metadata.title = outlet.outletname;
    obj.metadata.data = [
      {
        title: "From",
        value: data.from,
      },
      {
        title: "To",
        value: data.to,
      },
    ];
    cards.push(obj);
    id++;
  });
  let quickReplies1 = [
    {
      title: "Back",
      payload: "/main.inventory.lossitems",
    },
    {
      title: "Sub Menu",
      payload: "/main.inventory",
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
