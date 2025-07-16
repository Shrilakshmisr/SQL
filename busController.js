const Bus = require('../models/Bus');

exports.addBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(201).json(bus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAvailableBuses = async (req, res) => {
  try {
    const buses = await Bus.findAll({
      where: {
        availableSeats: {
          [require('sequelize').Op.gt]: req.params.seats,
        },
      },
    });
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
