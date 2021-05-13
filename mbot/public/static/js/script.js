// // overriding console.log in production
// // Debugging allowed only in localhost
// if (window.location.hostname != "localhost") {
//     console.log = function () { };
// }
// window.addEventListener('resize', () => {
//     console.log('height changed')
//     const fullpage = window.fullpage_api;
//     console.log(fullpage);
//     if (fullpage) fullpage.reBuild()
// }, true)




//Bot pop-up intro
document.addEventListener('DOMContentLoaded', function () {

    var elemsTap = document.querySelector('.tap-target');
    var instancesTap = M.TapTarget.init(elemsTap, {});
    instancesTap.open();
    setTimeout(function () { instancesTap.close(); }, 4000);


});

// In memory chart data
// [{id:0,data:{}]
var charts_data = [];
var card_chart_data = [];
// uploadedAttachment link stored
var uploadedAttachmentStore = {
    filled: false
};
window.timerId = null;
var callReoladIframe = true;
$.fn.reloadIFrame = function (id) {
    const iframe = document.getElementById(id);
    console.log(id);
    if (!iframe) {
        console.log("No iframe detected...");
        return;
    }
    console.log(iframe);
    try {
        console.log(iframe.contentDocument);//work control
        if (iframe.contentDocument) {
            if (iframe.contentDocument.URL == "about:blank") {
                iframe.src = iframe.src;
            }
            else {
                console.log("clearing interval...");
                callReoladIframe = false;
                clearInterval(timerId);
                window.timerId = null;
            }
        }
        else {
            callReoladIframe = false;
            console.log("clearing interval");
            clearInterval(window.timerId);
            window.timerId = null;
        }


    }
    catch (er) {
        console.log(er);
        // callReoladIframe = false;
        // console.log("clearing interval due to "+er.message);
        // clearInterval(window.timerId);
        // window.timerId = null;
    }

}

//initialization
$(document).ready(function () {

    //Bot pop-up intro
    $("div").removeClass("tap-target-origin")

    //drop down menu for close, restart conversation & clear the chats.
    $('.dropdown-trigger').dropdown();

    //initiate the modal for displaying the charts, if you dont have charts, then you comment the below line
    $('.modal').modal();

    // google docs iframe reloading if it is blank
    // if($('#gdocsViewer')){ 
    //     console.log($('#gdocsViewer'));
    // console.log("opening godocs");       
    // timerId = setInterval("reloadIFrame();", 2000);

    //     $('#gdocsViewer').on('load', function() {
    //         if(timerId){
    //         clearInterval(timerId);
    //         console.log("Finally Loaded"); //work control
    //         }
    //         else{
    //             timerId = setInterval("reloadIFrame();", 2000);                
    //         }
    //     });
    // }
    // ends of google docs funs

    //enable this if u have configured the bot to start the conversation. 
    showBotTyping();
    // $("#userInput").prop('disabled', true);

    //global variables
    action_name = "/greetings.welcome";
    // action_name = "/main.expense.create_expense";
    // currently not neccesary, if require better use cookie
    user_id = "userid_unique";

    // $("#userInput").prop('disabled', true);

    // Bot will display welcome message
    action_trigger();

    // createExpenseForm
    // setBotResponse([{
    //     text:"create Expense below",
    //     custom:{
    //         payload:"createExpenseForm",
    //         data:{
    //             tags:[{
    //                 value:"1",
    //                 title:"Toilet Paper"
    //             },
    //             {
    //                 value:"2",
    //                 title:"Sweeper"
    //             },
    //             {
    //                 value:"3",
    //                 title:"Filter water"
    //             }],
    //             categories:[{
    //                 title:"Cat1",
    //                 value:"1"
    //             },
    //             {
    //                 title:"cat2",
    //                 value:"2"
    //             }]
    //         }
    //     }
    // }]);

    // approve Expense
    // setBotResponse([{
    //     text:"Approve expense Below",
    //     custom:{
    //         payload:"approveExpense",
    //         expenses:[
    //             {
    //                 id:"1",
    //                 tag:"Tag1",
    //                 category:"Cat1",
    //                 expense_name:"Printer powder",
    //                 amount:"1500",
    //                 comments:[
    //                     {
    //                         createdOn:"10/01/21",
    //                         comment:"Sir Urgent xerox poweder required.",
    //                         createdBy:"Azhar",
    //                         position:"1"
    //                     },
    //                     {
    //                         createdOn:"11/01/21",
    //                         comment:"Yes I've checked it , its urgent",
    //                         createdBy:"Kamal",
    //                         position:"2"
    //                     },
    //                     {
    //                         createdOn:"10/01/21",
    //                         comment:"No, we don't providing extra things 🔥, I'm cancelling it out.",
    //                         createdBy:"Mansoor",
    //                         position:"3"
    //                     }
    //                 ]
    //             },
    //             {
    //                 id:"2",
    //                 tag:"Tag2",
    //                 category:"Cat2",
    //                 expense_name:"Kitchen ware",
    //                 amount:"2000",
    //                 comments:[
    //                     {
    //                         createdOn:"10/01/21",
    //                         comment:"Glass cups broken, we need one dozen of them.",
    //                         createdBy:"Azhar",
    //                         position:"1"
    //                     },
    //                     {
    //                         createdOn:"11/01/21",
    //                         comment:"Okay, we will provide half dozen adjust this month.",
    //                         createdBy:"Kamal",
    //                         position:"2"
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // }]);

})

// ========================== restart conversation ========================
function restartConversation() {
    $("#userInput").prop('disabled', true);
    //destroy the existing chart
    $('.collapsible').remove();

    if (typeof chatChart !== 'undefined') { chatChart.destroy(); }

    $(".chart-container").remove();
    if (typeof modalChart !== 'undefined') { modalChart.destroy(); }
    $(".chats").html("");
    $(".usrInput").val("");
    // to restart
    send("/greetings.welcome");
}

// ========================== let the bot start the conversation ========================
function action_trigger() {
    send(action_name);
}

//=====================================	user enter or sends the message =====================
$(".usrInput").on("keyup keypress", function (e) {
    var keyCode = e.keyCode || e.which;

    var text = $(".usrInput").val();
    if (keyCode === 13) {

        if (text == "" || $.trim(text) == "") {
            e.preventDefault();
            return false;
        } else {
            //destroy the existing chart, if yu are not using charts, then comment the below lines
            $('.collapsible').remove();
            if (typeof chatChart !== 'undefined') { chatChart.destroy(); }

            $(".chart-container").remove();
            if (typeof modalChart !== 'undefined') { modalChart.destroy(); }



            $("#paginated_cards").remove();
            $(".suggestions").remove();
            $(".quickReplies").remove();
            $(".usrInput").blur();
            setUserResponse(text);
            send(text);
            e.preventDefault();
            return false;
        }
    }
});

$("#sendButton").on("click", function (e) {
    var text = $(".usrInput").val();
    if (text == "" || $.trim(text) == "") {
        e.preventDefault();
        return false;
    } else {
        //destroy the existing chart

        chatChart.destroy();
        $(".chart-container").remove();
        if (typeof modalChart !== 'undefined') { modalChart.destroy(); }

        $(".suggestions").remove();
        $("#paginated_cards").remove();
        $(".quickReplies").remove();
        $(".usrInput").blur();
        setUserResponse(text);
        send(text);
        e.preventDefault();
        return false;
    }
})

//==================================== Set user response =====================================
function setUserResponse(message) {
    var UserResponse = '<img class="userAvatar" src=' + "./static/img/userAvatar.jpg" + '><p class="userMsg">' + message + ' </p><div class="clearfix"></div>';
    $(UserResponse).appendTo(".chats").show("slow");

    $(".usrInput").val("");
    scrollToBottomOfResults();
    showBotTyping();
    $(".suggestions").remove();
}

//=========== Scroll to the bottom of the chats after new message has been added to chat ======
function scrollToBottomOfResults() {

    var terminalResultsDiv = document.getElementById("chats");
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
}

