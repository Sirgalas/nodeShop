'use strict';
const Category = require("./category");

module.exports = (sequelize, DataTypes) => {
  const Goods = sequelize.define('Goods', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {});
  Goods.associate = (models)=> {
    Goods.belongsToMany(models.Category, {
      through: 'GoodsToCategory',
      foreignKey: 'good_id',
      otherKey: 'category_id',
      as: 'category'
    });
  };
  return Goods;
};