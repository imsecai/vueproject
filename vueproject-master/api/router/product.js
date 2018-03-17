/*const db = require('../db')

module.exports = {
    register: (app) => {
        app.get('/products', (req, res) => {
            db.mongodb.select('products').then((data) => {
                res.send({status: true, data})
            }).catch((error) => {
                res.send({status: false, error});
            })
        });
            //添加
        app.post('/addproduct', (req, res) => {
            let proname = req.body.proname;
            let price = req.body.price;
            let pcs = req.body.pcs;
            db.mongodb.insert('products', {proname, price, pcs}).then((result) => {
                res.send({status: true, data: result});
            })
        });
            //删除
        app.post('/delproduct', (req, res) => {
            let id = req.body.id;
            let oid = db.mongodb.objectid(id);
            db.mongodb.delete('products', {"_id": oid}).then((result) => {
                res.send({status: true, data: result});
            })
        });
            //模糊查询
        app.get('/Serch_product',(req,res)=>{
            let Oparams = req.query.params;
            let params = new RegExp(Oparams);
            db.mongodb.select('products',{$or:[{proname: params},{_id:params},{pcs:params},{price:params}]}).then((result)=>{
                res.send({status: true, data: result});
            })
        });
            //修改
        app.post('/amend_product',(req,res)=>{
            let proname = req.body.proname;
            let price = req.body.price;
            let pcs = req.body.pcs;
            let id = req.body.oid;
            let oid = db.mongodb.objectid(id);
            db.mongodb.update('products',{proname, price, pcs},oid).then((result)=>{
                res.send({status: true, data: result});
            })
        })


    } 
}*/