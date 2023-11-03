var http = require('http');
http.createServer(function (req, res) {
    if (req.url === '/') {
    res.end('Hello, this is the homepage of the simple Node.js API!');
  } else if (req.url === '/about') {
    res.end('This is the about page');
  } else {
    res.end('Page not found');
  }
    //console.log(`Just got a request at ${req.url}!`)
    //res.write('Yo!');
    //res.end();
}).listen(process.env.PORT || 3000);

