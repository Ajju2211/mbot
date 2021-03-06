
const { buildResponse, isPrivilageGranted } = require("../utils/make-response");
const { handleIntent, handleIntents } = require("../dialog-manager/handler");
const { sendAlertMail } = require("../utils/mail");

module.exports.sendText = async (userObj, messageBody)=>{

    let message = messageBody.message;
    userObj.sender = messageBody.sender;
    console.log(message);
    let text = message.text;
    let reqdata = message.data;
    // handle only intent,eg: /greetings.welcome
    if(text.startsWith('/')){
        let intent = text.toLowerCase().trim().split('/')[1];
        console.log(userObj);
        try {
            if(!isPrivilageGranted(userObj.privilages, intent)){
                console.log(intent+"INTENT UNAUTHORISED ACCESS "+JSON.stringify(userObj));
                throw new Error(intent+" INTENT UNAUTHORISED ACCESS BY "+userObj.email_id+" FROM "+userObj.ip);
            }
            return await handleIntents(userObj, intent, reqdata);
        } catch (error) {
            console.error(error.message);
            // Only Send Alerts in Production
            if(process.env.NODE_ENV !="dev"){
                sendAlertMail(error.stack);
            }
            return [];
        }

    }

    return [];

    
};




