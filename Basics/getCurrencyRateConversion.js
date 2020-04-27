var http = require('http');


module.exports = {
    latest: function (str) {
        return new Promise(function (resolve, reject) {
            if (str) {
                apiRequest(str, resolve, reject);
            }
        });
    },
    base: function(base){
        var str = "latest?base="+base;

        return new Promise(function(resolve,reject){
            if(base){
                apiRequest(str,resolve,reject);
            }
        })
    },
    historical: function(date){

        return new Promise(function(resolve,reject){
            if(date){
                apiRequest(date,resolve,reject);
            }
        })
    },
    specificRate: function(curr1,curr2){
        var currency = "latest?symbols="+curr1+","+curr2;

        return new Promise(function(resolve,reject){
            if(currency){
                apiRequest(currency,resolve,reject);
            }
        })
    }

}




function apiRequest(str, resolve, reject) {
    var url = {
        host: "api.fixer.io",
        path: "/" + str,
        headers: {
            'Content-Type': 'application/json'
        }
    }


    http.get(url, function (response) {
        var body = [];
        response.on('data', function (chunk) {
            console.log("chunk " + chunk);
            body.push(chunk);
        });
        response.on('error', function (err) {
            if (err) {
                console.log(err);
            }
        });
        response.on('end', function () {
            if (response.statusCode === 200) {
                var result = Buffer.concat(body).toString();
                var newResult = JSON.parse(result);
                resolve(newResult);
            }
            else {
                reject("Promise Rejection. An error occured, please fix the error.")
            }
        });
    });
}
