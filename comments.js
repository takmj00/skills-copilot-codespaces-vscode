// Create web server
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create comments.json file
var comments = require('./comments.json');

// Get all comments
app.get('/comments', function (req, res) {
   console.log("GET /comments");
   res.end(JSON.stringify(comments));
})

// Get comment by id
app.get('/comments/:id', function (req, res) {
   console.log("GET /comments/:id");
   var id = req.params.id;
   var comment = comments[id];
   res.end(JSON.stringify(comment));
})

// Add new comment
app.post('/comments', function (req, res) {
   console.log("POST /comments");
   var comment = req.body;
   comments[comment.id] = comment;
   res.end(JSON.stringify(comments));
})

// Update comment
app.put('/comments/:id', function (req, res) {
   console.log("PUT /comments/:id");
   var id = req.params.id;
   var comment = req.body;
   comments[id] = comment;
   res.end(JSON.stringify(comments));
})

// Delete comment
app.delete('/comments/:id', function (req, res) {
   console.log("DELETE /comments/:id");
   var id = req.params.id;
   delete comments[id];
   res.end(JSON.stringify(comments));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})