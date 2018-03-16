var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var db = require('../../db/DBHelper');

var jwt = require('jsonwebtoken');

module.exports = {
    userPost:function(app,db){
        //登录
        app.post('/Login',function(req,res){
            //登录验证
            var name = req.body.username;
            var password = req.body.password;
            db.select(`select * from user where username = "${name}" and password = "${password}" `,
                function(result){
                    
                    var status = result.status;
                    if(status){
                        res.send({status:'ok',lg:result.data.results[0]});
                    }else{
                        res.send({status:'err'});
                    }
            });
        });

        //注册
        app.post('/yzUsername',function(req,res){
            //验证用户手机号码
            var name = req.body.username;
            var password = req.body.password;
            db.select(`select * from user where username = "${name}"`,function(result){
                if(result.status){
                    res.send({state:'ok'});
                }else{
                    res.send({state:'err'});
                }
            });
        });
        app.post('/zcUsername',function(req,res){
            var name = req.body.username;
            var password = req.body.password;
            let sql = `insert into user (username,password) VALUES ('${name}', '${password}')`;
            db.insert(sql,function(result){
                    if(result){
                        res.send({state:'ok'});
                    }else{
                        res.send({state:'err'});
                    }
                }
            );
        });
    }
}