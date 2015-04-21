var http = require('http');

exports.handler = function(event, context) {
  for (var key in event ) {
        console.log('start request to ' + event[key]);
        http.get(event[key], function(res) {
          console.log("Got response: " + res.statusCode);
        }).on('error', function(e) {
          console.log("Got error: " + e.message);
        });

        console.log('end request to ' + event[key]);
   }
   context.done();
};
