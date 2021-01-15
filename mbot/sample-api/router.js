const router = require("express").Router();

const salesApi = require("../sample-api/sales_api");
const reconc = require("../sample-api/reconciliation_api");
const expense = require("../sample-api/expense_api");
const payroll = require("../sample-api/payroll_api");
const inventory = require("../sample-api/inventory_api");
const authController = require("../sample-api/auth");

// verify user by email_id
router
    .post('/user/verifyUser', authController.getUserData);
// Login API
router
    .post('/user/login', authController.login);
// SALES API
// consolidated sales
router
    .post('/sales/consolidated', salesApi.consolidatedSales);

// topitems sales
router
    .post('/sales/topitems', salesApi.topitems);

// topcategories sales
router
    .post('/sales/topcategories', salesApi.topcategories);

// topordertypes sales
router
    .post('/sales/topordertypes', salesApi.topordertypes);

// toppaymenttypes sales
router
    .post('/sales/top_payment_types', salesApi.toppayments);
    
// aggregator_revenue sales
router
    .post('/sales/aggregator_revenue', salesApi.aggregator_revenue);

// reconciliation API
// edcreport
router
    .post('/reconciliation/edcreport', reconc.edcreport);
// bankdepositreport
router
    .post('/reconciliation/bankdepositreport', reconc.bankdepositreport);
// cancellations
router
    .post('/reconciliation/cancellations', reconc.cancellations);
// variance
router
    .post('/reconciliation/variance', reconc.variance);
// pendingpayouts
router
    .post('/reconciliation/pendingpayouts', reconc.pendingpayouts);
// expencetab
router
    .post('/reconciliation/expensetab', reconc.expensetab);
// reconciliation_table
router
    .post('/reconciliation/reconciliation_table', reconc.reconciliation_table);
// variance_aggregator_wise
router
    .post('/reconciliation/variance_aggregator_wise', reconc.variance_aggregator_wise);

// sales_payment_wise
router
    .post('/reconciliation/sales_payment_wise', reconc.sales_payment_wise);

// expense API
// create_expense API
router
    .post('/expense/create_expense_form',expense.create_expense);

// save_expense API
router
.post('/expense/save_expense',expense.save_expense);

// get_approval_expense API
router
    .post('/expense/get_approval_expense',expense.get_approve_expense);

// save_approve_expense API
router
.post('/expense/save_approve_expense',expense.save_approve_expense);

// payroll API
// absentees API
router
    .post('/payroll/absentees',payroll.absentees);
// avg_working_hours API
router
    .post('/payroll/avg-working-hours',payroll.avg_working_hrs);
// avg_costing API
router
    .post('/payroll/avg-costing',payroll.avg_costing);

// inventory API
// pending_purchases
router
    .post('/inventory/pending-purchases',inventory.pending_purchases);
// pending_indents
router
    .post('/inventory/pending-indents',inventory.pending_indents);
// pending_productions
router
    .post('/inventory/pending-productions',inventory.pending_productions);
// pending_vendor_payments
router
    .post('/inventory/pending-vendor-payments',inventory.pending_vendor_payments);
// pending_physical_checks
router
    .post('/inventory/pending-physical-checks',inventory.pending_physical_checks);
// high_low_margins
router
    .post('/inventory/high-low-margins',inventory.high_low_margins);
// loss making items
router
    .post('/inventory/loss-making-items',inventory.loss_making_items);
// food cost
router
    .post('/inventory/food-cost',inventory.food_cost);
// wastages
router
    .post('/inventory/wastages',inventory.wastages);
// cost-of-goods
router
    .post('/inventory/cost-of-goods',inventory.cost_of_goods);
module.exports = router;
