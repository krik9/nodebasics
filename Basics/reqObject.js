const express = require('express');

const app = express();

//if we want to get req.body, you need to have this
app.use(express.json());

app.get('/', (req, res) => {

    console.log(req);

    //console.log(req.method); //=> it prints "GET" in log
    //console.log(req.params.name); //from url (http://localhost:3000/node)=> it prints "node" in log
    //console.log(req.query); //from url (http://localhost:3000?name=node)=> it prints "{name: node}" in log

    res.status(200).json({
        message: "All about request object"
    });
});

//you need to specify app.use(express.json() for this to work)
app.post('/', (req, res) => {
    console.log(req.body);
});

app.listen(3000, () => {
    console.log('server started');
});