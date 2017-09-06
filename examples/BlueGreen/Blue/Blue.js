var http = require('http');

const PORT = process.env.PORT || 9999;

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end(`<h1 style="color:blue;">This is the Blue Application</h1> running on PORT: ${PORT}`);
});

server.listen(PORT);