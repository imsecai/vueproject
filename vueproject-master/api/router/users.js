/*const db = require('../db');

module.exports = {
    register: (app) =>{
        app.post('/Login', (req, res) =>{
            let name = req.body.username; //query
            let pwd = req.body.pwd;

            //db.mongodb.select('users',{name,pwd}).then((data)=>
            db.mongodb.select('users',name ? {name} : null).then((data)=>{
                //res.send(data);
                if(data[0]){
                    res.send({status:true,data});
                    //res.send('登录成功');
                }else{
                   // res.send('登录信息错误');
                    res.send({status:false,message:"登录信息错误"})
                }
            }).catch((error)=>{
                //res.send(error); 
                res.send({status: false, error});
            });
        })
    }
}*/