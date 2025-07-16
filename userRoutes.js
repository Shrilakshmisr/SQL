const express = require('express');
const router = express.Router();
const { addUser, getAllUsers } = require('../controllers/userController');

router.post('/', addUser);
router.get('/', getAllUsers);

module.exports = router;
