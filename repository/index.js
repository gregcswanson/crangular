/* 
    Use MONGODB as the repository for all data
    This module is only concerned with CRUD operations and not with any validations
*/

var Db = require('mongodb').Db
 , Server = require('mongodb').Server
 , ObjectID = require('mongodb').ObjectID
 , nconf = require('nconf');
 
 console.log(nconf.get('MONGO_DB_SERVER'));

var server = new Server(nconf.get('MONGO_DB_SERVER').toString(), nconf.get('MONGO_DB_PORT').toString(), { auto_reconnect: true });
var db = new Db(nconf.get('MONGO_DB_DATABASE').toString(),server, {safe:false});

db.open(function(err) {
    if(nconf.get('MONGO_DB_USERNAME').toString() !== "")
    {
        db.authenticate(
            nconf.get('MONGO_DB_USERNAME').toString(), 
            nconf.get('MONGO_DB_PASSWORD').toString(), 
            function(err) {
                if (err) {
                    console.log(err);
                }else{
                    console.log('connected to mongoDB (' + nconf.get('MONGO_DB_SERVER').toString() + ', ' + nconf.get('MONGO_DB_DATABASE').toString() + ')');
                }
            }
        );
    }
});

exports.VentsFindAll = function(callback) {
    db.collection('vents', function(err, collection) {
        collection.find({}).sort([['created', 'desc']]).toArray(function(err, items) {
            if(err) return callback(err, null);
            callback(null, items);
        });
    });
};

exports.VentsAdd = function(item, callback) {
    db.collection('vents', function(err, collection) {
        collection.insert(item, {safe:true}, function(err, result) {
            if(err) return callback(err, null);
            callback(null, result);
        });
    });
};

exports.ProfileFindByID = function(id, callback) {
	db.collection('profiles', function(err, collection) {
        collection.find({_id: new ObjectID(id)},{limit: 1}).toArray(function(err, docs){ 
            if(err) return callback(err, null);
            if (docs.length > 0) {
                callback(null, docs[0]);
            } else {
                callback(null, {});
            }
        });
    });
};

exports.ProfileFindAll = function(callback) {
    db.collection('profiles', function(err, collection) {
        //collection.find({}).sort([['created', 'desc']]).toArray(function(err, docs) {
        collection.find({}).toArray(function(err, items) {
            if(err) return callback(err, null);
            callback(null, items);
        });
    });
};

exports.ProfileAdd = function(item, callback) {
    db.collection('profiles', function(err, collection) {
        collection.insert(item, {safe:true}, function(err, result) {
            if(err) return callback(err, null);
			callback(null, result);
        });
    });
};

exports.ProfileUpdate = function(blog, callback) {
    db.collection('profiles', function(err, collection) {
        collection.findAndModify({_id: new ObjectID(blog._id)}, {}, {$set: {comment: blog.comment}}, {} , function(err, item) {
            if(err) return callback(err, null);
            callback(null, item);
        });
    });
};

exports.ProfileDelete = function(id, callback) {
    db.collection('profiles', function(err, collection) {
        collection.findAndModify({_id: new ObjectID(id)}, {}, {}, { remove: true } , function(err, item) {
            if(err) return callback(err, null);
            console.log(item);
            callback(null, item);
        });
    });
};