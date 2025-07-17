const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Meeting = sequelize.define('Meeting', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.STRING, allowNull: false },
  time: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Meeting;
