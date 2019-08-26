// lesson 4 19.50
const http = require('http');

//http.createServer().listen(3161);

http.createServer(function(req,res){
     
    res.end('Hello my first on Node');
}).listen(3161);
