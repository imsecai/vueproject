var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var db = require('../db/DBHelper');

var jwt = require('jsonwebtoken');

module.exports = {
    buylistPost:function(app,db){
        app.get('/buylist',function(req,res){
                    db.select(`select * from buylist`,
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
        app.get('/Serch_buylist',function(req,res){

            let params = req.query.params;

            db.select(`select * from buylist where buyID like "%${params}%" or Qty like "%${params}%" or Title like "%${params}%" or Material like "%${params}%" or Price like "%${params}%" or Size like "%${params}%"`,
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
        app.post('/del_buylist',function(req,res){
            let pid = req.body.id;
            db.delete(`delete from buylist where buyID="${pid}" `,function(result){
                var status = result.status;
                if(status){
                    res.send({status:'ok',lg:result.data.results[0]});
                }else{
                    res.send({status:'error'});
                }
            });
        });

        //修改商品
        app.post('/update_buylist',function(req,res){
            let Price = req.body.Price;
            let qty = req.body.Qty;
            let title = req.body.Title;
            let OMaterial = req.body.OMaterial;
            let size = req.body.Size;
            let status = req.body.Status;
            let pid = req.body.buyID;

            let sql = `update buylist set Qty=${qty*1},Title="${title}",Price=${Price*1},Size="${size}",Status=${status} WHERE buyID=${pid} `;

            console.log(sql);

            db.update(sql,function(result){
                var status = result.status;
                if(status){
                    res.send({status:true,data:result.data.results});
                }else{
                    res.send({status:'error'});
                }

            });
        });

    }
}
