const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes'); // Correct path

app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Hello world');
})
app.use('/students', studentRoutes); // Route setup

app.listen(3000, (err) => {
  console.log('Server started at http://localhost:3000');
})