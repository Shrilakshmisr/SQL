const express = require('express');
const app = express();
const db = require('./models');

const userRoutes = require('./routes/users');
const busRoutes = require('./routes/buses');
const bookingRoutes = require('./routes/bookings');

app.use(express.json());

app.use('/users', userRoutes);
app.use('/buses', busRoutes);
app.use('/bookings', bookingRoutes);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(3000, () => console.log("Server running on port 3000"));
});
