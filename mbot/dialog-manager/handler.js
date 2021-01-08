const responses = require("../dialog-manager/responses");
// requireAll actions from a dir
const modules = require('require-dir-all')("../dialog-manager/actions");
const {sendAlertMail} = require("../utils/mail");
const actions = {};
let keys = Object.keys(modules);
for(let i=0;i<keys.length;i++){
    Object.assign(actions, modules[keys[i]]);
}

module.exports.handleIntents = async (userObj, intent, reqdata) => {
    try{
        if(actions[intent]){
            return await actions[intent](userObj, reqdata);
        }
        if(responses[intent]){
            return await responses[intent](userObj, reqdata);
        }
        return [];
    }
    catch(err){
        console.error('ERROR DURING RESPONDING TO INTENT');
        console.error(err);
        // Only Send Alerts in Production
        if(process.env.NODE_ENV !="dev"){
            sendAlertMail(err.stack);
        }
        return [];
    }

};