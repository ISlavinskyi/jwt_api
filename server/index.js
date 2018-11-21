const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    {port} = require('./config/config'),
    routes = require('./routes/routes')();

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use('/api', routes);

app.listen(port, () => console.log(`Listen on ${port}`));