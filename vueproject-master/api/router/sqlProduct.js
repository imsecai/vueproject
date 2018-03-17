
var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var db = require('../db/DBHelper');

var jwt = require('jsonwebtoken');

module.exports = {
    productPost:function(app,db){
 
        app.get('/products',function(req,res){
            let page = req.query.page;
            let limit = req.query.limit;
            page1 = page ? (page-1)*limit : 0;
            limit1 = limit ? page*limit :9999;
            db.select(`select * from product_copy`,
                function(result){
                    var status = result.status;
                    if(status){
                       // res.send({status:true,data:result.data.results});
                       res.send({status:true,count:result.length,data:result.data.results.slice(page1,limit1)});
                    }else{
                        res.send({status:'error'});
                    }
                }
            );    
        });


        //模糊查找
        app.get('/Serch_product',function(req,res){

            let params = req.query.params;

            db.select(`select * from product_copy where Title like "%${params}%" or pID like "%${params}%" or Price like "%${params}%" or Depict like "%${params}%" or Style like "%${params}%" or Category like "%${params}%"`,
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



        //商品添加
        app.post('/addproduct',function(req,res){
            let Title = req.body.Title;
            let Depict = req.body.Depict;
            let Price = req.body.Price;
            let Style = req.body.Style;
            let Material = req.body.Material;
            let Transport = req.body.Transport;
            let Category = req.body.Category;
            let Img1 = req.body.Img1;
            let Img2 = req.body.Img2;
            let Img3 = req.body.Img3;
            let Img4 = req.body.Img4;
            let Img5 = req.body.Img5;

            let sql = `insert into product_copy (Title,Depict,Price,Style,Material,Transport,Category,Img1,Img2,Img3,Img4,Img5) VALUES ('${Title}','${Depict}','${Price}','${Style}','${Material}','${Transport}','${Category}','${Img1}','${Img2}','${Img3}','${Img4}','${Img5}')`;
            db.insert(sql,function(result){
                console.log(result);
                if(result){
                     res.send({status:true,data:result});
                }else{
                    res.send({state:'error'});
                }
            });
        });

        //修改商品
        app.post('/amend_product',function(req,res){
            let title = req.body.Title;
            let depict = req.body.Depict;
            let price = req.body.Price;
            let style = req.body.Style;
            let material = req.body.Material;
            let transport = req.body.Transport;
            let category = req.body.Category;
            let img1 = req.body.Img1;
            let img2 = req.body.Img2;
            let img3 = req.body.Img3;
            let img4 = req.body.Img4;
            let img5 = req.body.Img5;
            let pid = req.body.oid;

            let sql = `update product_copy set Title='${title}', Depict='${depict}',Price=${price*1},Style='${style}',Material='${material}',Transport='${transport}',Category='${category}',Img1='${img1}',Img2='${img2}',Img2='${img2}',Img3='${img3}',Img4='${img4}',Img5='${img5}' WHERE pID='${pid}' `;

            db.update(sql,function(result){
                var status = result.status;
                if(status){
                    res.send({status:true,data:result.data.results});
                }else{
                    res.send({status:'error'});
                }

            });
        });

        //删除商品
        app.post('/delproduct',function(req,res){
            let pid = req.body.id;
            db.delete(`delete from product_copy where pID="${pid}" `,function(result){
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




