const http = require('http')
const express = require('express')
const app = express()

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('servidor do pai ta on \n')
  
}) 

app.get('/user', function (req, res) {
    res.send('Lista de usuários');
})


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
