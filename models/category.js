'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    parent_id: DataTypes.INTEGER
  }, {});
  Category.associate = function(models) {
    Category.belongsToMany(models.Goods, {
      through: 'GoodsToCategory',
      as: 'goods',
      foreignKey: 'category_id',
      otherKey: 'goods_id',
    });
  };
  return Category;
};