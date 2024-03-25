const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnect.js');
const Student = require('./Student.js');
const Class = require('./Class.js');

const StudentClass = sequelize.define('StudentClass', {
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
  class_id: { // Corrigido para class_id
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Class,
      key: 'id',
    },
  },
});

StudentClass.belongsTo(Student, { foreignKey: 'student_id' });
StudentClass.belongsTo(Class, { foreignKey: 'class_id' });
Student.hasMany(StudentClass, { foreignKey: 'student_id' });
Class.hasMany(StudentClass, { foreignKey: 'class_id' });

module.exports = StudentClass;
