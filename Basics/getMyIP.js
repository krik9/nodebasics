var http = require('http');

var server = http.createServer(function(req,res){

    http.get({
        host:'ip.jsontest.com',
        headers:{
            'content-type':'application/json'
        }
    }, function(response){
        var body = [];
        response.on('data',function(chunk){
            console.log("chunk " + chunk);
            body.push(chunk);
        });
        response.on('error',function(err){
            if(err){
                console.log(err);
            }
        });
        response.on('end',function(){
            var body1 = Buffer.concat(body).toString();
            res.write(body1);
            res.end();
        });
    });
});

server.listen(3000,function(){
    console.log('Running on Port 3000');
});