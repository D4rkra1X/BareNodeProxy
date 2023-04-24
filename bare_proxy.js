var http = require('http'),
    httpProxy = require('./lib/node-http-proxy');

//
// Create a new instance of HttProxy to use in your server
//
var proxy = new httpProxy.RoutingProxy();


http.createServer(function (req, res) {
  //
  // Put your custom server logic here, then proxy
  //
  proxy.proxyRequest(req, res, {
    host: 'localhost',
    port: 4000
  });
}).listen(8001);
