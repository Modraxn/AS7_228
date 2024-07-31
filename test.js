const express = require('express')
 const app = express()
 let url = require('url');

 app.get('/hello', function(req, res){
    var q = url.parse(req.url, true).query;
    var text =   q.name   + "  <br/> " + " Login Date :  " + q.year + " " + q.month +" " ;
    res.send(text)
 })
 app.listen(9999,function(){
    console.log("Server is running on PORT 9999")
    })