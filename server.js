var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end("Seetha started");
})

server.listen('4000',function(){console.log("server.started")});