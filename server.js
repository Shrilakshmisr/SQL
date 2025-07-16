const express = require('express');
const sequelize = require('./config/db');
const User = require('./models/User');
const Bus = require('./models/Bus');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/buses', busRoutes);

// Sync and add sample data
sequelize.sync({ force: true }).then(async () => {
  // Insert Users
  await User.bulkCreate([
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' },
    { name: 'Charlie', email: 'charlie@mail.com' },
  ]);

  // Insert Buses
  await Bus.bulkCreate([
    { name: 'Bus A', totalSeats: 50, availableSeats: 30 },
    { name: 'Bus B', totalSeats: 40, availableSeats: 8 },
  ]);

  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
});
