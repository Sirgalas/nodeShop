const Config = require('../config');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(Config.db.name, Config.db.username, Config.db.password, {
    host: Config.db.host,
    dialect: 'postgres'
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database 1:', err);
    });
const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
    },
    family: {
        type: Sequelize.STRING
    },
    second_name: {
        type: Sequelize.STRING
    }
},{
    classMethods: {

    },
    instanceMethods: {
        /*createSalt: function() {
            return crypto.randomBytes(128).toString('base64');
        },
        hashPassword: function(salt, pwd) {
            var hmac = crypto.createHmac('sha1', salt);

            return hmac.update(pwd).digest('hex');
        },
        authenticate: function(passwordToMatch) {
            return this.hashPassword(this.salt, passwordToMatch) === this.hashed_pwd;
        }*/
    }
});
sequelize.sync({force: true}).then(result=>{
    console.log(result);
})
    .catch(err=> console.log(err));
