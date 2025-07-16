const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

router.post("/add", studentController.addStudent); // POST /students
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.put("/update/:id", studentController.updateStudent);
router.delete("/delete/:id", studentController.deleteStudent);

module.exports = router;
