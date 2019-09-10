'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    auth_key: DataTypes.STRING,
    name: DataTypes.STRING,
    second_name: DataTypes.STRING,
    family: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};