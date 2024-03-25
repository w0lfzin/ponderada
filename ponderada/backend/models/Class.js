const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect.js');
const Ong = require('./Ong.js');

const Class = sequelize.define('Classes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  local: DataTypes.STRING,
  workshop: DataTypes.STRING,
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  ong_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Ong,
      key: 'id',
    },
  },
});

module.exports = Class;
