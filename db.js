const mysql = require('mysql2');
require('dotenv').config();

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  multipleStatements: true
});

// Create the database and use it
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');

  const createDatabase = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}; USE ${process.env.DB_NAME};`;

  const createTables = `
    CREATE TABLE IF NOT EXISTS Users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE
    );
    
    CREATE TABLE IF NOT EXISTS Buses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      busNumber VARCHAR(50) NOT NULL UNIQUE,
      totalSeats INT NOT NULL,
      availableSeats INT NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS Bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      seatNumber INT NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS Payments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      amountPaid DECIMAL(10, 2) NOT NULL,
      paymentStatus VARCHAR(50) NOT NULL
    );
  `;

  connection.query(createDatabase + createTables, (err, result) => {
    if (err) throw err;
    console.log('Database and tables created or already exist.');
  });
});

module.exports = connection;
