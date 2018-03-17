var mysql = require('mysql');

var db = mysql.createPool({
    connectionLimit: 10,
    host: "10.3.136.41",//ip地址
    user: 'root',
    password: '',
    database: 'zaijia'//数据库名字
})


module.exports = {
    select: function(_sql, _callback){
        db.query(_sql, function(error, results,fields){
           //console.log(results);
            if(error || results.length == 0){
                _callback({status: false, error: error})
            }else if(results.length > 0){
               _callback({status: true, data: {results}});
            }
           
            
        })
    },//插入
    insert: function(_sql,_callback){
        db.query(_sql, function(error, results,fields){

            console.log("aaaa:"+error,results);

            if(error!="null"){
                _callback({status: false, error: error})
            }else{
               // _callback(results.insertId);
                _callback({status: true, data: {results}});
            }
        })
    },
    delete: function(_sql, _callback){
        db.query(_sql, function(error, results,fields){
            if(error){
                _callback({status: false, error: error})
            }else{
                _callback({status: true, data: {results}});
            }
        })
    },
    update: function(_sql, _callback){
        db.query(_sql, function(error, results,fields){
            console.log(results);
            if(error){
                _callback({status: false, error: error})
            }else{
                _callback({status: true, data: {results}});
            }
        })
    }
}