const Sequelize = require('sequelize');
const connection = require('../db/connection');

const contas = connection.define('pagar', {
    nome: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE,
    }
});

module.exports = contas;

