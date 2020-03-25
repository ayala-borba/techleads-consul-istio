var express = require("express")
var app = express()

// app.get("/", function(req, res) {
//   res.send("Hello from version one world!")
// })

app.get("/", function(req, res) {
  res.send("Hello from version two world!")
})

// app.listen(3000, function(){
//   console.log("Listen on 3000 Port!")
// })

app.listen(3001, function(){
  console.log("Listen on 3001 Port!")
})

