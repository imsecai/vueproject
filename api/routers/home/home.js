const db=require('../../db/db.js')
module.exports={
    register(app){
        app.get("/NewProduct",(req,res)=>{
            db.mysql.select("select * from product where Transport=3 and pID>60",options=>{
                res.send(options);
            })
        });
        app.get("/ShowProduct",(req,res)=>{
            db.mysql.select("select * from product where Category='沙发'",options=>{
                res.send(options);
            })
        });
        app.get("/Bed",(req,res)=>{
            db.mysql.select("select * from product where Category='床'",options=>{
                res.send(options);
            })
        });
        app.get("/Detail",(req,res)=>{
        var pID=req.query.pID;
            db.mysql.select(`select * from product where pID='${pID}'`,options=>{
                res.send(options);
            })
        });
    }
}
