module.exports.buildResponse = ({
  text,
  image,
  buttons,
  quickReplies,
  cards,
  chartCards,
  multiSimpleCards,
  groupedSimpleCards,
  groupedSimpleCards2,
  scrollableChart,
  custom,
}, userObj) => {
  /**
   * @param {string} [text] - text message
   * @param {URL} [image] - url of the image
   * @param {Array} [buttons] - [{"payload":"<payload>","title":"<title>"}...]
   * @param {Array} [quickReplies] - [{"payload":"<payload>","title":"<title>"}...]
   * @param {JSON} [custom] - ANy
   * returns [response]
   */
  const response = {};
  if (text) {
    response.text = text;
  }
  if (image) {
    response.image = image;
  }
  if (buttons) {
    for(let i=0; i<buttons.length;i++){
      if(!this.isPrivilageGranted(userObj.privilages, buttons[i].payload.toLowerCase().trim().split('/')[1])){
        buttons.splice(i, i+1);

      }
    }
    response.buttons = buttons;
  }
  if (quickReplies) {
    for(let i=0; i<quickReplies.length;i++){
      if(!this.isPrivilageGranted(userObj.privilages, quickReplies[i].payload.toLowerCase().trim().split('/')[1])){
        quickReplies.splice(i, i+1);
      }
    }
    response.custom = {
      payload: "quickReplies",
      data: quickReplies,
    };
  }
  if (cards) {
    response.custom = {
      payload: "simpleCardsCarousel",
      data: cards,
    };
  }
  if (chartCards) {
    response.custom = {
      payload: "graphCardsCarousel",
      outlets: chartCards,
    };
  }
  if (multiSimpleCards) {
    response.custom = {
      payload: "multiSimpleCardsCarousel",
      data: multiSimpleCards.cards,
      minicardlimit: multiSimpleCards.minicardlimit
    };
  }
  if (groupedSimpleCards) {
    response.custom = {
      payload: "groupedSimpleCardsCarousel",
      cards: groupedSimpleCards.cards,
      minicardlimit: groupedSimpleCards.minicardlimit
    };
  }
  if (groupedSimpleCards2) {
    response.custom = {
      payload: "groupedSimpleCardsCarousel2",
      cards: groupedSimpleCards2.cards,
      minicardrowlimit: groupedSimpleCards2.minicardrowlimit,
      minicardlimit: groupedSimpleCards2.minicardlimit
    };
  }
  if (scrollableChart) {
    response.custom = {
      payload: "chartscroll",
      data: scrollableChart,
    };
  }
  if (custom) {
    response.custom = custom;
  }

  // if nothing passed
  console.log(response);
  if (Object.keys(response).length < 1) {
    console.warn("Please pass valid defined properties!!.");
    return [];
  }
  return [response];
};



module.exports.isPrivilageGranted = (privilages, intent) => {
  let ind = privilages.indexOf(intent);
  if(ind === -1){
    return false;
  }
  else {
    return true;
  }
};
