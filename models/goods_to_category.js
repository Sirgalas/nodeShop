'use strict';
module.exports = (sequelize, DataTypes) => {
  const GoodsToCategory = sequelize.define('GoodsToCategory', {
    goods_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {});
  GoodsToCategory.associate = function(models) {
    GoodsToCategory.belongsTo(models.Goods, {foreignKey: 'Goods_id'})
    GoodsToCategory.belongsTo(models.Category, {foreignKey: 'category_id',})
  };
  return GoodsToCategory;
};