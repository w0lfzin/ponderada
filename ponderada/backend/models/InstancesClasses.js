const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect.js');
const Classes = require('./Class.js');

const InstanceClasses = sequelize.define('InstanceClasses', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_classes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Classes,
      key: 'id',
    },
  },
  date: DataTypes.DATE,
  status: DataTypes.INTEGER,
  observation: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = InstanceClasses;
