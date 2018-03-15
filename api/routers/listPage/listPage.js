const db = require('../../db/DBHelper');

module.exports = {
    register(app){
        app.get('/listpage',(req,res)=>{
            var sql = `SELECT * from minsu`;
            
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