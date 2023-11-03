/***
var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
***/
const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is a simple Node.js API!');
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
