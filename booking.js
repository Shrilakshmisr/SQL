module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    seatNumber: DataTypes.INTEGER
  });

  Booking.associate = (models) => {
    Booking.belongsTo(models.User);
    Booking.belongsTo(models.Bus);
  };

  return Booking;
};
