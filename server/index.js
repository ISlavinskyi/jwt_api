const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    {port} = require('./config/config'),
    routes = require('./routes/routes')();

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', routes);

app.listen(port, () => console.log(`Listen on ${port}`));