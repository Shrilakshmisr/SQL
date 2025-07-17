const Sequelize = require('sequelize');
const sequelize = new Sequelize('bus_booking', 'root', 'W7301@jqir#', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize.DataTypes);
db.Bus = require('./bus')(sequelize, Sequelize.DataTypes);
db.Booking = require('./booking')(sequelize, Sequelize.DataTypes);

// Associations
Object.values(db).forEach((model) => {
  if (model.associate) model.associate(db);
});

module.exports = db;
