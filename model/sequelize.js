const Sequelize = require('sequelize');
const Config = require('../config');
// Option 1: Passing parameters separately
const sequelize = new Sequelize(Config.db.name, Config.db.username, Config.db.password, {
    host: Config.db.host,
    dialect: 'postgres'
});