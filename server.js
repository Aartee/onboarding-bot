var express = require('express')
const bodyParser = require('body-parser');
var app = express()

var mongo = require("./utils/connector");
var controller = require("./routes/controller");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var mongodb = require('mongodb');

const url = require('./config/database.config.js');



app.post('/payroll', controller.getPayroll(req, res));

let port = 8000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});