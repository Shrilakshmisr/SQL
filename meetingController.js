const Meeting = require('../models/meeting');

exports.createMeeting = async (req, res) => {
  const { name, email, date, time } = req.body;

  try {
    // Count existing meetings at this slot
    const count = await Meeting.count({ where: { date, time } });

    if (count >= 5) {
      return res.status(400).json({ message: 'Slot is full!' });
    }

    const meeting = await Meeting.create({ name, email, date, time });
    res.status(201).json(meeting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.findAll();
    res.status(200).json(meetings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
