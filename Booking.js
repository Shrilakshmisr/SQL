const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Booking = sequelize.define('Booking', {
  seatNumber: DataTypes.INTEGER,
});

module.exports = Booking;
