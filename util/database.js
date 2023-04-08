const Sequelize = require('sequelize');

const sequelize = new Sequelize("node-complete", "root", "8485", {
    dialect: "mysql",
    host: "localhost",
  });

  module.exports = sequelize;