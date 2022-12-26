import {request} from "https://unpkg.com/request@2.88.2/index.js";



const clientename = document.querySelector('#name');
const cleinteativo = document.querySelector('#ativo');
const clienteonline = document.querySelector('#online');
const statusconexao = document.querySelector('#ultimaconexao');
const interfaces = document.querySelector('#interface');
const endereco = document.querySelector('#endereco');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const tablebody = document.querySelector('#tabela');




let token = '116:49163d784512d799beb6eb54ef0d3b2605b5c5fd1c9e64800ff8955d55ddce1e';
let options = { method: 'GET',
  url: 'https://ixc.vntinternet.com.br/webservice/v1/radusuarios',
  headers:
   {
     'Content-Type': 'application/json',
     Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
     ixcsoft: 'listar'
   },
  body:
   { qtype: 'radusuarios.id',
     query: '0',
     oper: '>',
     page: '1',
     rp: '20',
     sortname: 'radusuarios.id',
     sortorder: 'desc'
   },
  json: true
  };
//CLIENTE
  

const clientes = request(options, function (error, response, body)  {
  if (error) throw new Error(error);

  console.log("erro na integração");
});


clientes.map((cliente) =>{

    const linha = document.createElement("tr");
    const nome = document.createElement("td");
    const ativo = document.createElement("td");
    const online = document.createElement("td");
    const status = document.createElement("td");
    const interfaces = document.createElement("td");
    const endereco = document.createElement("td");
    const bairro = document.createElement("td");
    const cidade = document.createElement("td");
    
    nome.textContent = cliente.conexao
    linha.appendChild(nome);
    tablebody.appendChild(linha);
    
});
