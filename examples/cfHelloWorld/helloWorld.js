var http = require('http');

const PORT = process.env.PORT || 9999;

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end(`Welcome to K5 Live - this application is running on PORT: ${PORT}`);
});

server.listen(PORT);