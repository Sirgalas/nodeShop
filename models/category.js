'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    slug: DataTypes.STRING,
    parent_id: DataTypes.INTEGER
  }, {});
  category.associate = function(models) {
    category.belongsToMany(models.goods, {
      through: 'goods_to_category',
      foreignKey: 'category_id',
      otherKey: 'goods_id',
    });
  };
  return category;
};