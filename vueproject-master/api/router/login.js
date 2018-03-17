var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var db = require('../db/DBHelper');

var jwt = require('jsonwebtoken');

module.exports = {
    userPost:function(app,db){
        //登录
        app.post('/Login',function(req,res){
            //登录验证
            var name = req.body.username;
            var password = req.body.pwd*1;
            console.log(name,password);
            db.select(`select * from manager where username = "${name}" and password = ${password} `,
                function(result){
                    console.log(result)
                    var status = result.status;
                    if(status){
                       // res.send({status:'true',lg:result.data.results[0]});
                        res.send({status:true,lg:result.data.results[0]});
                    }else{
                        res.send({status:false,message:"登录信息错误"});
                    }
            });
        });
    }
}