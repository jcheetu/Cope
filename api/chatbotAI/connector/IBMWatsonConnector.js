var AssistantV1 = require('ibm-watson/assistant/v1');

module.exports  =   {

    sendRequest :  function(reqObj, callback) {
    
        var assistant = new AssistantV1({
            username: reqObj.username,
            password: reqObj.password,
            url: 'https://gateway.watsonplatform.net/assistant/api/',
            version: '2019-02-01'
        }); 
    
          assistant.message(
            {
                  input: { text: reqObj.text },
                  workspace_id: reqObj.accessToken,
                  session_id : reqObj.sessionId,
                  context : reqObj.context
       
            },
            function(err, response) {
              if (err) {
                callback(err);
              } else {
                callback(response);
              }
            }
          );
  }
};

