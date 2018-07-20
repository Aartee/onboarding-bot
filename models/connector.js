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
