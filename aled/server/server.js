const http = require('http');
const methods = require('./method');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': 'http://localhost:8081',
    'Content-Type': 'application/json'});
    
  // handle by method
  if(req.method.toLowerCase() in methods) {
    methods[req.method.toLowerCase()].handler(req, res);  
  } else {    
    console.log(`not supported method: ${req.method}`);
    res.end(JSON.stringify({
      response: false,
      msg: 'error: a method handler not found!'
    }));
  }  
}).listen(8084); //the server object listens on port 8080