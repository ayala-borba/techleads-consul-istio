var express = require("express")
var app = express()
var consul = require("consul")()

app.get("/", function(req, res) {
  res.send("Hello from version one world!")
})

app.get("/configuration", function(req, res) {
  consul.kv.get("teste", function(err, result) {
    if (err) throw err;
    if (result === undefined) throw new Error('key not found');
    res.send(result.Value)
  })
})

consul.kv.get("portNodes", function(err, result) {
  if (err) {
    console.log("erro", err)
  }
  if (result === undefined) {
    console.log("Result is undefined", result)
  }
  const port = result ? JSON.parse(result.Value).port : 3000
  app.listen(port, function(){
    console.log(`Listen on ${port} Port!`)
  })
})


