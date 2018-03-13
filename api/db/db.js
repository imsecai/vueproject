var mysql = require('mysql');


var db = mysql.createPool({
    //限制链接数10
    connectionLimit: 10,
    //访问ip
    host: "localhost",
    //权限是管理员
    user: 'root',
    //密码
    password: '',
    //数据库名称
    database: 'wozaijia',
    //是否允许在一个query中传递多个查询语句
    multipleStatements: true
});

module.exports = {
    //查
    select: function (_sql, _callback) {
        db.query(_sql, function (error, results, fields) {
            if (error) {
                _callback({ status: false, error: error })
            } else {
                _callback({ status: true, data: { results, fields } });
            }

        })
    },
    //增
    insert: function (_sql, _callback) {
        db.query(_sql, function (error, results, fields) {
            if (error) {
                _callback({ status: false, error: error })
            } else {
                _callback({ status: true, data: { results, fields } });
            }

        })
    },
    //删
    delete: function (_sql, _callback) {
        db.query(_sql, function (error, results, fields) {
            if (error) {
                _callback({ status: false, error: error })
            } else {
                _callback({ status: true, data: { results, fields } });
            }

        })
    },
    //改
    update: function (_sql, _callback) {
        db.query(_sql, function (error, results, fields) {
            if (error) {
                _callback({ status: false, error: error })
            } else {
                _callback({ status: true, data: { results, fields } });
            }

        })
    },
}
