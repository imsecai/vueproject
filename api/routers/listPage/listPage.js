const db = require('../../db/DBHelper');

module.exports = {
    register(app){
        app.get('/listpage',(req,res)=>{
            var sql = `SELECT * from product`;
            
            db.select(sql, function (data) {
                if (data.status) {
                    res.send(data);
                } else {
                    res.send(data);
                }
            })
        
            
        }),
            app.get('/listTall',(req,res)=>{
            var sql = `select * from product order by Price`
            
            db.select(sql, function (data) {
                if (data.status) {
                    res.send(data);
                } else {
                    res.send(data);
                }
            })
        }),
            app.get('/listDescend', (req, res) => {
            var sql = `select * from product order by Price desc`

                db.select(sql, function (data) {
                    if (data.status) {
                        res.send(data);
                    } else {
                        res.send(data);
                    }
                })
            })
    }
}