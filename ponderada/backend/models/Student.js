const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect.js');
const Ong = require('./Ong.js');
const Responsable = require('./Responsable.js');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  race: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rg: DataTypes.STRING,
  cpf: DataTypes.STRING,
  telephone: DataTypes.STRING,
  state: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  civil_state: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ong_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Ong,
      key: 'id',
    },
  },
  responsable_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Responsable,
      key: 'id',
    },
  },
});


module.exports = Student;
