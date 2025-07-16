const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Payment = sequelize.define('Payment', {
  amount: DataTypes.FLOAT,
  status: DataTypes.STRING,
});

module.exports = Payment;
