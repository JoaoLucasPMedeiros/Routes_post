# Inserindo dados no banco usando Sequelize

## 1 - Criar a conexão com o banco passando os paramentos, nome do banco, usuario, senha, local e tipo do banco
    const Sequelize = require('sequelize');

    const connection = new Sequelize('contas', 'joaoone', '123456', {
    host: 'localhost',
    dialect: 'mysql'
    });

    module.exports = connection;
## Conferir se a conexão ocorreu de forma correta, exibindo a mensagem no console "Banco conectado com sucesso", antes de tudo devemos exportar a variavel contendo a conexão do banco na nossa parta "connection.js"

    const connection = require('./db/connection');

    connection
    .authenticate()
    .then(()=> {
        console.log('Banco conectado com sucesso');
    })
    .catch(err =>{
        console.log('erro ao conectar ao banco ',err)
    });
## Quando ouver algum erro de CONEXÃO com o banco, será apresendo no terminal

## 2- Criar os models, que são a abstração do banco de dados, precisamentos a conexão do banco, nesse caso representada dentro da variavel "connection" e o proprio sequelize. 

    const Sequelize = require('sequelize');
    const connection = require('../db/connection');

## Agora precisamos finalmente "criar" a tabela usando o sequelize, lembrando que é necessario que você tenha esse banco criado no software que voce está usando, no meu caso eu já tenho um banco chamado "contas" e dentro dela tenho uma tabela chamada "pagar", que contem os campos nome e valor. Tendo o banco já criado, agora é só informar isso para o sequelize, o nome da tabela e os campos da tabela.
    const contas = connection.define('pagar', {
    nome: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE,
    }
    });

    module.exports = contas;


## 3- Criar uma rota do tipo "POST" para inserir dados no banco, antes é necessario installar o "Body-parse", inserir-lo no nosso app
  
    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({extended:false}))


