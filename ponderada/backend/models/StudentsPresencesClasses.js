const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect.js');
const Student = require('./Student.js');
const InstanceClass = require('./InstancesClasses.js');

const StudentsPresencesClasses = sequelize.define('StudentsPresencesClasses', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: 'id',
    },
  },
  instance_class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: InstanceClass,
      key: 'id',
    },
  },
});

module.exports = StudentsPresencesClasses;
