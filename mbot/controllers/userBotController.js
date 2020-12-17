const { sendText } = require("../dialog-manager");

module.exports.BotReply = async (req, res) => {
    console.log(req.body);
    const botResponse = await sendText(res.user || res.local.user, req.body);
    res.send(botResponse);
};