'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    name: DataTypes.STRING,
    phoneNumber: DataTypes.BIGINT
  }, {});
  Store.associate = function(models) {
    Store.hasMany(models.Game, { as: 'games' })
  };
  return Store;
};
