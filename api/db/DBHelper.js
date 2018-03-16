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
        //    console.log(results);
            if(error){
                _callback({status: false, error: error})
            }else{
               _callback({status: true, data: {results}});
            }
           
            
        })
    },
    insert: function(_sql,_callback){       
        db.query(_sql, function(error, results,fields){
            if(error){
                _callback({status: false, error: error})
            }else{
                _callback({status:true,buyID:results.insertId});
            }
        })
    },
    delete: function(_sql, _callback){
        db.query(_sql, function (error, results, fields) {
            if(error){
                _callback({ status: false, error: error })
            }else{
                _callback({ status: true, data: { results, fields } });
            }
        })
    },
    update: function(_sql, _callback){
        db.query(_sql, function(error, results,fields){
            if(error){
                _callback({status: false, error: error})
            }else{
                _callback({status: true, data: {results}});
            }
        })
    }
}