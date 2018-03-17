var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var db = require('../db/DBHelper');

var jwt = require('jsonwebtoken');

module.exports = {
    usersPost:function(app,db){
        app.get('/users',function(req,res){
                    // let page = req.query.page;
                    // let limit = req.query.limit;
                    // page1 = page ? (page-1)*limit : 0;
                    // limit1 = limit ? page*limit :9999;
                    db.select(`select * from user`,
                        function(result){
                            var status = result.status;
                            if(status){
                                res.send({status:true,data:result.data.results});
                              // res.send({status:true,count:result.length,data:result.data.results.slice(page1,limit1)});
                            }else{
                                res.send({status:'error'});
                            }
                        }
                    );    
                });

        //模糊查找
        app.get('/Serch_users',function(req,res){

            let params = req.query.params;

            db.select(`select * from user where user_id like "%${params}%" or username like "%${params}%" or password like "%${params}%" `,
                function(result){
                    //console.log(result);
                    var status = result.status;
                    if(status){
                        res.send({status:true,data:result.data.results});
                        //res.send({status: true, data: result});
                    }else{
                        res.send({status:'error'});
                    }
                }
            );    
        });
        //删除
        app.post('/del_users',function(req,res){
            let pid = req.body.id;
            db.delete(`delete from user where user_id="${pid}" `,function(result){
                var status = result.status;
                if(status){
                    res.send({status:'ok',lg:result.data.results[0]});
                }else{
                    res.send({status:'error'});
                }
            });
        });


    }
}
