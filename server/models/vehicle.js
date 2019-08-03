'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Vehicles', {
    type: DataTypes.STRING,
    plate: DataTypes.STRING,
    note: DataTypes.TEXT
  }, {});
  // Vehicle.associate = function(models) {
  //   // associations can be defined here
  // };
  // console.log(Vehicle, 11)
  // return Vehicle;
};