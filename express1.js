let http = require('http');
let url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var q = url.parse(req.url, true).query;
    var text = q.year + " " + q.month;
    res.end(text);
}).listen(9999);