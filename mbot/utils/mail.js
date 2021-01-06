const nodemailer = require('nodemailer'); 
const REPORTING_MAILS = 'azharuddinm2211@gmail.com,khalil.india14@gmail.com,';
  
let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: process.env.EMAIL, 
        pass: process.env.MAIL_APP_PASSWORD 
    } 
}); 


module.exports.sendAlertMail = (Msg) => {
    const text = `Hi,<br> This is MBOT Error Reporter, I found some error in production checkout now!.`;
    const html = `<!DOCTYPE html>
    <html lang="en">
        <head>
        <style type="text/css">
        a {
          text-decoration: none;
        }
        
        span {
          line-height: 9px;
          vertical-align: 50%;
        }

        .text_msg {
            background: #fcf7f7;
        }
        
        .window {
          background: #fff;
          /* width: 50vw; */
          /* height: 75vh; */
          margin: auto;
          margin-top: 12.5vh;
          border: 1px solid #acacac;
          border-radius: 6px;
          box-shadow: 0px 0px 20px #acacac;
        }
        
        .titlebar {
          background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));
          background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);
          background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);
          background: -ms-linear-gradient(top, #ebebeb, #d5d5d5);
          background: -o-linear-gradient(top, #ebebeb, #d5d5d5);
          background: linear-gradient(top, #ebebeb, #d5d5d5);
          color: #4d494d;
          font-size: 11pt;
          line-height: 20px;
          text-align: center;
          width: 100%;
          height: 20px;
          border-top: 1px solid #f3f1f3;
          border-bottom: 1px solid #b1aeb1;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          -o-user-select: none;
          cursor: default;
        }
        
        .buttons {
          padding-left: 8px;
          padding-top: 3px;
          float: left;
          line-height: 0px;
        }
        
        .buttons:hover a {
          visibility: visible;
        }
        
        .close {
          background: #ff5c5c;
          font-size: 9pt;
          width: 11px;
          height: 11px;
          border: 1px solid #e33e41;
          border-radius: 50%;
          display: inline-block;
        }
        
        .close:active {
          background: #c14645;
          border: 1px solid #b03537;
        }
        
        .close:active .closebutton {
          color: #4e0002;
        }
        
        .closebutton {
          color: #820005;
          visibility: hidden;
          cursor: default;
        }
        
        .minimize {
          background: #ffbd4c;
          font-size: 9pt;
          line-height: 11px;
          margin-left: 4px;
          width: 11px;
          height: 11px;
          border: 1px solid #e09e3e;
          border-radius: 50%;
          display: inline-block;
        }
        
        .minimize:active {
          background: #c08e38;
          border: 1px solid #af7c33;
        }
        
        .minimize:active .minimizebutton {
          color: #5a2607;
        }
        
        .minimizebutton {
          color: #9a5518;
          visibility: hidden;
          cursor: default;
        }
        
        .zoom {
          background: #00ca56;
          font-size: 9pt;
          line-height: 11px;
          margin-left: 6px;
          width: 11px;
          height: 11px;
          border: 1px solid #14ae46;
          border-radius: 50%;
          display: inline-block;
        }
        
        .zoom:active {
          background: #029740;
          border: 1px solid #128435;
        }
        
        .zoom:active .zoombutton {
          color: #003107;
        }
        
        .zoombutton {
          color: #006519;
          visibility: hidden;
          cursor: default;
        }
        
        .content {
          padding: 10px;
          font-family: monospace;
        }
        
        
        
        h3 {
          margin-top: 0px;
        }
        
        
        </style>
        </head>
        <body>
    
    <div class="text_msg">${text}</div>
    <div class="window">
        <div class="titlebar">
          <div class="buttons">
            <div class="close">
              <a class="closebutton" href="#"><span><strong>x</strong></span></a>
            </div>
            <div class="minimize">
              <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
            </div>
            <div class="zoom">
              <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
            </div>
          </div>
          MBOT-PROJECT
        </div>
        <div class="content">
          Mbot-MacBook-Air:~ mbot$ ${Msg}
        </div>
      </div>
        </body>
    </html>`;

    let mailDetails = { 
        from: 'MBOT Health Reporter', 
        to: REPORTING_MAILS, 
        subject: 'Error in MBOT', 
        html: html
    }; 
      
    mailTransporter.sendMail(mailDetails, (err, data) => { 
        if(err) { 
            console.log('Error Occurs while sending mail'+err); 
        } else { 
            console.log('Error Report Email sent successfully');
        } 
    }); 
};