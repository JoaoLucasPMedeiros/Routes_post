const Sequelize = require('sequelize');
const connection = require('../db/connection');

const pagar = connection.define('pagar', {
    nome: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE,
    }
});
/*  pagar.sync({ force: true }); */

module.exports = pagar;