//============== send the user message to Chatbot server =============================================
function send(message, data, silent = false) {
    // Destroy modal and charts and cards if opened
    // Destroy others
    // if (silent === false) {
    //     $(".chart-container").remove();
    //     $(".chart-container1").remove();
    //     $(".chartWrapper").remove();
    //     if (typeof modalChart !== 'undefined') { modalChart.destroy(); }
    //     $("#paginated_cards").remove();
    //     $(".quickReplies").remove();
    // }

    let msgObj = {
        text: message,
        data: data
    };
    $.ajax({
        url: "/user/bot/webhook",
        type: "POST",
        contentType: "application/json",
        "headers": {
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        data: JSON.stringify({ message: msgObj, sender: user_id }),
        success: function (botResponse, status) {
            // ADDED JUST NOW
            if (silent === false && botResponse[0] && !botResponse[0].hasOwnProperty("toast")) {
                $(".chart-container").remove();
                $(".chart-container1").remove();
                $(".chartWrapper").remove();
                if (typeof modalChart !== 'undefined') { modalChart.destroy(); }
                $("#paginated_cards").remove();
                $(".quickReplies").remove();
            }
            console.log("Response from Chatbot: ", botResponse, "\nStatus: ", status);

            // if user wants to restart the chat and clear the existing chat contents
            if (message.toLowerCase() == '/restart') {
                // $("#userInput").prop('disabled', false);

                //if you want the bot to start the conversation after restart
                // action_trigger();
                return;
            }
            if(botResponse[0] && botResponse[0].hasOwnProperty("toast")){
                M.toast({html: botResponse[0].toast});
                return;
            }
            // now set the response
            if (silent === false) {
                setBotResponse(botResponse);
            }
            // If no response from chatbot
            if (botResponse.length < 1) {
                let goBackReply = [{
                    "custom": {
                        "payload": "quickReplies",
                        "data": [{ "title": "Back to Menu", "payload": action_name },]
                    }
                }
                ];
                if (silent === false) {
                    setBotResponse(goBackReply);
                }
                else {
                    return {
                        status: "failed",
                        message: "No Repponse"
                    };
                }

            }

        },
        error: function (xhr, textStatus, errorThrown) {

            if (message.toLowerCase() == '/restart') {
                // $("#userInput").prop('disabled', false);

                //if you want the bot to start the conversation after the restart action.
                // action_trigger();
                // return;
            }

            // if there is no response from Chatbot server
            if (silent == false) {
                console.log("...");
                setBotResponse("");
                let goBackReply = [{
                    "custom": {
                        "payload": "quickReplies",
                        "data": [{ "title": "Back to Menu", "payload": action_name },]
                    }
                }
                ];
                setBotResponse(goBackReply);
            }

            else {
                return {
                    status: "failed",
                    message: textStatus
                };
            }
            console.log("Error from bot end: ", textStatus);
        }
    });
}

//=================== set bot response in the chats ===========================================
function setBotResponse(response) {

    //display bot response after 500 milliseconds
    setTimeout(function () {
        hideBotTyping();
        if (response.length < 1) {
            //if there is no response from Chatbot, send  fallback message to the user
            var fallbackMsg = "I am facing some issues, please try again later!!!";

            var BotResponse = '<img class="botAvatar" src="./static/img/sara_avatar.png"/><p class="botMsg">' + fallbackMsg + '</p><div class="clearfix"></div>';

            $(BotResponse).appendTo(".chats").hide().fadeIn(1000);
            scrollToBottomOfResults();
        } else {

            //if we get response from Chatbot
            for (i = 0; i < response.length; i++) {

                // // check if the type is toast
                // if (response[i].hasOwnProperty("toast")) {
                //     M.toast({html:response[i].toast});
                // }

                //check if the response contains "text"
                if (response[i].hasOwnProperty("text")) {
                    var BotResponse = '<img class="botAvatar" src="./static/img/sara_avatar.png"/><p class="botMsg">' + response[i].text.replace(/undefined/g, '-') + '</p><div class="clearfix"></div>';
                    $(BotResponse).appendTo(".chats").hide().fadeIn(1000);
                }

                //check if the response contains "buttons" 
                if (response[i].hasOwnProperty("buttons")) {
                    addSuggestion(response[i].buttons);
                }
                //check if the response contains "images"
                if (response[i].hasOwnProperty("image")) {
                    var BotResponse = '<div class="singleCard">' + '<img class="imgcard" src="' + response[i].image + '">' + '</div><div class="clearfix">';
                    $(BotResponse).appendTo(".chats").hide().fadeIn(1000);
                }



                //check if the response contains "attachment" 
                if (response[i].hasOwnProperty("attachment")) {

                    //check if the attachment type is "video"
                    if (response[i].attachment.type == "video") {
                        video_url = response[i].attachment.payload.src;

                        var BotResponse = '<div class="video-container"> <iframe src="' + video_url + '" frameborder="0" allowfullscreen></iframe> </div>'
                        $(BotResponse).appendTo(".chats").hide().fadeIn(1000);
                    }

                }
                //check if the response contains "custom" message  
                if (response[i].hasOwnProperty("custom")) {



                    // triggers the login Form and clears the other messages and stops from entering details.
                    // prevents other messages untill logins.
                    if (response[i].custom.payload == "loginform") {
                        loginForm();
                        break;
                        return;
                    }

                    //check if the custom payload type is "quickReplies"
                    if (response[i].custom.payload == "quickReplies") {
                        quickRepliesData = response[i].custom.data;
                        setTimeout(showQuickReplies(quickRepliesData), 2000);
                        // showQuickReplies(quickRepliesData);
                        return;
                    }

                    // //check if the custom payload type is "countNotifications"
                    // if (response[i].custom.payload == "countNotifications") {
                    //     countsData = response[i].custom.data;
                    //     // setTimeout(showCountsNotifications(countsData), 2000);
                    //     showCountsNotifications(countsData);
                    //     // continue;
                    //     // return;
                    // }

                    //check if the custom payload type is "pdf_attachment"
                    if (response[i].custom.payload == "pdf_attachment") {

                        renderPdfAttachment(response[i]);
                        return;
                    }

                    //check if the custom payload type is "dropDown"
                    if (response[i].custom.payload == "dropDown") {
                        dropDownData = response[i].custom.data;
                        renderDropDwon(dropDownData);
                        return;
                    }

                    //check if the custom payload type is "location"
                    if (response[i].custom.payload == "location") {
                        $("#userInput").prop('disabled', true);
                        getLocation();
                        scrollToBottomOfResults();
                        return;
                    }

                    //check if the custom payload type is "cardsCarousel"
                    if (response[i].custom.payload == "cardsCarousel") {
                        restaurantsData = (response[i].custom.data)
                        showCardsCarousel(restaurantsData);
                        return;
                    }

                    //check if the custom payload type is "cardsCarousel"
                    if (response[i].custom.payload == "simpleCardsCarousel") {
                        let resData = (response[i].custom.data)
                        setTimeout(() => {
                            showSimpleCardsCarousel(resData);
                        }, 1000);
                        // showSimpleCardsCarousel(resData);
                        continue;
                        // return;
                    }

                    //check if the custom payload type is "graphCardsCarousel"
                    if (response[i].custom.payload == "graphCardsCarousel") {
                        let resData = (response[i].custom.outlets)
                        // first make global data empty
                        card_chart_data = [];
                        setTimeout(() => {
                            showGraphCardsCarousel(resData);
                        }, 1000);
                        // showGraphCardsCarousel(resData);
                        continue;
                        // return;
                    }

                    // check if the custom payload type is "multiSimpleCardCarousel"
                    if (response[i].custom.payload == "multiSimpleCardsCarousel") {
                        let resData = (response[i].custom.data)
                        setTimeout(() => {
                            showMultiSimpleCardsCarousel(resData, response[i].custom.minicardlimit);
                        }, 1000);
                        // showmultiSimpleCardsCarousel(resData);
                        continue;
                        // return;
                    }

                    // check if the custom payload type is "groupedSimpleCardCarousel"
                    if (response[i].custom.payload == "groupedSimpleCardsCarousel") {
                        let resData = (response[i].custom.cards)
                        setTimeout(() => {
                            showGroupedSimpleCardsCarousel(resData, response[i].custom.minicardlimit);
                        }, 1000);
                        // showGroupedSimpleCardsCarousel(resData);
                        // continue;
                        return;
                    }

                    // check if the custom payload type is "groupedSimpleCardCarousel"
                    if (response[i].custom.payload == "groupedSimpleCardsCarousel2") {
                        let resData = (response[i].custom.cards)
                        setTimeout(() => {
                            showGroupedSimpleCardsCarousel2(resData, response[i].custom.minicardrowlimit, response[i].custom.minicardlimit);
                        }, 1000);
                        // showGroupedSimpleCardsCarousel2(resData);
                        continue;
                        // return;
                    }
                    //check if the custom payload type is "chart"
                    if (response[i].custom.payload == "chart") {

                        // sample format of the charts data:
                        // var chartData = { "title": "Leaves", "labels": ["Sick Leave", "Casual Leave", "Earned Leave", "Flexi Leave"], "backgroundColor": ["#36a2eb", "#ffcd56", "#ff6384", "#009688", "#c45850"], "chartsData": [5, 10, 22, 3], "chartType": "pie", "displayLegend": "true" }

                        //store the below parameters as global variable, 
                        // so that it can be used while displaying the charts in modal.
                        chartData = (response[i].custom.data)
                        title = chartData.title;
                        labels = chartData.labels;
                        backgroundColor = chartData.backgroundColor;
                        chartsData = chartData.chartsData;
                        chartType = chartData.chartType;
                        displayLegend = chartData.displayLegend;

                        // pass the above variable to createChart function
                        setTimeout(() => {
                            createChart(title, labels, backgroundColor, chartsData, chartType, displayLegend);
                        }, 1000);
                        continue;
                        // return;
                    }

                    if (response[i].custom.payload == "chartscroll") {

                        // sample format of the charts data:
                        // var chartData = { "title": "Leaves", "labels": ["Sick Leave", "Casual Leave", "Earned Leave", "Flexi Leave"], "backgroundColor": ["#36a2eb", "#ffcd56", "#ff6384", "#009688", "#c45850"], "chartsData": [5, 10, 22, 3], "chartType": "pie", "displayLegend": "true" }

                        //store the below parameters as global variable, 
                        // so that it can be used while displaying the charts in modal.
                        let chartData = (response[i].custom.data);
                        let title1 = chartData.title1;
                        let title2 = chartData.title2;
                        let labels = chartData.labels;
                        let data1 = chartData.data1;
                        let data2 = chartData.data2;
                        // pass the above variable to createChart function
                        setTimeout(() => {
                            createChartScroll({ title1: title1, title2: title2 }, labels, data1, data2);
                        }, 1000);
                        continue;
                        // return;
                    }

                    //check if the custom payload type is "createExpenseForm"
                    if (response[i].custom.payload == "createExpenseForm") {
                        let resData = (response[i].custom.data);
                        uploadedAttachmentStore = {
                            filled: false
                        };
                        showCreateExpenseForm(resData);
                        // continue;
                        // return;
                    }
                    //check if the custom payload type is "approveExpense"
                    if (response[i].custom.payload == "approveExpense") {
                        let resData = (response[i].custom.expenses);
                        showApproveExpense(resData);

                        // continue;
                        // return;
                    }
                    //check of the custom payload type is "collapsible"
                    if (response[i].custom.payload == "collapsible") {
                        data = (response[i].custom.data);
                        //pass the data variable to createCollapsible function
                        createCollapsible(data);
                    }
                }
            }
            scrollToBottomOfResults();
        }
    }, 500);
}

//====================================== Toggle chatbot =======================================
$("#profile_div").click(function () {
    $(".profile_div").toggle();
    $(".widget").toggle();
});


//====================================== Render Pdf attachment =======================================
function renderPdfAttachment(data) {
    pdf_url = data.custom.url;
    pdf_title = data.custom.title;
    pdf_attachment =
        '<div class="pdf_attachment">' +
        '<div class="row">' +
        '<div class="col s3 pdf_icon"><i class="fa fa-file-pdf-o" aria-hidden="true"></i></div>' +
        '<div class="col s9 pdf_link">' +
        '<a href="' + pdf_url + '" target="_blank">' + pdf_title + ' </a>' +
        '</div>' +
        '</div>' +
        '</div>'
    $(".chats").append(pdf_attachment);
    scrollToBottomOfResults();

}



//====================================== DropDown ==================================================
//render the dropdown messageand handle user selection
function renderDropDwon(data) {
    var options = "";
    for (i = 0; i < data.length; i++) {
        options += '<option value="' + data[i].value + '">' + data[i].label + '</option>'
    }
    var select = '<div class="dropDownMsg"><select class="browser-default dropDownSelect"> <option value="" disabled selected>Choose your option</option>' + options + '</select></div>'
    $(".chats").append(select);
    scrollToBottomOfResults();

    //add event handler if user selects a option.
    $("select").change(function () {
        var value = ""
        var label = ""
        $("select option:selected").each(function () {
            label += $(this).text();
            value += $(this).val();
        });

        setUserResponse(label);
        send(value);
        $(".dropDownMsg").remove();
    });
}

//====================================== Suggestions ===========================================

function addSuggestion(textToAdd) {
    setTimeout(function () {
        let suggestions = textToAdd;
        let suggLength = textToAdd.length;
        // Added clearfix --change
        $(' <div class="singleCard singleCardBtn"> <div class="suggestions"><div class="menu"></div></div></div><div class="clearfix"></div>').appendTo(".chats").hide().fadeIn(1000);
        // Loop through suggestions
        for (i = 0; i < suggLength; i++) {
            $('<div class="menuChips" data-payload=\'' + (suggestions[i].payload) + '\'>' + suggestions[i].title + "</div>").appendTo(".menu");

        }
        scrollToBottomOfResults();
    }, 1000);
}

// on click of suggestions, get the value and send to Chatbot
$(document).on("click", ".menu .menuChips", function () {
    var text = this.innerText;
    var payload = this.getAttribute('data-payload');
    console.log("payload: ", this.getAttribute('data-payload'))
    setUserResponse(text);
    send(payload);

    //delete the suggestions once user click on it
    $(".suggestions").remove();

});

//====================================== functions for drop-down menu of the bot  =========================================

//restart function to restart the conversation.
$("#restart").click(function () {
    restartConversation()
});

//clear function to clear the chat contents of the widget.
$("#clear").click(function () {
    $(".chats").fadeOut("normal", function () {
        $(".chats").html("");
        $(".chats").fadeIn();
    });
});

//close function to close the widget.
$("#logout").click(function () {
    $.ajax({
        url: "/user/logout",
        type: "GET",
        success: function (response, status) {
            console.log("Response from server: ", response, "\nStatus: ", status);
            setBotResponse(response);
        },
        error: function (xhr, textStatus, errorThrown) {
            // display error in ui
            // if there is no response from Chatbot server
            console.log("Error from bot end: ", textStatus);
        }
    });
});

//====================================== Cards Carousel =========================================

function showCardsCarousel(cardsToAdd) {
    var cards = createCardsCarousel(cardsToAdd);

    $(cards).appendTo(".chats").show();


    if (cardsToAdd.length <= 2) {
        $(".cards_scroller>div.carousel_cards:nth-of-type(" + i + ")").fadeIn(3000);
    } else {
        for (var i = 0; i < cardsToAdd.length; i++) {
            $(".cards_scroller>div.carousel_cards:nth-of-type(" + i + ")").fadeIn(3000);
        }
        $(".cards .arrow.prev").fadeIn("3000");
        $(".cards .arrow.next").fadeIn("3000");
    }


    scrollToBottomOfResults();

    const card = document.querySelector("#paginated_cards");
    const card_scroller = card.querySelector(".cards_scroller");
    var card_item_size = 225;

    card.querySelector(".arrow.next").addEventListener("click", scrollToNextPage);
    card.querySelector(".arrow.prev").addEventListener("click", scrollToPrevPage);


    // For paginated scrolling, simply scroll the card one item in the given
    // direction and let css scroll snaping handle the specific alignment.
    function scrollToNextPage() {
        card_scroller.scrollBy(card_item_size, 0);
    }

    function scrollToPrevPage() {
        card_scroller.scrollBy(-card_item_size, 0);
    }

}

function createCardsCarousel(cardsData) {

    var cards = "";

    for (i = 0; i < cardsData.length; i++) {
        title = cardsData[i].name;
        // dummy value
        ratings = Math.round((4 / 5) * 100) + "%";
        data = cardsData[i];

        item = '<div class="carousel_cards in-left">' + '<img class="cardBackgroundImage" src="' + cardsData[i].image + '"><div class="cardFooter">' + '<span class="cardTitle" title="' + title + '">' + title + "</span> " + '<div class="cardDescription">' + '<div class="stars-outer">' + '<div class="stars-inner" style="width:' + ratings + '" ></div>' + "</div>" + "</div>" + "</div>" + "</div>";
        // chart=createChart(title, labels, backgroundColor, chartsData, chartType, displayLegend);
        item = '<div class="carousel_cards in-left"> <div>' + chart + '</div> <div class="cardFooter">' + '<span class="cardTitle" title="' + title + '">' + title + "</span> " + '<div class="cardDescription">' + '<div class="stars-outer">' + '<div class="stars-inner" style="width:' + ratings + '" ></div>' + "</div>" + "</div>" + "</div>" + "</div>";
        cards += item;
    }

    var cardContents = '<div id="paginated_cards" class="cards"> <div class="cards_scroller">' + cards + '  <span class="arrow prev fa fa-chevron-circle-left "></span> <span class="arrow next fa fa-chevron-circle-right" ></span> </div> </div>';

    return cardContents;
}


// ===================================== simpleCardCarousel =============================================

function showSimpleCardsCarousel(cardsToAdd) {
    var cards = createSimpleCardsCarousel(cardsToAdd);

    $(cards).appendTo(".chats").show();



    for (var i = 0; i < cardsToAdd.length; i++) {
        $(".simple_cards_scroller>div.simple_carousel_cards:nth-of-type(" + i + ")").fadeIn(3000);
    }
    $(".cards .arrow.prev").fadeIn("3000");
    $(".cards .arrow.next").fadeIn("3000");

    scrollToBottomOfResults();

    const card = document.querySelector("#paginated_cards");
    const card_scroller = card.querySelector(".simple_cards_scroller");
    var card_item_size = 225;

    card.querySelector(".arrow.next").addEventListener("click", scrollToNextPage);
    card.querySelector(".arrow.prev").addEventListener("click", scrollToPrevPage);


    // For paginated scrolling, simply scroll the card one item in the given
    // direction and let css scroll snaping handle the specific alignment.
    function scrollToNextPage() {
        card_scroller.scrollBy(card_item_size, 0);
    }

    function scrollToPrevPage() {
        card_scroller.scrollBy(-card_item_size, 0);
    }

}


function createSimpleCardsCarousel(cardsData) {

    let cards = "";

    for (i = 0; i < cardsData.length; i++) {
        let title = cardsData[i].metadata.title;
        let ele1 = cardsData[i].metadata.data[0];
        let ele2 = cardsData[i].metadata.data[1];
        let table = cardsData[i].table;
        let metadata = cardsData[i].metadata;
        let item;
        if (table && metadata.data.length > 2) {
            item = `<div class="simple_carousel_cards in-left">
            <div class="simpleCardHeader"><span class="cardTitle" title="${title}">${title}</span>
            <span class="modal-trigger-card" data-payload = '${JSON.stringify(metadata)}' id="modalcardexp" title="modalcardexp" href="#modal2">
            <i class="fa fa-eye"  aria-hidden="true"></i></span>
            </div>
            <p>
            <span class="modal-trigger-table" data-payload = '${JSON.stringify(table)}' id="modaltableexp" title="Table" href="#modal3">
            <i class="fa fa-external-link" style="margin-top:40px;" aria-hidden="true"></i></span>
            <span class="simpleCardCounts">${ele1.title}:<br><span class="countamount">${ele1.value}</span></span>
            <span class="simpleCardAmount">${ele2.title}:<br><span class="countamount">${ele2.value}</span></span>
            </p>
            </div>`;

        }
        else if (table) {
            item = `<div class="simple_carousel_cards in-left">
            <div class="simpleCardHeader"><span class="cardTitle" title="${title}">${title}</span>
            </div>
            <p>
            <span class="modal-trigger-table" data-payload = '${JSON.stringify(table)}' id="modaltableexp" title="Table" href="#modal3">
            <i class="fa fa-external-link" style="margin-top:40px;" aria-hidden="true"></i></span>
            <span class="simpleCardCounts">${ele1.title}:<br><span class="countamount">${ele1.value}</span></span>
            <span class="simpleCardAmount">${ele2.title}:<br><span class="countamount">${ele2.value}</span></span>
            </p>
            </div>`;
        }
        else if (metadata.data.length > 2) {
            item = `<div class="simple_carousel_cards in-left">
            <div class="simpleCardHeader"><span class="cardTitle" title="${title}">${title}</span>
            <span class="modal-trigger-card" data-payload = '${JSON.stringify(metadata)}' id="modalcardexp" title="modalcardexp" href="#modal2">
            <i class="fa fa-eye"  aria-hidden="true"></i></span>
            </div>
            <p>
            <span class="simpleCardCounts">${ele1.title}:<br><span class="countamount">${ele1.value}</span></span>
            <span class="simpleCardAmount">${ele2.title}:<br><span class="countamount">${ele2.value}</span></span>
            </p>
            </div>`;
        }
        else {
            item = `<div class="simple_carousel_cards in-left">
            <div class="simpleCardHeader"><span class="cardTitle" title="${title}">${title}</span>
            </div>
            <p>
            <span class="simpleCardCounts">${ele1.title}:<br><span class="countamount">${ele1.value}</span></span>
            <span class="simpleCardAmount">${ele2.title}:<br><span class="countamount">${ele2.value}</span></span>
            </p>
            </div>`;
        }

        cards += item;
    }

    let cardContents = `<div id="paginated_cards" class="cards">
                         <div class="simple_cards_scroller">${cards}
                         <span class="arrow prev fa fa-chevron-circle-left "></span> 
                         <span class="arrow next fa fa-chevron-circle-right" ></span> 
                         </div> </div>`;

    return cardContents;
}


// ===================================== graphCardCarousel =============================================

// Will Draw graph on the cards appended already to carousels.
function drawCardGraphs() {

    let expandID = `.expand`;
    for (let i = 0; i < card_chart_data.length; i++) {

        let cardChartData = card_chart_data[i].data;
        let canvasID = `card-chat-chart${i}`;

        //create the context that will draw the charts over the canvas in the ".chart-container" div
        let ctx = $(`#${canvasID}`);

        // Once you have the element or context, instantiate the chart-type by passing the configuration,
        //for more info. refer: https://www.chartjs.org/docs/latest/configuration/
        let data;
        let options;
        console.log(cardChartData);
        if (cardChartData.chartsIntersectData) {
            data = {
                labels: cardChartData.labels,
                datasets: [{
                    type: "bar",
                    label: cardChartData.label1,
                    backgroundColor: "red",
                    data: cardChartData.chartsData,
                    id: 'y-axis-0',
                    fill: false
                },
                {
                    type: "bar",
                    label: cardChartData.label2,
                    backgroundColor: "blue",
                    data: cardChartData.chartsIntersectData,
                    id: 'y-axis-0',
                    fill: false
                }]
            };
            options = {
                responsive: false,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: cardChartData.title
                },
                tooltips: {
                    mode: 'label'
                },
                layout: {
                    padding: {
                        left: 5,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                legend: {
                    display: cardChartData.displayLegend,
                    position: "right",
                    labels: {
                        boxWidth: 5,
                        fontSize: 10
                    }
                },
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true,
                        position: "left",
                        id: "y-axis-0",
                    }]
                }
            }
        }
        else {
            data = {
                labels: cardChartData.labels,
                datasets: [{
                    label: cardChartData.label1,
                    backgroundColor: cardChartData.backgroundColor,
                    data: cardChartData.chartsData,
                    fill: false
                }]
            };
            options = {
                responsive: false,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: cardChartData.title
                },
                layout: {
                    padding: {
                        left: 5,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                legend: {
                    display: cardChartData.displayLegend,
                    position: "right",
                    labels: {
                        boxWidth: 5,
                        fontSize: 10
                    }
                }
            }
        }


        //draw the chart by passing the configuration
        chatChart = new Chart(ctx, {
            type: cardChartData.chartType,
            data: data,
            options: options
        });

    }

}

