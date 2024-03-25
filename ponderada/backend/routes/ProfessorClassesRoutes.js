const express = require('express');
const professorClassesController = require('../controllers/professorClassesController.js');

const router = express.Router();

router.get('/instance-classes/:instance_classes_id/professors', professorClassesController.getProfessorsInInstanceClasses);
router.post('/instance-classes/:instance_classes_id/professors', professorClassesController.addProfessorToInstanceClasses);
router.delete('/professors-instance/:id', professorClassesController.removeProfessorFromInstanceClasses);

module.exports = router;
