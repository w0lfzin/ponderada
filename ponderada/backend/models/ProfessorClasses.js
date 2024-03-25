const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect.js');
const Professor = require('./Professor.js');
const InstanceClasses = require('./InstancesClasses.js');

const ProfessorsClasses = sequelize.define('ProfessorsClasses', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  professor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Professor,
      key: 'id',
    },
  },
  instance_classes_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: InstanceClasses,
      key: 'id',
    },
  },
});

module.exports = ProfessorsClasses;
