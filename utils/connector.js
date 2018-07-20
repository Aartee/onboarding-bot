var mongoclient = require('mongodb').MongoClient;
var db;
var connected = false;

exports.collection = function(name){
    if (!connected) {
        throw new Error('Must connect to Mongo before calling "collection"');
    }
    return db.collection(name);
};

exports.connect = function(url, callback){
    mongoclient.connect(url, function(err, _db){
        if (err) {
            throw new Error('Could not connect: '+err);
        } else {
            db = _db;
            connected = true;
            // console.log(connected +" is connected?");
            callback(db);
        }
    });
};
