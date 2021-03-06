const { sendText } = require("../dialog-manager");

module.exports.BotReply = async (req, res) => {
    console.log(req.body);
    res.user ? res.user.ip=req.ip : res.local.user.ip=req.ip;
    const botResponse = await sendText(res.user || res.local.user, req.body);
    res.send(botResponse);
};