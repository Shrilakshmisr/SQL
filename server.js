const express = require('express');
const sequelize = require('./db');
const meetingRoutes = require('./routes/meetingRoutes');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/meetings', meetingRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});
