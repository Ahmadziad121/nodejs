const express = require('express')
const { get } = require('https')
var app = express()
//var json= require('json')
app.get('/',function(req,res) {
    res.send('start server')

})
app.get('/multiply/:num',function(req,res) {
    var mul=mul1((req.params.num))
    res.json(mul)
})
function fact1(num){
    let f=1
    for( let i=1;i<=num;i++)
    {
    f=f*i
    }
    return f
    
}
app.get('/fact/:num',function(req,res) {
    
    var fact =fact1(req.params.num)
    res.json(fact)

})
app.get('/fib/:num',function(req,res) {
    var fib=fib1(req.params.num)
    res.json(fib)


})
app.get('/comulativ/:num',function(req,res) {
    var cum =cum1(req.params.num)
    res.json(cum)

})


var server =app.listen(1000,function()

{
    var host =server.address().address
    var port =server.address().port
})

function mul1(n){
    let f=n
    let c=[]
    for(let i=1;i<=10;i++){
        c.push(f*i)
    }
    return c

}
function cum1(n){
    let f=0
    for( let i=0;i<=n;i++)
    {
    f=f+i
    }
    return f}
function fib1(n){
    let a=0
    const seq=[1,1]
    for(let i=2;i<=n;i++){
a=(i-1)+(i-2)
    }
    return a


}