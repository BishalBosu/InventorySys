const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Saman = sequelize.define('saman', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true

    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }, 

    desc: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull:false
        
    },
    qty:{
        type: Sequelize.INTEGER,
        allowNull: false
    }


})


module.exports = Saman;
