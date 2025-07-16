const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Bus = sequelize.define('Bus', {
  name: DataTypes.STRING,
  totalSeats: DataTypes.INTEGER,
  availableSeats: DataTypes.INTEGER,
});

module.exports = Bus;