function showGraphCardsCarousel(cardsToAdd) {
    var cards = createGraphCardsCarousel(cardsToAdd);

    $(cards).appendTo(".chats").show();


    // if (cardsToAdd.length <= 2) {
    //     $(".graph_cards_scroller>div.graph_carousel_cards:nth-of-type(" + i + ")").fadeIn(3000);
    // } else {
    for (var i = 0; i < cardsToAdd.length; i++) {
        $(".graph_cards_scroller>div.graph_carousel_cards:nth-of-type(" + i + ")").fadeIn(3000);
    }
    $(".cards .arrow.prev").fadeIn("3000");
    $(".cards .arrow.next").fadeIn("3000");
    // }


    scrollToBottomOfResults();

    const card = document.querySelector("#paginated_cards");
    const card_scroller = card.querySelector(".graph_cards_scroller");
    var card_item_size = 225;

    card.querySelector(".arrow.next").addEventListener("click", scrollToNextPage);
    card.querySelector(".arrow.prev").addEventListener("click", scrollToPrevPage);


    // For paginated scrolling, simply scroll the card one item in the given
    // direction and let css scroll snaping handle the specific alignment.
    function scrollToNextPage() {
        card_scroller.scrollBy(card_item_size, 0);
    }

    function scrollToPrevPage() {
        card_scroller.scrollBy(-card_item_size, 0);
    }


    console.log(card_chart_data);
    drawCardGraphs();
}

// create a chart canvas html with unique Id and saves in card_chat_data
function makeChartCanvas(data) {
    let uniqueID = card_chart_data.length;
    let expandID = `.expand`;
    let canvasID = `card-chat-chart${uniqueID}`;
    let chartData = {
        "title": data.title,
        "label1": data.label1,
        "label2": data.label2,
        "labels": data.labels,
        "backgroundColor": data.backgroundColor,
        "chartsData": data.chartsData,
        "chartType": data.chartType,
        "displayLegend": data.displayLegend,
        "chartsIntersectData": data.chartsIntersectData
    };
    // Add to memory
    card_chart_data.push({
        "id": uniqueID,
        "data": chartData
    });
    let html = `<div class="chart-container1"> <span class="modal-trigger" data-payload = '${JSON.stringify(chartData)}' id="${expandID}" title="${expandID}" href="#modal1">
                <i class="fa fa-external-link"  aria-hidden="true"></i></span>
                <canvas class="type2card" width="322px" id="${canvasID}" ></canvas>
            </div> <div class="clearfix"></div>`;
    return html;
}

function createGraphCardsCarousel(cardsData) {

    let cards = "";


    for (i = 0; i < cardsData.length; i++) {
        let title = cardsData[i].title;
        let chartContainer = makeChartCanvas(cardsData[i]);
        let metadata = cardsData[i].metadata;
        if (metadata) {
            item = `<div class="graph_carousel_cards in-left">
        <div class="graphCardHeader"><span class="cardTitle" title="${title}">${title}</span>
        <span class="modal-trigger-card" data-payload = '${JSON.stringify(metadata)}' id="modalcardexp" title="modalcardexp" href="#modal2">
                <i class="fa fa-eye"  aria-hidden="true"></i></span>

        </div>
        ${chartContainer}
        </div>`;
        }
        else {
            item = `<div class="graph_carousel_cards in-left">
        <div class="graphCardHeader"><span class="cardTitle" title="${title}">${title}</span>
        </div>
        ${chartContainer}
        </div>`;
        }
        cards += item;
    }

    let cardContents = `<div id="paginated_cards" class="cards">
                         <div class="graph_cards_scroller">${cards}
                         <span class="arrow prev fa fa-chevron-circle-left "></span> 
                         <span class="arrow next fa fa-chevron-circle-right" ></span> 
                         </div> </div>`;

    return cardContents;
}

//====================================== Quick Replies ==================================================


// ===================================== multiSimpleCardCarousel =============================================

function showMultiSimpleCardsCarousel(cardsToAdd, cardLimit) {
    if (cardsToAdd.length < 1) {
        return;
    }
    var cards = createMultiSimpleCardsCarousel(cardsToAdd, cardLimit);

    $(cards).appendTo(".chats").show();



    for (var i = 0; i < cardsToAdd.length; i++) {
        $(".multi_simple_cards_scroller2>div.multi_simple_carousel_cards2:nth-of-type(" + i + ")").fadeIn(3000);
    }
    // $(".cards .arrow.prev").fadeIn("3000");
    // $(".cards .arrow.next").fadeIn("3000");

    scrollToBottomOfResults();

    const card = document.querySelector("#paginated_cards");
    const card_scroller = card.querySelector(".multi_simple_cards_scroller2");
    var card_item_size = 225;

    // card.querySelector(".arrow.next").addEventListener("click", scrollToNextPage);
    // card.querySelector(".arrow.prev").addEventListener("click", scrollToPrevPage);


    // For paginated scrolling, simply scroll the card one item in the given
    // direction and let css scroll snaping handle the specific alignment.
    function scrollToNextPage() {
        card_scroller.scrollBy(card_item_size, 0);
    }

    function scrollToPrevPage() {
        card_scroller.scrollBy(-card_item_size, 0);
    }

}


function createMultiSimpleCardsCarousel(cardsData, cardLimit) {

    let cards = "";
    // Number Of Mini Cards to display On Card.
    const MINICARDLIMIT = cardLimit || 5;
    const NoOfCards = cardsData.length;
    let i = 0;
    let startIndex = 0;
    const emptyEle = { title: "", value: "" };
    while (i < NoOfCards) {
        if (i + MINICARDLIMIT <= NoOfCards) {
            startIndex = i;
            i = i + MINICARDLIMIT;
        }
        else {
            startIndex = i;
            i = NoOfCards;
        }

        let miniCards = '';
        let item;
        for (let j = startIndex; j < i; j++) {
            console.log(cardsData[j]);
            let title = cardsData[j].metadata.title;
            let ele1 = cardsData[j].metadata.data[0] || emptyEle;
            let ele2 = cardsData[j].metadata.data[1] || emptyEle;
            let table = cardsData[j].table;
            let metadata = cardsData[j].metadata;
            let miniCard;
            if (table && metadata.data.length > 2) {
                miniCard = `
            <div class="row multi_simpleCardContents2">
                    <div class="multi_simpleCardMiniHeader2">
                        <span class="cardTitle" style="font-size: 0.85em">${title}</span>
                        <span class="modal-trigger-table" data-payload='${JSON.stringify(table)}' id="modaltableexp" title="Table"
                            href="#modal3">
                            <i class="fa fa-external-link col" style="float: right; margin-right: 0px; padding: 0px"
                                aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="multi_simpleCardMiniBody2">
                        <span class="modal-trigger-card" data-payload='${JSON.stringify(metadata)}' id="modalcardexp"
                            title="modalcardexp" href="#modal2">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </span>
                        <span class="multi_simpleCardCounts2 col s12">${ele1.title}:<br /><span
                                class="countamount">${ele1.value || "-"}</span></span>
                        <span class="multi_simpleCardAmount2 col s12">${ele2.title}:<br /><span
                                class="countamount">${ele2.value || "-"}</span></span>
                    </div>
                </div>`;
            }
            else if (table) {
                miniCard = `
            <div class="row multi_simpleCardContents2">
                    <div class="multi_simpleCardMiniHeader2">
                        <span class="cardTitle" style="font-size: 0.85em">${title}</span>
                        <span class="modal-trigger-table" data-payload='${JSON.stringify(table)}' id="modaltableexp" title="Table"
                            href="#modal3">
                            <i class="fa fa-external-link col" style="float: right; margin-right: 0px; padding: 0px"
                                aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="multi_simpleCardMiniBody2">
                        <span class="multi_simpleCardCounts2 col s12">${ele1.title}:<br /><span
                                class="countamount">${ele1.value || "-"}</span></span>
                        <span class="multi_simpleCardAmount col s12">${ele2.title}:<br /><span
                                class="countamount">${ele2.value || "-"}</span></span>
                    </div>
                </div>`;
            }
            else if (metadata.data.length > 2) {
                miniCard = `
            <div class="row multi_simpleCardContents2">
                    <div class="multi_simpleCardMiniHeader2">
                        <span class="cardTitle" style="font-size: 0.85em">${title}</span>
                    </div>
                    <div class="multi_simpleCardMiniBody2">
                        <span class="modal-trigger-card" data-payload='${JSON.stringify(metadata)}' id="modalcardexp"
                            title="modalcardexp" href="#modal2">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </span>
                        <span class="multi_simpleCardCounts2 col s12">${ele1.title}:<br /><span
                                class="countamount">${ele1.value || "-"}</span></span>
                        <span class="multi_simpleCardAmount2 col s12">${ele2.title}:<br /><span
                                class="countamount">${ele2.value || "-"}</span></span>
                    </div>
                </div>`;
            }
            else {
                miniCard = `
            <div class="row multi_simpleCardContents2">
                    <div class="multi_simpleCardMiniHeader2">
                        <span class="cardTitle" style="font-size: 0.85em">${title}</span>
                    </div>
                    <div class="multi_simpleCardMiniBody2">
                        <span class="multi_simpleCardCounts2 col s12">${ele1.title}:<br /><span
                                class="countamount">${ele1.value || "-"}</span></span>
                        <span class="multi_simpleCardAmount2 col s12">${ele2.title}:<br /><span
                                class="countamount">${ele2.value || "-"}</span></span>
                    </div>
                </div>`;
            }

            miniCards = miniCards + miniCard;

        }
        // Large Card Preview Button
        //     <span class="modal-trigger-card" data-payload = '${JSON.stringify(metadata)}' id="modalcardexp" title="modalcardexp" href="#modal2">
        //     <i class="fa fa-eye"  aria-hidden="true"></i>
        // </span>
        item = `
        <div class="multi_simple_carousel_cards2 in-left">
            <div class="multi_simpleCardHeader2">
                <span class="cardTitle" title="${startIndex + 1}-${i}">${startIndex + 1} - ${i}</span>
            </div>
            <div class="multi_simpleCardMainBody2">
                ${miniCards}
            </div>
        </div>`;

        cards += item;
    }

    let cardContents = `<div id="paginated_cards">
                        <div class="multi_simple_carousel_wrapper2 cards">
                         <div class="multi_simple_cards_scroller2">${cards}
                         </div>
                         </div> </div>`;

    return cardContents;
}


// End Of MultiSimpleCardsCarousel functions


