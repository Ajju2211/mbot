const router = require("express").Router();

const salesApi = require("../sample-api/sales_api");
const reconc = require("../sample-api/reconciliation_api");
const payroll = require("../sample-api/payroll_api");
const inventory = require("../sample-api/inventory_api");
const authController = require("../sample-api/auth");

// verify user by email_id
router
    .post('/user/verifyUser', authController.getUserData);
// Login API
router
    .post('/login', authController.login);
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
