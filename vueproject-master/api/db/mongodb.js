/*const mongo = require('mongodb');
const client = mongo.MongoClient;
const ObjectID = mongo.ObjectID;
let db;

client.connect('mongodb://127.0.0.1:27017/test1708candel', (_error, _db) => {
    if(_error){
        console.error(_error);
        return false;
    }
    db = _db;
    //console.log(db);
})

module.exports = {//查
    select: (_collection, _condition) => {
        if(db){
            return new Promise((resolve, reject) => {
                db.db("test1708candel").collection(_collection).find(_condition || {}).toArray((_error, _data) => {
                    if(_error){
                        reject(_error)
                    } else {
                        resolve(_data);
                    }
                })
            })
            
        }
    },//改
    update: (_collection, _condition, oid) => {
            console.log(_collection,_condition,oid);
            return new Promise((resolve, reject)=>{
                db.db("test1708candel").collection(_collection).update({_id:oid},_condition).then((result,error)=>{
                    resolve(result);
                })
            })
    },//增
    insert: (_collection, _data) => {
            return new Promise((resolve, reject) => {
                db.db("test1708candel").collection(_collection).insert(_data).then((result,error) => {
                    resolve(result);
                })
            })
    },//删
    delete: (_collection, _condition) => {
            return new Promise((resolve, reject) => {
                db.db("test1708candel").collection(_collection).remove(_condition).then((result, error) => {
                    resolve(result);
                })
            })
    },
    objectid: (_id) => {
        return _id ? new ObjectID(_id) : new ObjectID();
    }
}   */