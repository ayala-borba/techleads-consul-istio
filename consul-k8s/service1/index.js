var express = require('express');
var app = express();
var request = require('request');
const hpropagate = require('hpropagate');
 
// then start it
hpropagate({
  headersToPropagate: [
    'x-debug'
]
});

app.get('/', function (req, res) {
  request('http://127.0.0.1:1234', function (error, response) {
    if (!error && response.statusCode == 200) {
      console.log(response.body) // Print the google web page.
      res.send(response.body);
    } else {
      res.send("cannot fetch API")
    }
  })
});

app.listen(3000, function () {
  console.log('Service 1 listening on port 3000!');
});
