'use strict';
module.exports = (sequelize, DataTypes) => {
  const goods_to_category = sequelize.define('goods_to_category', {
    goods_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {});
  goods_to_category.associate = function(models) {
    // associations can be defined here
  };
  return goods_to_category;
};