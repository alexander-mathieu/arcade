'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    releaseYear: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {});
  Game.associate = function(models) {
    Game.belongsTo(models.Store, {
      foreignKey: 'StoreID',
      as: 'store'
    })
  };
  return Game;
};
