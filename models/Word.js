const {Model, DataTypes} = require("sequelize");
const sequelize = require("../database");

const Word = sequelize.define("Word", {
    word: {
        type: DataTypes.STRING,
        allowNull: false
    },
    meaning: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Word;