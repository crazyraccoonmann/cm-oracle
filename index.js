const Web3 = require('web3')
const http = require('http')
const express = require('express')

const web3 = new Web3("https://bsc-dataseed1.binance.org")
const cont = '0x1A652dEa38B3522106D1675dbe5fc222e831fE8c'
const app = express();


app.get("/", (req, res, next) => {
    web3.eth.getStorageAt(cont, 151)
        .then(r => res.send(process(r)));
    
    
});



app.listen(8080, ()=>{
    console.log("server run")
});





var process = function(s){
    var st = parseInt(s).toString();
    var ar = Array.from(st, Number);
    var a1 = [];
    var a2 = [];
    a1= ar.slice(0 ,3);
    a2=ar.splice(3,4);

    return +a1.join('') + '.' + +a2.join('');
}