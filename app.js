const express = require('express');
const app = express();



app.get("/",function(req,res){
    res.sendFile(__dirname+ "/src/index.html");

});



app.listen(3000, () => {
    console.log("servidor inciado na porta 3000 : http://localhost:3000/");
});