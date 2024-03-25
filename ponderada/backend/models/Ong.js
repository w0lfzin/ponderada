const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect.js');

const Ong = sequelize.define('Ong', {
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
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telephone: DataTypes.STRING,
  foundationData: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  address: DataTypes.STRING,
});

module.exports = Ong;
