const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.get('/:id/bookings', async (req, res) => {
  const { Booking, Bus } = require('../models');
  const bookings = await Booking.findAll({
    where: { UserId: req.params.id },
    include: [{ model: Bus, attributes: ['busNumber'] }]
  });
  res.json(bookings);
});

module.exports = router;
