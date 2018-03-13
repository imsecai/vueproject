module.exports = {
    register(app) {
        app.get('/GetJson', (req, res) => {
            res.send('接口成功')
        }),
        app.post('/joinCar',(req,res)=>{
            res.send('购物车已加入')
        })
    }
}