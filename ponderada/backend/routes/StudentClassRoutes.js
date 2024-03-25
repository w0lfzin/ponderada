const express = require('express');
const studentClassController = require('../controllers/studentClassController.js');

const router = express.Router();

router.get('/student-classes', studentClassController.getAllStudentClasses);
router.get('/student-classes/:id', studentClassController.getStudentClassById);
router.post('/student-classes', studentClassController.createStudentClass);
router.put('/student-classes/:id', studentClassController.updateStudentClass);
router.delete('/student-classes/:id', studentClassController.deleteStudentClass);
router.get('/students-classes/students/:class_id', studentClassController.getStudentsByClassId);

module.exports = router;
