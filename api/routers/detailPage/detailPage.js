const db=require('../../db/db.js');
const bp=require('body-parser');
module.exports={
    register(app){
        app.post("/inbuylist",(req,res)=>{
            var buyID=req.body.buyID;
            var Qty=req.body.Qty;
            var Title=req.body.Title;
            var Material=req.body.Material;
            var Price=req.body.Price;
            var Size=req.body.Size;
            var Img1=req.body.Img1;
            db.mysql.insert(`insert into buylist values(${buyID},${Qty},'${Title}','${Material}',${Price},'${Size}','${Img1}',0)`,options=>{
                res.send(options);
            });
        });
        app.post("/modifyList",(req,res)=>{
            var buyID=req.body.pID;
            db.mysql.update(`update buylist set Qty=Qty+1 where buyID=${buyID}`,options=>{
                res.send(options);
            })
        });
        app.get("/getBuyList",(req,res)=>{
            db.mysql.select("select * from buylist where Status=0",options=>{
                res.send(options);
            })
        });
    }
}