var AIConnectorService =  (require('../chatbotAI/AIConnectorService'));

module.exports = {
    sendRequest: function(reqData, callback) {
    // var reqdata = {
    //   text: reqData.text,
    //   sessionId:  reqData.sessionId,
    //   AI: reqData.ai,
    //   accessToken : reqData.accessToken
    // };
    AIConnectorService.sendRequest(reqData, function(output) {
      callback(output);
    });
  }
};
