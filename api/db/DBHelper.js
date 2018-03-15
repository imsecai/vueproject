var mysql = require('mysql');

var db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",//ip地址
    user: 'root',
    password: '',
    database: '11team'//数据库名字
})


module.exports = {
    select: function(_sql, _callback){
        db.query(_sql, function(error, results,fields){
           console.log(results);
            if(error || results.length == 0){
                _callback({status: false, error: error})
            }else if(results.length > 0){
               _callback({status: true, data: {results}});
            }
           
            
        })
    },
    insert: function(_sql,_sql1,_callback){
        db.query(_sql,_sql1, function(error, results,fields){
            console.log(error,results);
            if(error){
                _callback({status: false, error: error})
            }else{
                _callback(results.insertId);
            }
        })
    },
    delete: function(_sql, _callback){
        db.query(_sql, function(error, results,fields){
            console.log(results);
            if(error || results.length == 0){
                _callback({status: false, error: error})
            }else if(results.length > 0){
                _callback({status: true, data: {results}});
            }
        })
    },
    update: function(_sql, _callback){
        db.query(_sql, function(error, results,fields){
            console.log(results);
            if(error || results.length == 0){
                _callback({status: false, error: error})
            }else if(results.length > 0){
                _callback({status: true, data: {results}});
            }
        })
    }
}