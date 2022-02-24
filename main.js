var http = require("http")

http.createServer((req,res)=>{
    console.log("result")
    res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(1234)