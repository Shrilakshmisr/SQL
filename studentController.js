
const connection = require('../utils/db-connection');
const db=require('../utils/db-connection');

const addStudent = (req, res) => {
  const { name, email, age } = req.body;
  const insertQuery = `INSERT INTO STUDENTS (name, email, age) VALUES (?, ?, ?)`;
  db.execute(insertQuery, [name, email, age], (err) => {
    if (err) {
      console.log(err.message)
            res.status(500).send(err.message);
            
            return;
    }
    console.log(`Value has been inserted`)
    res.status(200).send('Student added');
  })
}

const getAllStudents = (req, res) => {
  db.query('SELECT * FROM STUDENTS', (err, results) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(results);
  })
}

const getStudentById = (req, res) => {
  const { id } = req.params;
  db.execute('SELECT * FROM students WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).send(err.message);
    if (results.length === 0) return res.status(404).send('Student not found');
    res.status(200).json(results[0]);
  })
}

const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  db.execute(`UPDATE STUDENTS SET name=?, email=? WHERE id=?`, [name, email, id], (err, result) => {
    if (err) return res.status(500).send(err.message);
    if (result.affectedRows === 0) return res.status(404).send('Student not found');
    console.log(`Updated student with ID: ${id}`);
    res.status(200).send('Student updated');
  })
}

const deleteStudent = (req, res) => {
  const { id } = req.params;
  db.execute('DELETE FROM STUDENTS WHERE id=?', [id], (err, result) => {
    if (err) return res.status(500).send(err.message);
    if (result.affectedRows === 0) return res.status(404).send('Student not found');
    console.log(`Deleted student with ID: ${id}`);
    res.status(200).send('Student deleted');
  })
}

module.exports = {
  addStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
}