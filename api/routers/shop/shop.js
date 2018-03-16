var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var db = require('../../db/DBHelper');

var jwt = require('jsonwebtoken');

module.exports = {
    addressPost: function (app, db) {
        app.post('/addAdd', function (req, res) {
            
            let nickname = req.body.nickname;
            let phone = req.body.phone;
            let pro = req.body.pro;
            let city = req.body.city;
            let county = req.body.county;
            let detadd = req.body.detadd;
            let sql = `insert into addresslist(Nickname,Phone,Pro,City,County,Detadd)
            values('${nickname}','${phone}','${pro}','${city}','${county}','${detadd}') `;
            
            db.insert(sql,function (result) {
                var status = result.status;
                if (status) {
                    res.send({ status: 'ok', addressList:result });
                } else {
                    res.send({ status: 'err' });
                }
            })
        })
       
    },
    selectAddPost: function(app,db){
        app.post('/selectAdd',function(req,res){
            let sql = `select * from addresslist`;     
            db.select(sql,function(result){
                var status = result.status;
                if (status) {
                    res.send({ status: 'ok',selectAdd:result.data.results});
                } else {
                    res.send({ status: 'err' });
                }
            })
        })
    },
    delAddPost:function(app,db){
        app.post('/delAdd', function (req, res){
            let currentId = req.body.Addressid;
            let sql = `delete from addresslist where Addressid=${currentId}`;
            // console.log(currentId,sql)
            db.delete(sql, function (result) {
                // console.log(result)
                var status = result.status;
                // console.log(status,result);
                if (status) {
                    res.send({ status: 'ok', delAdd:result });
                } else {
                    res.send({ status: 'err' });
                }
            })
        })
    },
    newAddPost:function(app,db){
        app.post('/newAdd',function(req,res){
            let currentId = req.body.new;
            let sql = `select * from addresslist where Addressid=${currentId}`;
            console.log(currentId,sql)
            db.select(sql, function (result) {
                var status = result.status;
                if (status) {
                    res.send({ status: 'ok', selectAdd: result.data.results });
                } else {
                    res.send({ status: 'err' });
                }
            })
        })
    },
    getBuyList:function(app,db) {
        app.post('/getBuyList',function(req,res){
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
        
    },
    addQtyPost:function(app,db){
        app.post('/addQty', function (req, res) {
            let currentId = req.body.buyID;
            let sql = `update buylist set Qty=Qty+1 where buyID=${currentId}`;
            db.update(sql, function (result) {
                console.log(result)
                var status = result.status;
                if (status) {
                    res.send({ status: 'ok', addQty: result });
                } else {
                    res.send({ status: 'err' });
                }
            })
        })
    },
    subQtyPost:function (app, db) {
        app.post('/subQty', function (req, res) {
            let currentId = req.body.buyID;
            let sql = `update buylist set Qty=Qty-1 where buyID=${currentId}`;
            db.update(sql, function (result) {
                console.log(result)
                var status = result.status;
                if (status) {
                    res.send({ status: 'ok', subQty: result });
                } else {
                    res.send({ status: 'err' });
                }
            })
        })
    },
    delShopsPost:function(app,db){
        app.post('/delShops', function (req, res) {
            let objCurrentId = req.body;
            let strId = '';
            for(var key in objCurrentId){
                strId += (objCurrentId[key] + ',');
               
            }
            strId = strId.slice(0,strId.length-1)
            console.log(strId)

            let sql = `delete from buylist where buyID in (${strId})`;
            db.delete(sql, function (result) {
                // console.log(result)
                var status = result.status;
                if (status) {
                    res.send({ status: 'ok', subQty: result });
                } else {
                    res.send({ status: 'err' });
                }
            })
        })

    }
}