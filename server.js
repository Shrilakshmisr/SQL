const express = require('express');
const cors = require('cors');
const expenseRoutes = require('./routes/expenseRoutes');
const sequelize = require('./config/db');
const Expense = require('./models/expense');

const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());
app.use(express.json());
app.use('/expenses', expenseRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });
});
