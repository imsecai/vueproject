var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('../db/db');
    db = db.mysql;

var path = require('path');
var listpage = require('./listPage/listPage.js')
var loginPost = require('./login/login');
var myorderPost = require('./myorder/myorder')
const detailPage=require('./detailPage/detailPage.js');
var shopPost = require('./shop/shop');
const home=require('./home/home');
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
        res.send(200);
    } else {
        next();
    }
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '/')));        
               
module.exports = {
    start:function(port){
        loginPost.userPost(app,db);           
        home.register(app);
        detailPage.register(app);
        listpage.register(app,db);
        myorderPost.myorderListPost(app,db);
        loginPost.userPost(app, db);
        shopPost.addressPost(app, db);
        shopPost.selectAddPost(app, db);
        shopPost.delAddPost(app, db);
        shopPost.newAddPost(app, db);
        shopPost.getBuyList(app, db);
        shopPost.addQtyPost(app, db);
        shopPost.subQtyPost(app, db);
        shopPost.delShopsPost(app, db);
        app.listen(port,function(){
            console.log('connect success')
        });
    }
}