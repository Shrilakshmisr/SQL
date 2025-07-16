const express = require('express');
const router = express.Router();
const { addUser, getUsers, deleteUser,updateUser } = require('../controllers/userController');

router.post('/', addUser);
router.get('/', getUsers);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);  // Add this line


module.exports = router;
