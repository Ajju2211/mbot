
const { buildResponse } = require("../utils/make-response");
const { handleIntent, handleIntents } = require("../dialog-manager/handler");

module.exports.sendText = async (userObj, messageBody)=>{

    let message = messageBody.message;
    userObj.sender = messageBody.sender;
    console.log(message);
    let text = message.text;
    let reqdata = message.data;
    // handle only intent,eg: /greetings.welcome
    if(text.startsWith('/')){
        let intent = text.toLowerCase().trim().split('/')[1];
        return await handleIntents(userObj, intent, reqdata);
    }

    return [];

    
};




