// status login
var axios = require('axios');
var data = JSON.stringify({
  "qtype": "radusuarios.online",
  "query": "N",
  "oper": "=",
  "page": "1",
  "rp": "10000",
  "sortname": "radusuarios.id",
  "sortorder": "asc"
});

var config = {
  method: 'get',
  url: 'https://ixc.vntinternet.com.br/webservice/v1/radusuarios',
  headers: { 
    'ixcsoft': 'listar', 
    'Authorization': 'Basic MTE2OjQ5MTYzZDc4NDUxMmQ3OTliZWI2ZWI1NGVmMGQzYjI2MDViNWM1ZmQxYzllNjQ4MDBmZjg5NTVkNTVkZGNlMWU=', 
    'Content-Type': 'application/json', 
    'Cookie': 'IXC_Session=pt3dki2teccn32ai8nniqn9g9e'
  },
  data : data
};


// status cliente
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

var axios = require('axios');
var data = JSON.stringify({
  "qtype": "cliente.id",
  "query": "225",
  "oper": "=",
  "page": "1",
  "rp": "10000",
  "sortname": "cliente.id",
  "sortorder": "asc"
});

var config = {
  method: 'get',
  url: 'https://ixc.vntinternet.com.br/webservice/v1/cliente',
  headers: { 
    'ixcsoft': 'listar', 
    'Authorization': 'Basic MTE2OjQ5MTYzZDc4NDUxMmQ3OTliZWI2ZWI1NGVmMGQzYjI2MDViNWM1ZmQxYzllNjQ4MDBmZjg5NTVkNTVkZGNlMWU=', 
    'Content-Type': 'application/json', 
    'Cookie': 'IXC_Session=pt3dki2teccn32ai8nniqn9g9e'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});