# Criando uma rota POST para inserir dados no banco

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


## 3- Antes de criar uma rota do tipo "POST" para inserir dados no banco é necessario installar o "Body-parse" para receber arquivos JSON, inserir-lo no nosso app
  
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json());

## 4 - Criaremos uma rota do tipo POST para inserir dados no banco, usando o objeto "create", antes de usa-lo precisamos definir uma variavel que receba esses dados da requisição.
  
    const {nome, valor} = req.body;
    //outra forma para criar variaveis
    const nome = req.body;
    const valor = req.body;
## agora usaremos o "create" junto ao nosso "Models"
    pagar.create({
    nome:nome,
    valor:valor
    })
  .then(()=>{
    res.send('DADOS INSERIDOS COM SUCESSO')
  })
  .catch((error)=>{
    console.log(`erro na rota post ${error}`)
  })

  

