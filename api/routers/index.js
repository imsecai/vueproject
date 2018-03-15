var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('../db/db');
    db = db.mysql;

var path = require('path');
var listpage = require('./listPage/listPage.js')
var loginPost = require('./login/login');
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
        listpage.register(app,db)
        app.listen(port,function(){
            console.log('connect success')
        });
    }
}