const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('expense_db', 'root', 'W7301@jqir#', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
