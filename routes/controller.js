
var mongo = require("./utils/connector");


function getPayroll(req, res) {
   let jsonResponse = {};
    mongo.connect(mongoLogin, function (mongoConn) {
        console.log('Connected to mongo at: ' + mongoLogin);
    });
    let req_param = req.body.type ;
    let req_param_value = req.body.category;
    let collection = mongoConn.collection('payroll');
        collection.find({req_param: req_param_value }).toArray(function(err, result) {
                if (err) {
                var msg = "Error Occured";
                jsonResponse = {
                    "statusCode": 500,
                    "result": "Error",
                    "message": msg
                };
                res.send(jsonResponse);
            } else if (result !== null) {
                var msg = "";
                jsonResponse = {
                    "statusCode": 201,
                    "result": "success",
                    "link": result,
                    "message": msg
                };
                res.send(jsonResponse);
            } else {
                var msg = "Error Occured";
                jsonResponse = {
                    "statusCode": 400,
                    "result": "Error",
                    "message": msg
                };
               res.send(jsonResponse);
            }
        });
        mongo.releaseConnection(mongoConn);
    }

    exports.getPayroll = getPayroll;
