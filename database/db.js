const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize('my_db','polash','polash',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        operatorAliases: 5,
        timezone: "+06:00",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }

    }
)

module.exports =  sequelize;