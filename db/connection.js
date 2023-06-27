const Sequelize = require('sequelize');


const connection = new Sequelize('contas', 'joaoone', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = connection;