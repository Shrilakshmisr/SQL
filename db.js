const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('meeting_app', 'root', 'W7301@jqir#', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
