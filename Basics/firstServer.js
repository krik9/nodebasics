const http = require('http');

var random =  require('./randomCharGenerator');

//Alternative way to generate random chars using node modules
var crypto = require('crypto');


const server = http.createServer((req,res) =>{

    crypto.randomBytes(20,(err,buf) => {
        var randomValue = buf.toString('hex');
        res.end(`First Web server with random chars:  ${random.RandomChar(40)} <br> Crypto chars: ${randomValue}`);

    });

    
});


server.listen(3000,() =>{
    console.log('server started');
});
