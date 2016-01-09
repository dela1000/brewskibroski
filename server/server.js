var mysql = require('mysql');
var express = require('express');

//Middleware
var parser = require('body-parser');
var router = require('./routes.js');

// db connection
var connection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

connection.connect();

var db = connection;

// Router
var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 8000);

// Logging and parsing
app.use(parser.json());

// Set up our routes
app.use("/", router);

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}