// ===================================== groupedSimpleCardCarousel =============================================
// UI Is same for groupedSimpleCardCarousel and multiSimpleCardCarousel
function showGroupedSimpleCardsCarousel(cardsToAdd, cardLimit) {
    var cards = createGroupedSimpleCardsCarousel(cardsToAdd, cardLimit);

    $(cards).appendTo(".chats").show();



    for (var i = 0; i < cardsToAdd.length; i++) {
        $(".multi_simple_cards_scroller>div.multi_simple_carousel_cards:nth-of-type(" + i + ")").fadeIn(3000);
    }
    $(".cards .arrow.prev").fadeIn("3000");
    $(".cards .arrow.next").fadeIn("3000");

    scrollToBottomOfResults();

    const card = document.querySelector("#paginated_cards");
    const card_scroller = card.querySelector(".multi_simple_cards_scroller");
    var card_item_size = 225;

    card.querySelector(".arrow.next").addEventListener("click", scrollToNextPage);
    card.querySelector(".arrow.prev").addEventListener("click", scrollToPrevPage);


    // For paginated scrolling, simply scroll the card one item in the given
    // direction and let css scroll snaping handle the specific alignment.
    function scrollToNextPage() {
        card_scroller.scrollBy(card_item_size, 0);
    }

    function scrollToPrevPage() {
        card_scroller.scrollBy(-card_item_size, 0);
    }

}


function createGroupedSimpleCardsCarousel(cardsData, cardLimit) {

    let cards = "";
    // Number Of Mini Cards to display On Card.
    for (let k = 0; k < cardsData.length; k++) {
        let largeCardTitle = cardsData[k].title;
        let miniCardsData = cardsData[k].minicards;
        console.log(miniCardsData);
        let NoOfMiniCards = miniCardsData.length;
        let MINICARDLIMIT = cardLimit || NoOfMiniCards;
        let i = 0;
        let startIndex = 0;
        const emptyEle = { title: "", value: "" };
        while (i < NoOfMiniCards) {
            if (i + MINICARDLIMIT <= NoOfMiniCards) {
                startIndex = i;
                i = i + MINICARDLIMIT;
            }
            else {
                startIndex = i;
                i = NoOfMiniCards;
            }

            let miniCards = '';
            let item;
            for (let j = startIndex; j < i; j++) {
                console.log(miniCardsData[j]);
                let title = miniCardsData[j].metadata.title;
                let ele1 = miniCardsData[j].metadata.data[0] || emptyEle;
                let ele2 = miniCardsData[j].metadata.data[1] || emptyEle;
                let table = miniCardsData[j].table;
                let metadata = miniCardsData[j].metadata;
                let miniCard;
                if (table && metadata.data.length > 2) {
                    miniCard = `
                <div class="row multi_simpleCardContents">
                        <div class="multi_simpleCardMiniHeader">
                            <span class="cardTitle" style="font-size: 0.85em">${title}</span>
                            <span class="modal-trigger-table" data-payload='${JSON.stringify(table)}' id="modaltableexp" title="Table"
                                href="#modal3">
                                <i class="fa fa-external-link col" style="float: right; margin-right: 0px; padding: 0px"
                                    aria-hidden="true"></i>
                            </span>
                        </div>
                        <div class="multi_simpleCardMiniBody">
                            <span class="modal-trigger-card" data-payload='${JSON.stringify(metadata)}' id="modalcardexp"
                                title="modalcardexp" href="#modal2">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </span>
                            <span class="multi_simpleCardCounts col s12">${ele1.title}:<br /><span
                                    class="countamount">${ele1.value}</span></span>
                            <span class="multi_simpleCardAmount col s12">${ele2.title}:<br /><span
                                    class="countamount">${ele2.value}</span></span>
                        </div>
                    </div>`;
                }
                else if (table) {
                    miniCard = `
                <div class="row multi_simpleCardContents">
                        <div class="multi_simpleCardMiniHeader">
                            <span class="cardTitle" style="font-size: 0.85em">${title}</span>
                            <span class="modal-trigger-table" data-payload='${JSON.stringify(table)}' id="modaltableexp" title="Table"
                                href="#modal3">
                                <i class="fa fa-external-link col" style="float: right; margin-right: 0px; padding: 0px"
                                    aria-hidden="true"></i>
                            </span>
                        </div>
                        <div class="multi_simpleCardMiniBody">
                            <span class="multi_simpleCardCounts col s12">${ele1.title}:<br /><span
                                    class="countamount">${ele1.value}</span></span>
                            <span class="multi_simpleCardAmount col s12">${ele2.title}:<br /><span
                                    class="countamount">${ele2.value}</span></span>
                        </div>
                    </div>`;
                }
                else if (metadata.data.length > 2) {
                    miniCard = `
                <div class="row multi_simpleCardContents">
                        <div class="multi_simpleCardMiniHeader">
                            <span class="cardTitle" style="font-size: 0.85em">${title}</span>
                        </div>
                        <div class="multi_simpleCardMiniBody">
                            <span class="modal-trigger-card" data-payload='${JSON.stringify(metadata)}' id="modalcardexp"
                                title="modalcardexp" href="#modal2">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </span>
                            <span class="multi_simpleCardCounts col s12">${ele1.title}:<br /><span
                                    class="countamount">${ele1.value}</span></span>
                            <span class="multi_simpleCardAmount col s12">${ele2.title}:<br /><span
                                    class="countamount">${ele2.value}</span></span>
                        </div>
                    </div>`;
                }
                else {
                    miniCard = `
                <div class="row multi_simpleCardContents">
                        <div class="multi_simpleCardMiniHeader">
                            <span class="cardTitle" style="font-size: 0.85em">${title}</span>
                        </div>
                        <div class="multi_simpleCardMiniBody">
                            <span class="multi_simpleCardCounts col s12">${ele1.title}:<br /><span
                                    class="countamount">${ele1.value}</span></span>
                            <span class="multi_simpleCardAmount col s12">${ele2.title}:<br /><span
                                    class="countamount">${ele2.value}</span></span>
                        </div>
                    </div>`;
                }

                miniCards = miniCards + miniCard;

            }
            // Large Card Preview Button
            //     <span class="modal-trigger-card" data-payload = '${JSON.stringify(metadata)}' id="modalcardexp" title="modalcardexp" href="#modal2">
            //     <i class="fa fa-eye"  aria-hidden="true"></i>
            // </span>
            item = `
            <div class="multi_simple_carousel_cards in-left">
                <div class="multi_simpleCardHeader">
                    <span class="cardTitle" title="${largeCardTitle}(${startIndex + 1}-${i})">${largeCardTitle}</span>
                    <span class="cardTitle" title="${largeCardTitle}(${startIndex + 1}-${i})">(${startIndex + 1} - ${i})</span>
                </div>
                <div class="multi_simpleCardMainBody">
                    ${miniCards}
                </div>
            </div>`;

            cards += item;
        }

    }

    let cardContents = `<div id="paginated_cards" class="cards">
                         <div class="multi_simple_cards_scroller">${cards}
                         <span class="arrow prev fa fa-chevron-circle-left "></span> 
                         <span class="arrow next fa fa-chevron-circle-right" ></span> 
                         </div> </div>`;

    return cardContents;
}


// End Of MultiSimpleCardsCarousel functions


// ===================================== groupedSimpleCardCarousel2 =============================================
// UI Is same for groupedSimpleCardCarousel and multiSimpleCardCarousel
function showGroupedSimpleCardsCarousel2(cardsToAdd, cardLimit) {
    if (cardsToAdd.length < 1) {
        return;
    }
    var cards = createGroupedSimpleCardsCarousel2(cardsToAdd, cardLimit);

    $(cards).appendTo(".chats").show();



    for (var i = 0; i < cardsToAdd.length; i++) {
        $(".multi_simple_cards_scroller2>div.multi_simple_carousel_cards2:nth-of-type(" + i + ")").fadeIn(3000);
    }
    // $(".cards .arrow.prev").fadeIn("3000");
    // $(".cards .arrow.next").fadeIn("3000");

    scrollToBottomOfResults();

    const card = document.querySelector("#paginated_cards");
    const card_scroller = card.querySelector(".multi_simple_cards_scroller2");
    var card_item_size = 225;

    // card.querySelector(".arrow.next").addEventListener("click", scrollToNextPage);
    // card.querySelector(".arrow.prev").addEventListener("click", scrollToPrevPage);


    // For paginated scrolling, simply scroll the card one item in the given
    // direction and let css scroll snaping handle the specific alignment.
    function scrollToNextPage() {
        card_scroller.scrollBy(card_item_size, 0);
    }

    function scrollToPrevPage() {
        card_scroller.scrollBy(-card_item_size, 0);
    }

}


function createGroupedSimpleCardsCarousel2(cardsData, miniCardRowLimit, cardLimit) {

    let cards = "";
    const MINICARDROWLIMIT = miniCardRowLimit || 2;
    // Number Of Mini Cards to display On Card.
    for (let k = 0; k < cardsData.length; k++) {
        let largeCardTitle = cardsData[k].title;
        let miniCardsData = cardsData[k].minicards;
        console.log(miniCardsData);
        let NoOfMiniCards = miniCardsData.length;
        let MINICARDLIMIT = cardLimit || NoOfMiniCards;
        let i = 0;
        let startIndex = 0;
        const emptyEle = { title: "", value: "" };
        while (i < NoOfMiniCards) {
            if (i + MINICARDLIMIT <= NoOfMiniCards) {
                startIndex = i;
                i = i + MINICARDLIMIT;
            }
            else {
                startIndex = i;
                i = NoOfMiniCards;
            }

            let miniCards = '';
            let item;
            for (let j = startIndex; j < i; j++) {
                console.log(miniCardsData[j]);
                let title = miniCardsData[j].metadata.title;
                let eles = '';
                let table = miniCardsData[j].table;
                let metadata = miniCardsData[j].metadata;
                let miniCard;
                // minicardrows building
                for (let m = 0; m < MINICARDROWLIMIT; m++) {
                    if (miniCardsData[j].metadata.data[m]) {
                        eles = eles + `<span class="multi_simpleCardAmount2 col s12">${miniCardsData[j].metadata.data[m].title}:<br /><span
                        class="countamount">${miniCardsData[j].metadata.data[m].value || "-"}</span></span>`;
                    }

                }

                if (table && metadata.data.length > MINICARDROWLIMIT) {

                    miniCard = `
                <div class="row multi_simpleCardContents2">
                        <div class="multi_simpleCardMiniHeader2">
                            <span class="cardTitle" style="font-size: 0.85em">${title}</span>
                            <span class="modal-trigger-table" data-payload='${JSON.stringify(table)}' id="modaltableexp" title="Table"
                                href="#modal3">
                                <i class="fa fa-external-link col" style="float: right; margin-right: 0px; padding: 0px"
                                    aria-hidden="true"></i>
                            </span>
                        </div>
                        <div class="multi_simpleCardMiniBody2">
                            <span class="modal-trigger-card" data-payload='${JSON.stringify(metadata)}' id="modalcardexp"
                                title="modalcardexp" href="#modal2">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </span>
                            ${eles}
                        </div>
                    </div>`;
                }
                else if (table) {
                    miniCard = `
                <div class="row multi_simpleCardContents2">
                        <div class="multi_simpleCardMiniHeader2">
                            <span class="cardTitle" style="font-size: 0.85em">${title}</span>
                            <span class="modal-trigger-table" data-payload='${JSON.stringify(table)}' id="modaltableexp" title="Table"
                                href="#modal3">
                                <i class="fa fa-external-link col" style="float: right; margin-right: 0px; padding: 0px"
                                    aria-hidden="true"></i>
                            </span>
                        </div>
                        <div class="multi_simpleCardMiniBody2">
                        ${eles}
                        </div>
                    </div>`;
                }
                else if (metadata.data.length > MINICARDROWLIMIT) {
                    miniCard = `
                <div class="row multi_simpleCardContents2">
                        <div class="multi_simpleCardMiniHeader2">
                            <span class="cardTitle" style="font-size: 0.85em">${title}</span>
                        </div>
                        <div class="multi_simpleCardMiniBody2">
                            <span class="modal-trigger-card" data-payload='${JSON.stringify(metadata)}' id="modalcardexp"
                                title="modalcardexp" href="#modal2">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </span>
                            ${eles}
                        </div>
                    </div>`;
                }
                else {
                    miniCard = `
                <div class="row multi_simpleCardContents2">
                        <div class="multi_simpleCardMiniHeader2">
                            <span class="cardTitle" style="font-size: 0.85em">${title}</span>
                        </div>
                        <div class="multi_simpleCardMiniBody2">
                        ${eles}
                        </div>
                    </div>`;
                }

                miniCards = miniCards + miniCard;

            }
            // Large Card Preview Button
            //     <span class="modal-trigger-card" data-payload = '${JSON.stringify(metadata)}' id="modalcardexp" title="modalcardexp" href="#modal2">
            //     <i class="fa fa-eye"  aria-hidden="true"></i>
            // </span>
            item = `
            <div class="multi_simple_carousel_cards2 in-left">
                <div class="multi_simpleCardHeader2">
                    <span class="cardTitle" title="${largeCardTitle}(${startIndex + 1}-${i})">${largeCardTitle}</span>
                    <span class="cardTitle" title="${largeCardTitle}(${startIndex + 1}-${i})">(${startIndex + 1} - ${i})</span>
                </div>
                <div class="multi_simpleCardMainBody2">
                    ${miniCards}
                </div>
            </div>`;

            cards += item;
        }

    }
    // //                             <span class="arrow prev fa fa-chevron-circle-left "></span> 
    // <span class="arrow next fa fa-chevron-circle-right" ></span> 
    let cardContents = `<div id="paginated_cards">
                            <div class="multi_simple_carousel_wrapper2 cards">
                            <div class="multi_simple_cards_scroller2">${cards}

                            </div> </div>
                        </div>`;

    return cardContents;
}


// End Of MultiSimpleCardsCarousel functions

// ===================================== showQuickReplies =======================================
function showQuickReplies(quickRepliesData) {
    setTimeout(function () {
        var chips = ""
        for (i = 0; i < quickRepliesData.length; i++) {
            var chip = '<div class="chip" data-payload=\'' + (quickRepliesData[i].payload) + '\'>' + quickRepliesData[i].title + '</div>'
            chips += (chip)
        }

        var quickReplies = '<div class="quickReplies">' + chips + '</div><div class="clearfix"></div>'
        $(quickReplies).appendTo(".chats").fadeIn(1000);
        scrollToBottomOfResults();
        const slider = document.querySelector('.quickReplies');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    }, 1000);


}

