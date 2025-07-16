const express = require('express');
const cors = require('cors');
const path = require('path');
const {sequelize} = require('./models/User');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));  // Serve frontend
app.use('/users', userRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server running at http://localhost:3000'));
});
