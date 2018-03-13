const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const bp = require('body-parser');
const session = require('express-session');
const shopcar = require('./shopcar');


app.use(bp.urlencoded({ extended: false }));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") {
        res.send(200);
    } else {
        next();
    }
})

app.use(express.static(path.join(path.resolve(__dirname, '../'))))

module.exports = {
    
    
    start(_port) {
        shopcar.register(app);
        http.listen(_port || 8080,()=>{console.log('开启成功')});
    }
}