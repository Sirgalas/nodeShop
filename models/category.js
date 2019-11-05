'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    parent_id: DataTypes.INTEGER
  }, {});
  category.associate = function(models) {
    // associations can be defined here
  };
  return category;
};