// on click of quickreplies, get the value and send to Chatbot
$(document).on("click", ".quickReplies .chip", function () {
    var text = this.innerText;
    var payload = this.getAttribute('data-payload');
    console.log("chip payload: ", this.getAttribute('data-payload'))
    setUserResponse(text);
    send(payload);

    //delete the quickreplies
    $(".quickReplies").remove();

});


// ===================================== showCountsNotifications =======================================
function showCountsNotifications(countsData) {


    const countNotifications = `<div class="countNotifications"><span>Approved</span><span>100</span></div>`;
    $(countNotifications).appendTo(".chats").fadeIn(1000);
    scrollToBottomOfResults();
}





//====================================== Get User Location ==================================================
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getUserPosition, handleLocationAccessError);
    } else {
        response = "Geolocation is not supported by this browser.";
    }
}

function getUserPosition(position) {
    response = "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;
    console.log("location: ", response);

    //here you add the intent which you want to trigger 
    response = '/inform{"latitude":' + position.coords.latitude + ',"longitude":' + position.coords.longitude + '}';
    $("#userInput").prop('disabled', true);
    send(response);
    showBotTyping();
}

function handleLocationAccessError(error) {

    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.")
            break;
    }

    response = '/inform{"user_location":"deny"}';
    send(response);
    showBotTyping();
    $(".usrInput").val("");
    $("#userInput").prop('disabled', true);


}

//======================================bot typing animation ======================================
function showBotTyping() {

    var botTyping = '<img class="botAvatar" id="botAvatar" src="./static/img/sara_avatar.png"/><div class="botTyping">' + '<div class="bounce1"></div>' + '<div class="bounce2"></div>' + '<div class="bounce3"></div>' + '</div>'
    $(botTyping).appendTo(".chats");
    $('.botTyping').show();
    scrollToBottomOfResults();
}

function hideBotTyping() {
    $('#botAvatar').remove();
    $('.botTyping').remove();
}

//====================================== Collapsible =========================================

// function to create collapsible,
// for more info refer:https://materializecss.com/collapsible.html
function createCollapsible(data) {
    //sample data format:
    //var data=[{"title":"abc","description":"xyz"},{"title":"pqr","description":"jkl"}]
    list = "";
    for (i = 0; i < data.length; i++) {
        item = '<li>' +
            '<div class="collapsible-header">' + data[i].title + '</div>' +
            '<div class="collapsible-body"><span>' + data[i].description + '</span></div>' +
            '</li>'
        list += item;
    }
    var contents = '<ul class="collapsible">' + list + '</uL>';
    $(contents).appendTo(".chats");

    // initialize the collapsible
    $('.collapsible').collapsible();
    scrollToBottomOfResults();
}


//====================================== creating Charts ======================================

// function to get the current index of charts_data[]
function getCurrentChartIndex() {
    return charts_data.length - 1;
}

// function to store the chart_data in the charts_data = []
function setChartData(id, data) {
    charts_data.push({
        "id": id,
        "data": data
    });
}

// function to get the charts_data by id , returns whole object
function getChartData(id) {
    return charts_data.find(ele => ele.id == id);
}

