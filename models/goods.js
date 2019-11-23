'use strict';
const Category=require('./category');

module.exports = (sequelize, DataTypes) => {
  const goods = sequelize.define('goods', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    image: DataTypes.STRING,
    category_id:DataTypes.INTEGER,
  }, {});
  goods.associate = function(models) {
    goods.belongsTo(models.category,{foreignKey:'category_id'});
  }
  return goods;
};