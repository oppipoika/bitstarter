var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");

var fileName = "index.html";

var content = fs.readFileSync(fileName, "utf8");

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
