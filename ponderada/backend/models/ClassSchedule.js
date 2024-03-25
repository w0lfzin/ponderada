const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect.js');
const StudentClasses = require('./StudentsClasses.js');

const ClassSchedule = sequelize.define('ClassSchedule', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  student_class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: StudentClasses,
      key: 'id',
    },
  },
  day_of_week: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
 start_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  frequency: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

module.exports = ClassSchedule;
