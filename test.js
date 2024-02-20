const express = require('express')
var app = express()
app.get('/',function(req,res) {
    res.send('hello')

})
app.get('/user',function(req,res) {
    res.send('hell')

})
app.get('/fact/:num',function(req,res) {
    console.log(req.params.num)
    res.send('hello')

})

var server =app.listen(1000,function()

{
    var host =server.address().address
    var port =server.address().port
})

