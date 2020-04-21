const http = require('http');

const data = [
    {
        id: 1,
        name: "john"

    },
    {
        id: 2,
        name: "Chris"

    },
    {
        id: 3,
        name: "Mark"

    }
]


const server = http.createServer((req, res) => {
    //Setting different Headers
    res.setHeader('content-Type','application/json');
    res.setHeader('content-language','en-US');
    res.setHeader('Date',new Date(Date.now()));
    res.setHeader('X-Powered-By','Node.js');

    res.end(JSON.stringify({
        success:true,
        result:data.length, 
        data:data,
        message: "Data is Sent"

    })
    );
});


server.listen(3000, () => {
    console.log('server started');
});
