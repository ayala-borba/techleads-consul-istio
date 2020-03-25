var express = require("express")
var app = express()
var request = require("request")
var hpropagate = require("hpropagate")

hpropagate({
  headersToPropagate: [
    'x-debug'
  ]
})

app.get('/', function (req, res) {
  request('http://127.0.0.1:1234', function(error, response){
    if (!error && response.statusCode == 200) {
      console.log(response.body)
      res.send(response.body)
    } else {
      res.send("cannot fetch API")
    }
  })
})

app.listen(3002, function(){
  console.log("service listening on port 3002!")
})