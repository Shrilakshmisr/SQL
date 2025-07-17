const express = require('express');
const router = express.Router();
const { Booking } = require('../models');

router.post('/', async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking);
});

module.exports = router;
