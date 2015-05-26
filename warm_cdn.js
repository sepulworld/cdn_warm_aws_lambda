var http = require('http');

exports.handler = function(event, context) {
var responses = [];
var count = 0;

  for (var key in event ) {
        console.log('start request to ' + event[key]);
        http.get(event[key], function(res) {
          console.log("Got response: " + res.statusCode);
          responses.push(res.statusCode);
          count++;
          if (count == Object.keys(event).length) { 
            callback(responses, context);
          }
        }).on('error', function(e) {
          console.log("Got error: " + e.message);
          responses.push(res.statusCode);
          count++;
          if (count == Object.keys(event).length) { 
            callback(responses, context);
          }
        });

        console.log('end request to ' + event[key]);
    
}
  
function callback(responses, context) {
    context.succeed(responses);
    context.done();
  }
};
