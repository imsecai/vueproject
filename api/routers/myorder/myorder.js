var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var db = require('../../db/DBHelper');

var jwt = require('jsonwebtoken');

module.exports = {
    myorderListPost:function(app,db){
        // app.post('/myorderList',function(req,res){

        //     var name1 = JSON.stringify(req.body.user_id);
            
        //     db.select(`select * from orders as a, product as b,user as c where a.user_id = ${name1} and a.pID = b.pID and a.user_id = c.user_id`,
        //         function(result){
        //             res.send(result)
        //     })
        // })
        app.post('/myorderList',function(req,res){
            let sql = `select * from buylist`;
            db.select(sql,function(result){
                var status = result.status;
                if (status) {
                    res.send({ status: 'ok', getBuyList: result.data.results });
                } else {
                    res.send({ status: 'err' });
                }
            })
        })
    }
}