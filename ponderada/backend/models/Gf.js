const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect.js');
const User = require('./User.js');

const GF = sequelize.define('GF', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
});

module.exports = GF;
