var express = require('express');

var app = express.createServer(express.logger());

var fs = require("fs");

var fileName = "index.html";

var content = fs.readFileSync(fileName, "utf8");

app.configure(function () {
    app.use(
        "/static", //the URL throught which you want to access to you static content
        express.static(__dirname + "/static/") //where your static content is located in your filesystem
    );
});

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
