
const { buildResponse } = require("../utils/make-response");
const { handleIntent, handleIntents } = require("../dialog-manager/handler");

module.exports.sendText = async (userObj, messageBody)=>{

    let message = messageBody.message;
    userObj.sender = messageBody.sender;
    console.log(message);
    // handle only intent,eg: /greetings.welcome
    if(message.startsWith('/')){
        let intent = message.toLowerCase().trim().split('/')[1];
        return await handleIntents(userObj, intent);
    }

    return [];

    
};




