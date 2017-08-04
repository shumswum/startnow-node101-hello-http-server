// save http to variable
var http = require("http");

// Create a server
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World");
    console.log(req.url);
    console.log
}).listen(8080, "127.0.0.1");

console.log("Server running at http://localhost:8080/");