//function to create the charts & render it to the canvas
function createChart(title, labels, backgroundColor, chartsData, chartType, displayLegend, chartsIntersectData) {

    //create the ".chart-container" div that will render the charts in canvas as required by charts.js,
    // for more info. refer: https://www.chartjs.org/docs/latest/getting-started/usage.html
    // making expand{id} as an unique id and chat-chart{id} ids for canvas

    // creating unique id
    let uniqueID = getCurrentChartIndex() + 1;
    let expandID = `#expand`;
    let canvasID = `chat-chart${uniqueID}`;
    let chartData = {
        "title": title,
        "labels": labels,
        "backgroundColor": backgroundColor,
        "chartsData": chartsData,
        "chartType": chartType,
        "displayLegend": displayLegend
    };
    // Add to memory
    setChartData(uniqueID, chartData);
    let html = `<div class="chart-container"> <span class="modal-trigger" data-payload = '${JSON.stringify(chartData)}' id="${expandID}" title="${expandID}" href="#modal1">
                <i class="fa fa-external-link" aria-hidden="true"></i></span>
                <canvas id="${canvasID}" ></canvas>
            </div> <div class="clearfix"></div>`;
    $(html).appendTo('.chats');

    //create the context that will draw the charts over the canvas in the ".chart-container" div
    var ctx = $(`#${canvasID}`);

    // Once you have the element or context, instantiate the chart-type by passing the configuration,
    //for more info. refer: https://www.chartjs.org/docs/latest/configuration/
    if (chartsIntersectData) {
        var data = {
            labels: labels,
            datasets: [{
                label: title,
                backgroundColor: backgroundColor,
                data: chartsData,
                id: "y-axis-0",
                fill: false
            },
            {
                label: title,
                backgroundColor: backgroundColor,
                data: chartsIntersectData,
                id: "y-axis-1",
                fill: false
            }]
        };
        var options = {
            title: {
                display: true,
                text: title
            },
            layout: {
                padding: {
                    left: 5,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            legend: {
                display: displayLegend,
                position: "right",
                labels: {
                    boxWidth: 5,
                    fontSize: 10
                }
            },
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true,
                    position: "left",
                    id: "y-axis-0",
                }, {
                    stacked: false,
                    position: "right",
                    id: "y-axis-1",
                }]
            }
        }
    }
    else {
        var data = {
            labels: labels,
            datasets: [{
                label: title,
                backgroundColor: backgroundColor,
                data: chartsData,
                fill: false
            }]
        };
        var options = {
            title: {
                display: true,
                text: title
            },
            layout: {
                padding: {
                    left: 5,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            legend: {
                display: displayLegend,
                position: "right",
                labels: {
                    boxWidth: 5,
                    fontSize: 10
                }
            },
            scales: {
                xAxes: [{
                    barThickness: 6
                }]
            }
        }
    }


    //draw the chart by passing the configuration
    chatChart = new Chart(ctx, {
        type: chartType,
        data: data,
        options: options
    });

    scrollToBottomOfResults();
}

// on click of expand button, get the chart data from data-payload & render it to modal


//function to create the  scrollable charts & render it to the canvas

function drawScrollChart(charts_data, axis_id, chart_id) {
    let chartData;
    // let xAxes;
    if (charts_data.title2) {
        chartData = {
            labels: [],
            datasets: [{
                type: "bar",
                backgroundColor: "red",
                id: "y-axis-0",
                fill: false,
                label: charts_data.title1,
                data: []
            },
            {
                type: "bar",
                backgroundColor: "blue",
                id: "y-axis-0",
                fill: false,
                label: charts_data.title2,
                data: []
            }]
        };
    }
    else {
        chartData = {
            labels: [],
            datasets: [{
                type: "bar",
                backgroundColor: "red",
                id: "y-axis-0",
                fill: false,
                label: charts_data.title1,
                data: []
            }]
        };
    }

    let rectangleSet = false;

    let canvasTest = $("#" + chart_id);
    let chartTest = new Chart(canvasTest, {
        type: 'bar',
        data: chartData,
        maintainAspectRatio: false,
        // responsive: true,
        options: {
            tooltips: {
                titleFontSize: 0,
                titleMarginBottom: 0,
                bodyFontSize: 12
            },
            legend: {
                display: true
            },
            scales: {
                xAxes: [{
                    stacked: false,
                    // barThickness: 8,  // number (pixels)
                    // maxBarThickness: 10,   // number (pixels)
                    // barPercentage:0.3,
                    barPercentage: 0.3,
                    categoryPercentage: 1.0,
                    ticks: {
                        fontSize: 12,
                        display: true
                    }
                }],
                yAxes: [{
                    stacked: false,
                    position: "left",
                    id: "y-axis-0",
                    ticks: {
                        fontSize: 12,
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                onComplete: function () {
                    if (!rectangleSet) {
                        let scale = window.devicePixelRatio;

                        let sourceCanvas = chartTest.chart.canvas;
                        let copyWidth = chartTest.scales['y-axis-0'].width - 10;
                        let copyHeight = chartTest.scales['y-axis-0'].height + chartTest.scales['y-axis-0'].top + 10;

                        let targetCtx = document.getElementById(axis_id).getContext("2d");

                        targetCtx.scale(scale, scale);
                        targetCtx.canvas.width = copyWidth * scale;
                        targetCtx.canvas.height = copyHeight * scale;

                        targetCtx.canvas.style.width = `${copyWidth}px`;
                        targetCtx.canvas.style.height = `${copyHeight}px`;
                        targetCtx.drawImage(sourceCanvas, 0, 0, copyWidth * scale, copyHeight * scale, 0, 0, copyWidth * scale, copyHeight * scale);

                        let sourceCtx = sourceCanvas.getContext('2d');

                        // Normalize coordinate system to use css pixels.

                        sourceCtx.clearRect(0, 0, copyWidth * scale, copyHeight * scale);
                        rectangleSet = true;
                    }
                },
                onProgress: function () {
                    if (rectangleSet === true) {
                        let copyWidth = chartTest.scales['y-axis-0'].width;
                        let copyHeight = chartTest.scales['y-axis-0'].height + chartTest.scales['y-axis-0'].top + 10;

                        let sourceCtx = chartTest.chart.canvas.getContext('2d');
                        sourceCtx.clearRect(0, 0, copyWidth, copyHeight);
                    }
                }
            }
        }
    });
    function addData(chart_data, chart) {
        chart.data.labels = [];
        for (let i = 0; i < chart_data.labels.length; i++) {
            chart.data.datasets[0].data.push(chart_data.data1[i]);
            if (chart_data.data2) {
                chart.data.datasets[1].data.push(chart_data.data2[i]);
            }

            chart.data.labels.push(chart_data.labels[i]);
            let newwidth = $('.chartAreaWrapper2').width() + 60;
            $('.chartAreaWrapper2').width(newwidth);
        }
        console.log(chart.data);
    }

    addData(charts_data, chartTest);
};


function createChartScroll(titles, labels, data1, data2) {

    //create the ".chart-container" div that will render the charts in canvas as required by charts.js,
    // for more info. refer: https://www.chartjs.org/docs/latest/getting-started/usage.html
    // making expand{id} as an unique id and chat-chart{id} ids for canvas

    // creating unique id
    if (labels.length < 1) {
        return;
    }
    let uniqueID = getCurrentChartIndex() + 1;
    let expandID = `#scrollexpand`;
    let canvasID = `scroll-chart${uniqueID}`;
    let axisID = `axis-chart${uniqueID}`;
    let chartData = {
        "labels": labels,
        "title1": titles.title1,
        "title2": titles.title2,
        "data1": data1,
        "data2": data2
    };
    // Add to memory
    setChartData(uniqueID, { data1: data1, data2: data2 });
    const canvasHeight = window.screen.width > 900 ? window.screen.height * 0.1 : window.screen.height * 0.25;
    console.log(canvasHeight);

    let html = `
    <div class="chartWrapper">
        <canvas id="${axisID}" height="300" width="0"></canvas>
        <div class="chartAreaWrapper">
            <div class="chartAreaWrapper2">
                <canvas id="${canvasID}" height="${canvasHeight}px;" ></canvas>
            </div>
        </div>
    </div>
    <div class="clearfix"></div>`;
    $(html).appendTo('.chats');

    drawScrollChart(chartData, axisID, canvasID);


    scrollToBottomOfResults();
}

$(document).on("click", ".modal-trigger-card", function () {
    let payload = JSON.parse(this.getAttribute('data-payload'));
    let title = payload.title;
    let data = payload.data;

    let html = `<div class="cardpreviewHeader" ><span class="cardpreviewTitle">${title}</span></div>`;
    let eles = "";
    for (let i = 0; i < data.length; i++) {
        let ele = data[i];
        eles = eles + `<span class="cardpreviewdata"><div class="cardpreviewtitles">${ele.title}</div><div class="cardpreviewvariables">${ele.value}</div></span>`;
    }
    html = html + eles;
    $('#modal2').html(html);
    $('#modal2').modal({ dismissible: true });
    $('#modal2').modal('open');

});

// on click of expand button, render the table
$(document).on("click", ".modal-trigger-table", function () {
    let payload = JSON.parse(this.getAttribute('data-payload'));

    //Define Table
    let columns = payload.columns;
    let initialSort = payload.initialSort;
    let tabledata = payload.tableData;
    const table = new Tabulator("#modal3", {
        layout: "fitDataStretch",
        // responsiveLayout:true,
        tooltips: true,
        addRowPos: "top",
        history: true,
        pagination: "local",
        paginationSize: 5,
        // paginationSizeSelector:[1,2,3],
        movableColumns: true,
        resizableRows: true,
        data: tabledata,
        initialSort: initialSort,
        columns: columns
    });



    $('#modal3').modal({ dismissible: true });
    $('#modal3').modal('open');
    let tableheadercss = { backgroundColor: "rgb(44, 83, 175)" };
    $('.tabulator .tabulator-header .tabulator-headers .tabulator-col .tabulator-col-content').css(tableheadercss);
    $('.tabulator-headers').css(tableheadercss);
    $('.tabulator-col-title').css('color', 'white');
    $('.tabulator .tabulator-header .tabulator-col .tabulator-col-content .tabulator-col-title').show();
});


// on click of expand button, get the chart data from data-payload & render it to modal

$(document).on("click", ".modal-trigger", function () {
    let payload = JSON.parse(this.getAttribute('data-payload'));
    payload.titles = {
        label1: payload.label1,
        label2: payload.label2
    };
    createChartinModal(payload.title, payload.titles, payload.labels, payload.backgroundColor, payload.chartsData, payload.chartType, payload.displayLegend, payload.chartsIntersectData)
});



//function to render the charts in the modal
function createChartinModal(chartName, titles, labels, backgroundColor, chartsData, chartType, displayLegend, chartsIntersectData) {

    var ctx = $('#modal-chart');

    if (chartsIntersectData) {
        var data = {
            labels: labels,
            datasets: [{
                type: "bar",
                label: titles.label1,
                backgroundColor: "red",
                data: chartsData,
                id: "y-axis-0",
                fill: false
            },
            {
                type: "bar",
                label: titles.label2,
                backgroundColor: "blue",
                data: chartsIntersectData,
                id: "y-axis-0",
                fill: false
            }]
        };
        var options = {
            title: {
                display: true,
                text: chartName
            },
            tooltips: {
                mode: 'label'
            },
            layout: {
                padding: {
                    left: 5,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            legend: {
                display: displayLegend,
                position: "right",
                labels: {
                    boxWidth: 5,
                    fontSize: 10
                }
            },
            scales: {
                xAxes: [{
                    stacked: false
                }],
                yAxes: [{
                    stacked: false,
                    position: "left",
                    id: "y-axis-0",
                }]
            }
        }
    }
    else {
        var data = {
            labels: labels,
            datasets: [{
                label: titles.label1,
                backgroundColor: backgroundColor,
                data: chartsData,
                fill: false
            }]
        };
        var options = {
            title: {
                display: true,
                text: chartName
            },
            tooltips: {
                mode: 'label'
            },
            layout: {
                padding: {
                    left: 5,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            legend: {
                display: displayLegend,
                position: "right",
                labels: {
                    boxWidth: 5,
                    fontSize: 10
                }
            }
        }
    }


    modalChart = new Chart(ctx, {
        type: chartType,
        data: data,
        options: options
    });

}

// ========================================createForm==============================================

function previewAttachments() {
    if (!uploadedAttachmentStore.filled) {
        M.toast({ html: "No files are uploaded!..." });
        return;
    }
    M.toast({ html: "Displaying preview...!" });
}
function fillAttachment(file) {
    console.log(file);
    uploadedAttachmentStore = {
        preview: file.preview,
        url: file.uploadURL,
        name: file.name,
        type: file.type,
        filled: true
    };
    let icon = $('#attachment-icon');
    icon.addClass('filledFiles');
    icon.removeClass('addFiles');
    $('#oneRed').toggle();
    // icon.text('edit');
    // 1. add another id for the icon
    // 2. style the filled icon
    // 3. on trigger of the new icon run another function
    // $('#attachment-icon')
}
function triggerUploadFile(token, cb) {
    var uppy = Uppy.Core({
        restrictions: { maxNumberOfFiles: 1 },
        browserBackButtonClose: true,
        onBeforeFileAdded: (currentFile, files) => {
            const modifiedFile = {
                ...currentFile,
                name: currentFile.name.replace(/ +/g, "-").trim()
            }
            return modifiedFile
        }
    })
        .use(Uppy.Dashboard, { target: '#drag-drop-area' })
        .use(Uppy.ImageEditor, {
            target: Uppy.Dashboard,
            quality: 0.8,
            cropperOptions: {
                viewMode: 1,
                background: false,
                autoCropArea: 1,
                responsive: true
            },
            actions: {
                revert: true,
                rotate: true,
                flip: true,
                zoomIn: true,
                zoomOut: true,
                cropSquare: true,
                cropWidescreen: true,
                cropWidescreenVertical: true
            }
        })
        // .use(Uppy.Webcam, { target: Uppy.Dashboard,
        //     countdown: false,
        //     mirror: false,
        //     showVideoSourceDropdown: true,
        //     videoConstraints: {
        //         facingMode: { exact: "environment" },
        //         width: { min: 720, ideal: 1280, max: 1920 },
        //         height: { min: 480, ideal: 800, max: 1080 },
        //       },
        //        showRecordingLength: true,
        //  })
        .use(Uppy.XHRUpload, {
            endpoint: 'https://mindfulautomations.com/chat_bot_test/api/v1/expense/insert_expense_document',
            method: "post",
            fieldName: 'files',
            responseUrlFieldName: 'data',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    //   .use(Uppy.Tus, {endpoint: 'http://mindfulautomations.com/chat_bot_test/api/v1/expense/insert_expense_document',
    //  fieldName: 'files'                 
    // })

    uppy.on('complete', (result) => {
        console.log(result);
        console.log('Upload complete! We’ve uploaded these files:', result.successful);
        cb(result);

    })


    uppy.getPlugin('Dashboard').openModal()

    // setTimeout(() => {
    //   uppy.getPlugin('Dashboard').closeModal()
    // }, 5000)
    // 
}

function showCreateExpenseForm(formData) {
    let tags = {};
    let cats = {};
    let outs = {};
    expenseFormMemory = formData;
    formData.tags.forEach((tag) => {
        tags[tag.title] = "/static/img/desktop_searchbox.webp";
    });
    formData.categories.forEach((cat) => {
        cats[cat.title] = "/static/img/desktop_searchbox.webp";
    });
    formData.outlets.forEach((out) => {
        outs[out.title] = "/static/img/desktop_searchbox.webp";
    });
    // background: linear-gradient(45deg, rgb(47 61 138), #e6cfcf96);background-color: rgb(44, 60, 146);
    // style="border: solid 2px #cababad1;margin: 5px;margin-bottom: 2px;margin-top:0px"
    const eles = `
    <div class="input-field col s12 expense-input-field" style="margin-top:9px">
    <input type="text" name="out" id="auto-complete-outs" autocomplete="off" class="autocomplete validate" required="" maxlength="25" placeholder="Search Outlets">
    <span style="display:none" id="warning-out"> <span class="material-icons" style="font-size: small;margin-right: 3px;top: 3px;position: relative;" style="font-size: small;margin-right: 3px;top: 3px;position: relative;">warning</span>No such Outlet</>
        <!-- <label for="auto-complete-tags1" style="font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;">Search Tags</label> -->
    </div>
    <!-- style="margin-top:9px" -->
    <div class="input-field col s12 expense-input-field">
    <input type="text" name="tag" id="auto-complete-tags1" autocomplete="off" class="autocomplete validate" required="" maxlength="25" placeholder="Search Tags">
    <span style="display:none" id="warning-tag"> <span class="material-icons" style="font-size: small;margin-right: 3px;top: 3px;position: relative;" style="font-size: small;margin-right: 3px;top: 3px;position: relative;">warning</span>No such tag</>
        <!-- <label for="auto-complete-tags1" style="font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;">Search Tags</label> -->
    </div>
    <div class="input-field col s12 expense-input-field">
        <input type="text" name="cat" autocomplete="off" id="auto-complete-cats1" class="autocomplete validate" required="" maxlength="25" placeholder="Search Categories">
        <span style="display:none" id="warning-cat"> <span class="material-icons" style="font-size: small;margin-right: 3px;top: 3px;position: relative;">warning</span>No such Category</>
        <!-- <label for="auto-complete-cats1"  style="font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;">Search Cats</label> -->
    </div>
    <div class="input-field col s12 expense-input-field">
        <input type="text" name="name" autocomplete="nope" placeholder="Expense Name" class="validate" required maxlength="25">
    </div>
    <div class="input-field col s12 expense-input-field">
        <input type="number" autocomplete="off" name="amount" placeholder="Amount"  class="validate" required onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : (event.charCode >= 48 && event.charCode <= 57) || event.keyCode==46 " min="0" >
    </div>
    <!--<div class="input-field col s12 expense-input-field">
        <input type="file" accept="image/*"  name="image" placeholder="Upload Image"  class="validate" required>
    </div>-->
    <!-- <div class="file-field input-field">
    <input type="file" accept="image/*"  name="image" required>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text" placeholder="Upload an Image">
      </div>
    </div> -->
    <div class="input-field col s12 expense-text-area">
    <span id="attachment-area">
    <span style="display:none" id="oneRed"><p>1</p></span>
    <i id="attachment-icon" class="small addFiles material-icons">attachment</i> 
    </span>
        <textarea class="materialize-textarea" name="comment" placeholder="Write any Comments..." class="validate" maxlength="50" required autocomplete="off"></textarea>
    </div>`;
    const miniCard = `<div class="multi_simpleCardMiniBody2" style="width:100%; border-radius: 20px !important;">
                                ${eles}
                        </div>`;
    const card = `<div class="multi_simple_carousel_cards2 in-left">
                        <div class="multi_simpleCardMainBody2" style="overflow: hidden !important;height:auto !important;">
                        ${miniCard}
                        </div>
                    </div>`;


    const formHtml = `
                <div id="paginated_cards">
                        <div class="multi_simple_carousel_wrapper2 cards" style="display:flex;flex-direction:column">
                        <form method="POST" action="">
                        ${card}
                        <button id="saveExpense" class="waves-effect waves-light btn-small" type="submit">Save Expense</button>
                        </form>
                        </div>
                </div>`;
    $(formHtml).appendTo(".chats").show();

    // $('#auto-complete-tags1').autocomplete({
    //     data: tags,
    //   });
    //   $('#auto-complete-cats1').autocomplete({
    //     data: cats,
    //   });

    const autoCompleteTagElems = document.querySelectorAll('#auto-complete-tags1');
    const autoCompleteCatElems = document.querySelectorAll('#auto-complete-cats1');
    const autoCompleteOutElems = document.querySelectorAll('#auto-complete-outs');
    const options = {};

    let autoCompleteTaginstances = M.Autocomplete.init(autoCompleteTagElems, {
        data: tags,
        minLength: 0,
    });
    let autoCompleteCatinstances = M.Autocomplete.init(autoCompleteCatElems, {
        data: cats,
        minLength: 0,
    });
    let autoCompleteOutinstances = M.Autocomplete.init(autoCompleteOutElems, {
        data: outs,
        minLength: 0,
    });
    $('#auto-complete-tags1').attr('disabled', "disabled");
    $('#auto-complete-cats1').attr('disabled', "disabled");
    $('#auto-complete-tags1').on('focusin', function () {
        $('.quickReplies').toggle();
    })
    $('#auto-complete-tags1').on('focusout', function () {
        $('.quickReplies').toggle();
    })
    $('#auto-complete-cats1').on('focusin', function () {
        $('.quickReplies').toggle();
    })
    $('#auto-complete-cats1').on('focusout', function () {
        $('.quickReplies').toggle();
    })
    $('#auto-complete-outs').on('focusin', function () {
        $('.quickReplies').toggle();
    })
    $('#auto-complete-outs').on('focusout', function () {
        $('.quickReplies').toggle();
    })
    $('#auto-complete-outs').on('change', function (e) {
        let filteredTags = {};
        let filteredCats = {};
        let outletSel = e.target.value;
        const imgLink = "/static/img/desktop_searchbox.webp";
        outletSel = formData.outlets.filter(e => e.title.toLowerCase() == outletSel.toLowerCase())[0];
        if (outletSel.length < 1) {
            M.toast({ html: "Please select a valid outlet" });
            return;
        }
        expenseFormMemory.selectedOutlet = outletSel;
        // Show Outlet POPUP
        Swal.fire("Outlet Info", `<div style="display:flex;flex-direction:column"><span><b>Budget</b> ${outletSel.amount_limit}</span><span> <b> Spent </b> ${outletSel.spent_amount} <br></span> <span> <b>Remaining </b> ${outletSel.remaining_amount} </span> </div>`);

        console.log(outletSel);
        let isCatsAvailable = false;
        let isTagsAvailable = false;
        for (let i = 0, j = 0; i < formData.categories.length || j < formData.tags.length; i++, j++) {
            let tag = formData.tags[j];
            let cat = formData.categories[i];
            let obj = {};
            console.log(outletSel.outlet_id);
            if (tag && tag.outlet_id == outletSel.outlet_id) {
                filteredTags[tag.title] = imgLink;
                isTagsAvailable = true;
            }
            if (cat && cat.outlet_id == outletSel.outlet_id) {
                filteredCats[cat.title] = imgLink;
                isCatsAvailable = true;
            }
        }
        if (!isCatsAvailable) {
            $("#auto-complete-cats1").attr('disabled', 'disabled');
        }
        if (!isTagsAvailable) {
            $("#auto-complete-tags1").attr('disabled', 'disabled');
        }
        if (isCatsAvailable) {
            $("#auto-complete-cats1").removeAttr('disabled');
        }
        if (isTagsAvailable) {
            $("#auto-complete-tags1").removeAttr('disabled');
        }
        expenseFormMemory.isCatsAvailable = isCatsAvailable;
        expenseFormMemory.isTagsAvailable = isTagsAvailable;
        autoCompleteTaginstances = M.Autocomplete.init(autoCompleteTagElems, {
            data: filteredTags,
            minLength: 0,
        });
        autoCompleteCatinstances = M.Autocomplete.init(autoCompleteCatElems, {
            data: filteredCats,
            minLength: 0,
        });
    })
    $('#auto-complete-tags1').on('keyup', function () {
        // console.log(autoCompleteTaginstances);
        if (autoCompleteTaginstances[0].count === 0) {
            console.log('no matches');
            $('#auto-complete-tags1').val('');
            $('#warning-tag').show();
            $(this).trigger("click");
        }
        else {
            $('#warning-tag').hide();
        }
        return;
    })
    $('#auto-complete-cats1').on('keyup', function () {
        // console.log('keyup');
        if (autoCompleteCatinstances[0].count === 0) {
            console.log('no matches');
            $('#auto-complete-cats1').val('');
            $('#warning-cat').show();
            $(this).trigger("click");
        }
        else {
            $('#warning-cat').hide();
        }
        return;
    })

    $('#auto-complete-outs').on('keyup', function () {
        // console.log('keyup');
        if (autoCompleteOutinstances[0].count === 0) {
            console.log('no matches');
            $('#auto-complete-outs').val('');
            $('#warning-out').show();
            $(this).trigger("click");
        }
        else {
            $('#warning-out').hide();
        }
        return;
    })
    $('#attachment-area').on('click', (e) => {
        if (uploadedAttachmentStore.filled) {
            alert("Filled");
            return;
        }
        const token = formData.token;
        expenseFormMemory.token = token;
        triggerUploadFile(token, (result) => {
            const { successful, failed } = result;
            console.log(failed)
            if (failed.length > 0) {
                M.toast({ html: `Failed due to:  ${failed[0].error}` });
            }
            else {
                const url = `https://mindfulautomations.com/${successful[0].response.uploadURL}`;
                M.toast({ html: `successfully uploaded at ${url}` });
                fillAttachment(successful[0]);
            }
        });


    });

    $('form').on('submit', (e) => {
        e.preventDefault();
        // Disabling the multi clicks
        $('#saveExpense').prop('disabled', true);
        const serialisedData = $('form').serializeArray();
        formExpenseSubmit(serialisedData);
        $('#saveExpense').prop('disabled', false);

    });

    scrollToBottomOfResults();
}

function formExpenseSubmit(serialiseddata) {
    console.log(serialiseddata);
    let expenseData = {};
    for (let i = 0; i < serialiseddata.length; i++) {
        let ele = serialiseddata[i];
        if (typeof ele.value === "undefined") {
            M.toast({ html: 'Please fill out the details properly' });
            return;
        }
        let singleSpacedText = ele.value.replace(/ +/g, " ").trim();
        if (ele.name === "cat" && expenseFormMemory.isCatsAvailable && expenseFormMemory.isCatsAvailable == false) {
            continue;
        }
        if (ele.name === "tag" && expenseFormMemory.isTagsAvailable && expenseFormMemory.isTagsAvailable == false) {
            continue;
        }
        if (singleSpacedText.length < 1) {
            M.toast({ html: 'Please fill out the details properly' });
            return;
        }

        expenseData[ele.name] = singleSpacedText;
    }
    let tag_found;
    let cat_found;
    let out_found;
    for (i = 0, j = 0, k = 0; i < expenseFormMemory.tags.length || j < expenseFormMemory.categories.length || j < expenseFormMemory.outlets.length; i++, j++, k++) {
        let tag = expenseFormMemory.tags[i];
        let cat = expenseFormMemory.categories[i];
        let out = expenseFormMemory.outlets[i];
        console.log(tag);
        if (tag && expenseData.tag) {
            if (tag.title.toLowerCase().trim() === expenseData.tag.toLowerCase()) {
                tag_found = tag;
            }
        }
        if (cat && expenseData.cat) {
            if (cat.title.toLowerCase().trim() === expenseData.cat.toLowerCase()) {
                cat_found = cat;
            }
        }
        if (out) {
            if (out.title.toLowerCase().trim() === expenseData.out.toLowerCase()) {
                out_found = out;
            }
        }
    }
    if ((expenseFormMemory.isTagsAvailable && typeof tag_found === "undefined") || (expenseFormMemory.isCatsAvailable && typeof cat_found === "undefined") || typeof out_found === "undefined") {
        M.toast({ html: 'Please select valid option' });
        return;
    }
    expenseData.tag = tag_found;
    expenseData.cat = cat_found;
    expenseData.outlet_id = out_found.outlet_id;
    const token = expenseFormMemory.token;
    // Check Amount is greater than limited
    // console.log(out_found.remaining_amount);
    // console.log(tag_found.amount_limit);
    // console.log(cat_found.amount_limit);
    // console.log(expenseData.amount);
    if (parseInt(expenseData.amount) > parseInt(out_found.remaining_amount) || (tag_found && parseInt(expenseData.amount) > parseInt(tag_found.amount_limit)) || (cat_found && parseInt(expenseData.amount) > parseInt(cat_found.amount_limit))) {
        Swal.fire({
            title: "OTP Required",
            text: "Requested Amount is more than limit, OTP verification is must.",
            icon: "info",
            confirmButtonText: 'Send OTP',
            showCancelButton: true,
            showLoaderOnConfirm: true,
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return $.ajax({
                    type: "post",
                    url: "https://mindfulautomations.com/botdemo/chat_bot_test/api/v1/expense/send_otp",
                    dataType: "json",
                    contentType: "application/json",
                    crossDomain: true,
                    "headers": {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    },
                }).done(function (data) {
                    console.log(data);
                    return data;
                }).fail((err) => {
                    console.log(err);
                    // alert("failed");
                    Swal.hideLoading();
                    Swal.showValidationMessage(
                     `Failed to send OTP, Check your Network!`);

                })
            },
            allowOutsideClick: () => false
        }).then((response) => {
            console.log(response);
            if (response.isDenied || response.isDismissed) {
                Swal.fire("Cancelled", "OTP Sending cancelled.", "success");
            }
            else if (response.value.status === 'success') {
                Swal.fire({
                    title: "OTP Sent",
                    text: "Enter OTP sent to your device",
                    icon: "success",
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Verify',
                    showLoaderOnConfirm: true,
                    preConfirm: (otp) => {
                        return $.ajax({
                            type: "post",
                            url: "https://mindfulautomations.com/botdemo/chat_bot_test/api/v1/expense/verify_otp",
                            dataType: "json",
                            contentType: "application/json",
                            data: JSON.stringify({ otp: otp + "" }),
                            crossDomain: true,
                            "headers": {
                                'Content-Type': 'application/json',
                                //   c74d97b01eae257e44aa9d5bade97baf45c48cce2e2d7fbdea1afc51c7c6ad26
                                "Authorization": `Bearer ${token}`
                            },
                        }).done(function (data) {
                            console.log(data);
                            return data;
                        }).fail((err) => {
                            console.log(err);
                            Swal.hideLoading();
                            // return false;
                            if(err.responseJSON && err.responseJSON.status==="failed"){
                            Swal.showValidationMessage(
                                err.responseJSON.message
                            )
                        	}
                        	else{
							Swal.showValidationMessage("Something went wrong, Check your Network.");
                        	}

                        })
                    },
                    allowOutsideClick: () => false
                }).then((response) => {
                    if (response.isDenied || response.isDismissed) {
                        console.log("deinied or dismissed");
                        // Swal.showValidationMessage(`Are you sure to close`);
                        Swal.fire("Cancelled", "OTP Verification cancelled :)", "error");
                    }
                    else if (response.value.is_valid_otp == "yes") {
                        Swal.fire("Verified", "Successfully OTP has been verified.", "success");
                        expenseData.timestamp = new Date().getTime();
                        if (uploadedAttachmentStore.filled) {
                            expenseData.file_path = uploadedAttachmentStore.url;
                        }
                        expenseData.is_verified = "yes";
                        console.log(expenseData);
                        const CREATE_EXPENSE_INTENT = "/main.expense.create_expense.save";
                        send(CREATE_EXPENSE_INTENT, expenseData);
                        console.log("Submitted");
                    }
                    else {
                        Swal.showValidationMessage(`Wrong OTP`);
                    }
                })
            }
            else {
                Swal.fire("Failed OTP Sending", "OTP Sending failed :)", "error");
            }
        });
        return;
    }


    // timestamp in ms
    expenseData.timestamp = new Date().getTime();
    if (uploadedAttachmentStore.filled) {
        expenseData.file_path = uploadedAttachmentStore.url;
    }
    expenseData.is_verified = "no";
    console.log(expenseData);
    const CREATE_EXPENSE_INTENT = "/main.expense.create_expense.save";
    const res = send(CREATE_EXPENSE_INTENT, expenseData);
    console.log(res);
    console.log("Submitted");
}


// ========================================saveExpense==============================================
function showApproveExpense(formData) {
    let tags = {};
    let cats = {};
    approveExpenseFormMemory = formData;
    let forms = '';
    if (approveExpenseFormMemory.length < 1) {
        setBotResponse([{
            text: "No More to Approve."
        }]);
        return;
    }
    let noPreviewUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD///+MjIywsLD19fXo6Oj8/Pz4+Pj29vY2Njby8vLS0tLv7+99fX3AwMDNzc3h4eGXl5dXV1cxMTFoaGhCQkKnp6eQkJCGhoZiYmK7u7uzs7PIyMhJSUnY2Nh2dnZTU1MlJSUbGxtxcXELCws7OzsWFhagoKATExMjIyMyMjJGRkZzkw9lAAAInklEQVR4nO2daWOyOhCFQQVcABWtiiyu1S7///9dpcpMIDbBtkl475xvikoeSWaSQE4s+1+XpbsAfy4ibL+IsP0iwvaLCNuvJwh7o3CddP9aSZKs09xRT+il5yDbWUr09rGdd87hDymbEbrd+asaOtBHFHR7qgjTbK+ar9D+5TBRQjjXgndTnP85Yf6hE/Ciee7+JaEbDjQDXjR9pq5KEhoBaFlZ+meE4xfdcF/an4d/Q+hnutHuOgZNa6oc4UE3GFLcEFGKMNUEM3vjvfvSDFGKUDXZXWvbX0SzY/XtUyNEGcKFDrqrkuvZnWlU7UkNmnRVJQjdTy141o3wEue61d5U7P8qYfiuBc8qCS/XsTtjjwTebxIGevAsRGjbow1z5G3xi4S9SBMfQ2j7Z+bQQLp3IyYcKx8RlkqYgnSZ3DGXjTZiwoWeMeFVLKEdMo3x/GuEU118NUJ7jREHkgNGMeFSG2CN0E7w0Y5cPBUTdnTxcQjZCiV3EY0m7NYK4+GkEbSfcFqftpjgpigVTo0mXHGGu2t0XOoiGk245QwiHDxWbT2hNeaUJ0T5ed16wiUnIfjoIs5bT3jkJYTFqTw+kJiXMpvQmnMmgSfb8vB72HpCbrhEw7lO+wmtVb1EXYg1Eg3ReEIrruV1B8ZzW3HSN5/wElEnQ49pj9vy0Csvn7SP8HKppsl4VCqHWYddvXPeTsKHehOPg1tOaE3/ecIlEbaeUJzyiZAIdYsIiZAI9YsIiZAI9YsIiZAI9YsIiZAI9YsIiZAI9YsIiZAI9YsIiZAI9YsIiZAI9YsIiZAI9YsIiZAI9YsIiZAI9YsIiZAI9YsITSA8DqJ4Hm9fT+KPcmQ+4W5zTh3P7jnjRSequQmJZTxhvEarQPMkaHwhTSdcVRbX+eON+EuMzCGMgkPd9XRaX8g8HDczRzWFcNtzL0oq72645+uvDCY8zbIom9X9bOLbT01Y7EdnTBt4NColPMbda61z15tKCd/K1oadYPaPF7hO5tJRVSXhcVVajI0DxvBoU5rkOujd8zdupI50TVVJOEdx31tjr0xg6UE2iL5dozyUdTZSSci6dORo0TwiBHO7uvcMI1fS2kghYVz5mg9FDMpa6pXmeVvkBzEM4sO06g/hyZ1XIWHNwcIrKxp4ALpl+8Lrd6/L64/vUeUXhlJOeOoId5xv3hE/gLB7ewsbypUkFQs2R8YKTx0hz7+ivGJQ8vEdBsISSpK7hOnkjCTyojpCrslI/9bsIAjlt4+jBcpMT3TJmFouxB1xdYT82D/56mSCtcPtgu3AHMhhPZgD/EO+2CNdGeHxQXYLi6Ng7XBD/oSPV00LcVq101n1RNoIB2Xt8tZMYizCCATOyZctSVz5ANYB93WEgyllhFFJ2I8jjDi52rtCGHK2xcfRG/WAiYNWXjuqixDq1qXbwiBe/dWi8tVXyzqCvypnHHHEbh5bUwihc927FHmDIqJzYXopX32l8RNkwwVnFPEygq+P64f1EK76JeE1OCxRWwpP1qx80S/6cmjgxO1hr9COHaYQgtPmsIiWKD36G+tUvvAKr9wdHOV2sHeoxxMbSjhDnZPkHU7iFt7gcE0fdD47cBGrUx+6CFdAOKueeRhbUGmLjulr+dLh5/QPiFUO9wMaCNl2aFnvKJ4uEGFxSbLy5eRBJYRekG8IYcDE0qsO8AveDAgLc07IHvmD8QMMmv3vZxf15MNCMxQtVkBYdONglm3ygBAsIYffm20rI4xLwv69zKhrgmpsQSiupctqu9ZOmEG/9B47XrhmcQUh9AAeRBpkTGpKLZ0BYdlZ5hqNFe0QskWPny2Qq6cpkQZGTzBJFvE22igI36Fd8qfUAuj2mZItYATswn4fvHF/kS32wH7m/Rju05iS8dFERVi+F3D22Sgy/huwr3mBBNdvwXSUOkL419GQru6Re5tihHL5nGCKS90XnFcdIYz4EGG3dmti+DX9hsb4tYa4xwMToau/OkKwip1AeN/WjIxvc0uQXO7zGqUyZrrfF209oY4QroqD9veqRdPbLAaaa2N3Ihos2ZotPLk6Qkhx2G+7lhIng1rBUPCNziO2Xhs014YM4D00bN/VCO8s6Oq6o042GGw3i9yptFtHMPxVSwhNDnv7V6vp6H6AaW1ur9fre7Ww1JO4T6qQENJFiiaXDuxvuXA/SryzmCdzC1EhITS5HM3Tn9jf8qDaCTdskrsNrOUOqY8nqlmv5iHc3/8Q+FRL3spXSLiDb+C+Jmuajmc/607kWCPJjWtV3seHbyToSQx2zyKm2IfHe/0MF7LbaKkkhIlqZqYeF6Ey1js82rshnUs/waeSEO42MNuy4qF+9U7SltsW83mDR9uUPk9TfiNkShiUV2pdv0exqTXGsNmmrioJYWPJSphffiG6a+4+ivPU8Yee53r9oe+Ejbd0Vfpc2/3+U21z5GA8cSajzsNn1T4Pnel5uYqEnVDdhKfVNW4OE04128Zb7rawP5fipy+z5fm8EY3oflemPEH7dyJCIiRC/SJCIiRC/SJCIiRC/SJCIiRC/SJCIiRC/SJCIiRC/SJCIiRC/SJCIiRC/SJCIvx/EEoaxWjSUlh+MaGs248ecRdXNSSs2joYpb3AqkiKcCz7IKQOvQqew5Ui7IkfmNen+PEzqvKEdW8Og8Qz/mlOGHKfKTRC71zjn8aE7qf4VJr0+Y2rXQNCdmWSURIuaZAkFLlvaNNRqvAyHxJZqOhSKi66JKHd+OFkJeL7nz5H6Dd7vFyNMs4y46cJ2QUGZuhzJC52A0I3NK3v9hpKZIoGhBfEBta3CjSQBZQmtO3cJMRBfSH8zwkr67K06iAu7FOEdpqZMFbcZ+Ih07OEttud6444r/NEtgU+Q2jbXnoOsma26b+nXRac02Z8zQkv6ufhOumqV7JO8764eL9A2DIRYftFhO0XEbZfRNh+/fuE/wFU5KZFGWVryQAAAABJRU5ErkJggg==';
    for (let i = 0; i < approveExpenseFormMemory.length; i++) {
        let expense = approveExpenseFormMemory[i];
        let comments = '';
        let totalComments = expense.comments.length;
        let attachmentUrl = expense.document_path;
        if (attachmentUrl.split('://')[0] == 'http') {
            attachmentUrl = 'https://' + attachmentUrl.split('://')[1];
        }
        let attachmentDisplay = attachmentUrl.length > 0 ? 'inline-block' : 'none';
        let imgUrl = attachmentUrl.length > 0 ? attachmentUrl : noPreviewUrl;
        for (let j = 0; j < totalComments; j++) {
            let comment = expense.comments[j];
            let commentHtml = `
            <fieldset class="input-field col s12 expense-text-area" style="border: 1px solid rgba(202, 186, 186) !important;padding: 0px;padding-left: 15px;border:none !important;">
            <legend><label for="previousComments${j}" style="color:grey">${comment['created_date']} ${j + 1}/${totalComments}</label></legend>
            <textarea class="materialize-textarea" name="previousComments${j}" placeholder="Write any Comments..." class="validate"  maxlength="50" required disabled style="border-bottom:6px solid rgb(9, 84, 132) !important;overflow-y:scroll;width:50vh">${comment.comment}</textarea>
            </fieldset>
            `;
            comments = comments + commentHtml;
        }
        let fields = `
        <fieldset class="input-field col s12 expense-input-field" style="border: 1px solid rgba(202, 186, 186) !important;padding: 0px;padding-left: 15px;border-radius: 0px;border:none !important;box-shadow: none !important;">
        <legend><label for="tag" style="color:grey">Outlet</label></legend>
        <input type="text" name="out" id="auto-complete-outs${i}" class="validate" required="" disabled value="${expense.outlet_name}" maxlength="25" style="height: auto;">
        </fieldset>

        <fieldset class="input-field col s12 expense-input-field" style="border: 1px solid rgba(202, 186, 186) !important;padding: 0px;padding-left: 15px;border-radius: 0px;border:none !important;box-shadow: none !important;">
        <legend><label for="tag" style="color:grey">Tag</label></legend>
        <input type="text" name="tag" id="auto-complete-tags${i}" class="validate" required="" disabled value="${expense.tag}" maxlength="25" style="height: auto;">
        </fieldset>
    
        <fieldset class="input-field col s12 expense-input-field" style="border: 1px solid rgba(202, 186, 186) !important;padding: 0px;padding-left: 15px;border-radius: 0px;border:none !important;box-shadow: none !important;">
        <legend><label for="cat" style="color:grey">Category</label></legend>
        <input type="text" name="cat" id="auto-complete-cats1${i}" class="validate" required="" disabled value="${expense.category}" maxlength="25" style="height: auto;">
        </fieldset>
    
        <fieldset class="input-field col s12 expense-input-field" style="border: 1px solid rgba(202, 186, 186) !important;padding: 0px;padding-left: 15px;border-radius: 0px;border:none !important;box-shadow: none !important;">
        <legend><label for="name" style="color:grey">Expense Name</label></legend>
        <input type="text" name="name"  class="validate" required="" disabled value="${expense.expense_name}" maxlength="25" style="height: auto;">
        </fieldset>

        <fieldset class="input-field col s12 expense-input-field" style="border: 1px solid rgba(202, 186, 186) !important;padding: 0px;padding-left: 15px;border-radius: 0px;border:none !important;box-shadow: none !important;">
        <legend><label for="amount" style="color:grey">Amount</label></legend>
        <input type="text" name="amount"  class="validate" required="" disabled value="${expense.amount}" maxlength="25" style="height: auto;">
        </fieldset>
    
        <fieldset class="input-field col s12 expense-input-field" style="border: 1px solid rgba(202, 186, 186) !important;padding: 0px;padding-left: 15px;border-radius: 0px;border:none !important;box-shadow: none !important;">
        <legend><label for="attachment" style="color:grey">Attachment</label></legend>
        <img  title="${expense.expense_name}" href="${imgUrl}" class="${attachmentUrl.length > 0 ? 'gallery1' : ''}" src="${imgUrl}"  style="height:25px; width:auto;margin-left:45%;border:2px dashed dodgerblue">
        </fieldset>

        <div style="overflow-x:scroll;display:flex;flex-direction:row">
        ${comments}
        </div>
    
        <fieldset class="input-field col s12 expense-text-area" style="border: 1px solid rgba(202, 186, 186) !important;padding: 0px;padding-left: 15px;border-radius: 0px;border:none !important">
        <legend><label for="comment" style="color:grey">Enter Comments</label></legend>
        <textarea class="materialize-textarea" autocomplete="off" name="comment" placeholder="Write any Comments..." class="validate"  maxlength="50" required  style="border-bottom:6px solid rgb(9, 84, 132) !important;overflow-y:scroll;height:15vh;"></textarea>
        </fieldset>
        `;
        let miniCard = `<div class="multi_simpleCardMiniBody2" style="width:100%; border-radius: 20px !important;">
                                    ${fields}
                            </div>`;
        let card = `<div class="multi_simple_carousel_cards2 in-left">
                            <div class="multi_simpleCardMainBody2" style="overflow: hidden !important;height:auto !important;">
                            ${miniCard}
                            </div>
                        </div>`;
        let form = `
        <form method="POST" autocomplete="off"  name="approve_form" value="${expense.id}" id="approval${expense.id}" action="" style="width:100%">
        ${card}
        <div style="display:flex;flex-direction:row;justify-content: space-evenly;">
        <button id="approve${expense.id}" name="approve" class="formSubmitBtns waves-effect waves-light btn-small" style="border-radius: 20px" value="approve" type="submit">Approve</button>
        <button id="reject${expense.id}" name="reject" class="formSubmitBtns waves-effect waves-light btn-small" style="border-radius: 20px" value="reject" type="submit">Reject</button>
        <button id="cancel${expense.id}" name="cancel" class="formSubmitBtns waves-effect waves-light btn-small" style="border-radius: 20px" value="cancel" type="submit">Cancel</button>
        </div>
        </form>`;
        forms = forms + form;
    }
    // background: linear-gradient(45deg, rgb(47 61 138), #e6cfcf96);background-color: rgb(44, 60, 146);
    // style="border: solid 2px #cababad1;margin: 5px;margin-bottom: 2px;margin-top:0px"



    const approveForm = `
                <div id="paginated_cards">
                        <div style="top: 30px;background: linear-gradient(45deg, #344392, #dedbdb00);background-color: #2c3c92;color:white;border-radius: 20px;padding-top: 5px;padding-left: 10px;padding-right: 10px;text-align: right;z-index: 2;position: relative;margin-left: 59%;margin-right:10px">Approvals <span id="approvalCounts">${approveExpenseFormMemory.length}</span></div>
                        <div class="multi_simple_carousel_wrapper2 cards" style="display:flex;flex-direction:row;overflow-x:scroll">
                        ${forms}
                        </div>
                </div>`;

    $(approveForm).appendTo(".chats").show();

    // adding preview for the img tags
    if ($('.gallery1').length > 0) {
        $('.gallery1').EZView();
    }

    // on click of approve button remove required comment box
    $('button[name=approve]').on('click', (e) => {
        $('textarea[name=comment]').removeAttr('required');
    });
    $('button[name=cancel]').on('click', (e) => {
        $('textarea[name=comment]').attr('required', 'false');
    });
    $('button[name=reject]').on('click', (e) => {
        $('textarea[name=comment]').attr('required', 'false');
    });
    $('form').on('submit', (e) => {
        console.log("Submitted");
        e.preventDefault();
        // Disabling the multi clicks
        // $('#saveExpense').prop('disabled', true);
        console.log(e);
        // const btnId = e.originalEvent.submitter.id;
        const clickedBtn = $('button[type=submit]:focus');
        const btnId = clickedBtn.attr('id');
        console.log($('button[type=submit]:focus'));
        // const button_name = e.originalEvent.submitter.innerText.toLowerCase();
        const button_name = clickedBtn.attr('value').toLowerCase();
        console.log("BUTTONNAME: " + button_name);
        const id = btnId.split(button_name)[1];
        console.log('id: ' + id);
        const FORM_SELECTOR = `form#approval${id}`;
        const serialisedData = $(FORM_SELECTOR).serializeArray();
        formApproveSubmit(serialisedData, id, button_name);



        // $('#saveExpense').prop('disabled', false);

    });

    scrollToBottomOfResults();
}

function formApproveSubmit(serialiseddata, id, selOption) {
    // console.log(serialiseddata);
    const FORM_SELECTOR = `form#approval${id}`;
    let approveExpenseData = {};
    for (let i = 0; i < serialiseddata.length; i++) {
        let ele = serialiseddata[i];
        console.log(ele);
        if (typeof ele.value === "undefined") {
            M.toast({ html: 'Please fill out the details properly' });
            return;
        }
        let singleSpacedText = ele.value.replace(/ +/g, " ").trim();
        if (singleSpacedText.length < 1) {
            if (ele.name == 'comment') {
                continue;
            }
            M.toast({ html: 'Please fill out the details properly' });
            return;
        }

        approveExpenseData[ele.name] = singleSpacedText;
    }

    approveExpenseData.id = id;
    // approval status: approve , reject, cancel
    approveExpenseData.approval = selOption.toLowerCase().trim();
    // timestamp in ms
    approveExpenseData.timestamp = new Date().getTime();

    console.log(approveExpenseData);
    const CREATE_EXPENSE_INTENT = "/main.expense.approve_expense.approval";
    // send(CREATE_EXPENSE_INTENT, approveExpenseData);
    send('/main.expense.approve_expense.save', approveExpenseData, silent = true);
    console.log("Counts " + $('#approvalCounts').html());
    let counts = parseInt($('#approvalCounts').html()) - 1;
    console.log(counts);
    $('#approvalCounts').html(counts + "");
    // $('#approvalCounts').show();
    console.log("Submitted");

    // if(selOption === "approve"){
    //     let style = `font-size: 6em;
    // position: relative;
    // pointer-events: auto;
    // background: #51A351;
    // overflow: hidden;
    // margin: 0 0 6px;
    // padding: 15px 15px 15px 50px;
    // color: #FFF;
    // opacity: .8;
    //     `;
    //     let toastContent = `
    //     <span class="material-icons" style="${style}">
    //     check_circle_outline
    //     <span><button class="btn-flat toast-action"><i class="material-icons">visibility_off</i></button></span>
    //     </span>`;
    //     M.toast({
    //         html:toastContent
    //     },3600);
    // }
    // else if(selOption === "reject"){

    //     toastContent = `<h1>Rejected</h1><span><button class="btn-flat toast-action"><i class="material-icons">visibility_off</i></button></span>`;
    //     M.toast({
    //         html:toastContent
    //     },1300);
    // }
    // else{
    //     toastContent = `<h1>Cancelled</h1><span><button class="btn-flat toast-action"><i class="material-icons">visibility_off</i></button></span>`;
    //     M.toast({
    //         html:toastContent
    //     },1300);
    // }

    // Remove the card now
    $(FORM_SELECTOR).fadeOut(300, function () {
        $(this).remove();
        let len = $(".multi_simple_carousel_wrapper2").children().length;
        if (len === 0) {
            $(".multi_simple_carousel_wrapper2").remove();
        }
    });
    // 2.sendData
    // 3. response of the success
    // 4. Respond for the error
}

// ========================================loginForm===============================================


function login() {
    let email = $("input[name='email']").val().trim();
    let password = $("input[name='password']").val().trim();
    if (email.length < 1 || password.length < 1) {
        return;
    }
    // Disable click button untill action completes.To avoid multiple clicks
    $('#login').prop('disabled', true);

    $.ajax({
        url: "/user/login",
        type: "POST",
        contentType: "application/json",
        "headers": {
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        data: JSON.stringify({ email: email, password: password }),
        success: function (response, status) {
            console.log("Response from server: ", response, "\nStatus: ", status);
            // remove loginform html from chats
            $(".chats").fadeOut("normal", function () {
                $(".chats").html("");
                $(".chats").fadeIn();
                // make login as logout
                const logoutINNERHTML = "<i style=\"color: red\" class=\"fa fa-power-off\" aria-hidden=\"true\"></i> Logout";
                const loginINNERHTML = "<i style=\"color: red\" class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Login";
                document.querySelector('#logout > span:nth-child(1) > a:nth-child(1)').innerHTML = logoutINNERHTML;
            });
            send("/greetings.welcome");

        },
        error: function (xhr, textStatus, errorThrown) {
            // display error in ui
            // if there is no response from Chatbot server
            $('#login-error').html("Invalid email or password");
            $('.warning-message').show();
            $('#login').prop('disabled', false);
            console.log("Error from bot end: ", textStatus);
        }
    });


}

function loginForm() {


    setTimeout(() => {
        const html = `
        <div class="container mainform">
        <div class="row">
            <div class="col m12 center-align m2">
                <p  style="font-size:1.3em;font-family:Georgia,serif">Hi <span class="wave">👋</span>! Please fill out the login form below to start chatting with the MBOT.</p>
            </div>
        </div>
        <div class="row ">
            <div class="warning-message"  style="display:none"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i><span id="login-error" style="padding-left:13%"></span>
            </div>
            <div class="col m12 input-field sform">
                    <input  type="email" class="validate" style="border:none;border-bottom:none;outline:none"  name="email" placeholder="Email">
            </div>
            <div class="input-field col m12 sform">
                    <input type="password" class="validate" style="border:none;border-bottom:none;outline:none" name="password" placeholder="Password">
            </div>
        </div>
        <div class="row">
            <div class="col m12 input-field login-btn">
                <input class="bform" id="login" type="submit" value="Start Chat" onclick="login()">
            </div>
        </div>
        </div>
        </div>`;
        $(".chats").fadeOut("normal", function () {
            $(".chats").html(html);
            $(".chats").fadeIn();
        });
    }, 1000);

    // make logout as login 
    const logoutINNERHTML = "<i style=\"color: red\" class=\"fa fa-power-off\" aria-hidden=\"true\"></i> Logout";
    const loginINNERHTML = "<i style=\"color: red\" class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Login";
    document.querySelector('#logout > span:nth-child(1) > a:nth-child(1)').innerHTML = loginINNERHTML;

}