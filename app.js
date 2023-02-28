const http = require('http');
const myDateTime = require('dateTime.js');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'}(myDateTime.myDateTime()));
    res.end();
    return res();
}).listen(8080);


console.log(myDateTime.myDateTime());
