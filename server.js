const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bus Booking System API is running.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
