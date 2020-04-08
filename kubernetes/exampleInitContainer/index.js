var fs = require("fs")

// this emulate some call to consul, github, some server, etc...
const data = {
  "training-env": process.env.INIT_VARIABLE || "not present"
}

fs.writeFileSync("/data/config.json", JSON.stringify(data), "utf-8")

