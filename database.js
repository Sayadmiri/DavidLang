const {Sequelize, Model, DataTypes} = require("sequelize");

const sequelize = new Sequelize("david_lang", "root", "as84", {host: "localhost", dialect: "mysql", logging: false});

module.exports = sequelize;