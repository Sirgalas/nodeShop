'use strict';
module.exports = (sequelize, DataTypes) => {
  const goods = sequelize.define('goods', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  goods.associate = function(models) {
    // associations can be defined here
  };
  return goods;
};