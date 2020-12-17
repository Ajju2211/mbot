const router = require("express").Router();
const authMiddleware = require("../middlewares/auth");
const botController = require("../controllers/userBotController");
// user login
router.post("/login", authMiddleware.login);

// user logout
router.get("/logout", authMiddleware.logout);

// protect every route on /user/*
router.use(authMiddleware.protect);

// chatbot endpoints
router.post("/bot/webhook", botController.BotReply);

module.exports = router;
