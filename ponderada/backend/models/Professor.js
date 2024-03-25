const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect.js');
const Ong = require('./Ong.js');
const User = require('./User.js');

const Professor = sequelize.define('Professor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: DataTypes.INTEGER,
  civil_state: DataTypes.INTEGER,
  race: DataTypes.INTEGER,
  birthday: DataTypes.DATE,
  rg: DataTypes.STRING,
  cpf: DataTypes.STRING,
  telephone: DataTypes.STRING,
  state: DataTypes.INTEGER,
  city: DataTypes.STRING,
  address: DataTypes.STRING,
  ong_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Ong,
      key: 'id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
});

module.exports = Professor;
