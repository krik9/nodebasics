var express = require('express');

var ejs = require('ejs');

var api = require('./getCurrencyRateConversion');

var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    api.latest('latest').then(function(result){
        res.render('index',{newResult:JSON.stringify(result)}); 
    }).catch(function(e){
        console.log(e)
    })
})


app.listen(3000, () => {
    console.log('server started');
});