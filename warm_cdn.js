getURLs = event;
 
var http = require('http');
 
getURLs.forEach(function (element) {
    http.get(element, function(res) {
      console.log("http get... " + element);
      console.log("Got response: " + res.statusCode );
      res.on('data', function(chunk) {
        //console.log('BODY: '  + chunk);
      });
     }).on('error', function(e) {
      console.log("Got error: " + e.message);
  });
});
