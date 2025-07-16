
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql@2025',
  database: 'studentdb'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('connection has been created');

    const creationQuery=`CREATE TABLE IF NOT EXISTS STUDENTS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    age INT
)`
    connection.execute(creationQuery,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log('Table is created');
    })

})
module.exports=connection;



