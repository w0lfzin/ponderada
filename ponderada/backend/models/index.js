const User = require('./User.js');
const Responsable = require('./Responsable.js');
const Professor = require('./Professor.js');
const Student = require('./Student.js');
const Workshop = require('./Workshop.js');
const GF = require('./Gf.js');
const Ong = require('./Ong.js');
const Leader = require('./Leader.js');
const StudentClass = require('./StudentClasses.js');
const Class = require('./Class.js');
const ClassSchedule = require('./ClassSchedule.js');
const InstanceClasses = require('./InstancesClasses.js');
const ProfessorClasses = require('./ProfessorClasses.js');
const StudentsPresencesClasses = require('./StudentsPresencesClasses.js');

StudentClass.belongsTo(Student, { foreignKey: 'student_id' });
StudentClass.belongsTo(Class, { foreignKey: 'class_id' });

Student.hasMany(StudentClass, { foreignKey: 'student_id' });
Class.hasMany(StudentClass, { foreignKey: 'class_id' });

ClassSchedule.belongsTo(StudentClass, { foreignKey: 'student_class_id' });
StudentClass.hasMany(ClassSchedule, { foreignKey: 'student_class_id' });

module.exports = {
  User,
  Responsable,
  Professor,
  Student,
  Workshop,
  GF,
  Ong,
  Leader,
  StudentClass,
  Class,
  ClassSchedule,
  InstanceClasses,
  ProfessorClasses,
  StudentsPresencesClasses,
};
