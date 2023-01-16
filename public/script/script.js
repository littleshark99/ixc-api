const clientename = document.querySelector('#name');
const clienteativo = document.querySelector('#ativo');
const clienteonline = document.querySelector('#online');
const statusconexao = document.querySelector('#ultimaconexao');
const interface = document.querySelector('#interface');
const lugar = document.querySelector('#endereco');
const lougradouro = document.querySelector('#bairro');
const estado = document.querySelector('#cidade');
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
    
    nome.textContent = cliente.clientename
    linha.appendChild(nome);
    tablebody.appendChild(linha);

    ativo.textContent = cliente.clienteativo
    linha.appendChild(ativo);
    tablebody.appendChild(linha);

    online.textContent = cliente.clienteonline
    linha.appendChild(online);
    tablebody.appendChild(linha);

    status.textContent = cliente.statusconexao
    linha.appendChild(status);
    tablebody.appendChild(linha);

    interfaces.textContent = cliente.interface
    linha.appendChild(interfaces);
    tablebody.appendChild(linha);

    endereco.textContent = cliente.lugar
    linha.appendChild(endereco);
    tablebody.appendChild(linha);

    bairro.textContent = cliente.lougradouro
    linha.appendChild(bairro);
    tablebody.appendChild(linha);

    cidade.textContent = cliente.estado
    linha.appendChild(cidade);
    tablebody.appendChild(linha);

});
