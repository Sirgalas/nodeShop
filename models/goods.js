'use strict';
module.exports = (sequelize, DataTypes) => {
  const goods = sequelize.define('goods', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  goods.associate = function(models) {
    goods.belongsToMany(models.category, {
      through: 'goods_to_category',
      foreignKey: 'goods_id',
      otherKey: 'category_id',
     // as: 'category'
    });
  };
  return goods;
};