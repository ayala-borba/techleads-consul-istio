var express = require("express")
var app = express()
var fs = require("fs")

app.get("/", function(req, res) {
  res.send("Hello from kubernetes")
})

app.get("/configmap", function(req, res) {
  try {
    const file = fs.readFileSync("/configmap/data.json")
    res.send(file.toString())
  } catch (error) {
    console.log(error)
    res.send("no such file")
  }
})

app.get("/init", function(req, res) {
  try {
    const file = fs.readFileSync("/data/config.json")
    res.send(file.toString())
  } catch (error) {
    console.log(error)
    res.send("no such file")
  }
})

app.listen(3000, function(){
  console.log("Listen on 3000 Port!")
})

