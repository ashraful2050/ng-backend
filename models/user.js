const Sequelize = require('sequelize');
const database = require('../database/db');

module.exports =  database.define(
    'user',{
        id: {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        first_name: {type:Sequelize.STRING},
        last_name: {type:Sequelize.STRING},
        address: {type:Sequelize.STRING},
        dob: {type:Sequelize.DATEONLY},
        entry_month: {type:Sequelize.STRING}
},
{timestamps:false, freezeTableName:true} 
);