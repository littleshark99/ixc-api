const { default: axios } = require('axios');
const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require("path");

const api = axios.create({
    baseURL: 'localhost:3000/'
});

app.use(express.static(__dirname + '/public'));
app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});



app.listen(3000, () => {
    console.log("servidor inciado na porta 3000 : http://localhost:3000/");
});