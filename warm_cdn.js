var http = require('http');

exports.getURLs = function (event, element) {
    http.get(element, function(res) {
      console.log("http get... " + element);
      console.log("Got response: " + res.statusCode );
      res.on('data', function(chunk) {
        //console.log('BODY: '  + chunk);
      });
     }).on('error', function(e) {
      console.log("Got error: " + e.message);
  });
  element.succeed("Completed warm of URLs.");
}
