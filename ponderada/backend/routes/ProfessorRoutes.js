const express = require('express');
const professorController = require('../controllers/professorController.js');

const router = express.Router();

router.get('/professors', professorController.getAllProfessors);
router.get('/professors/:id', professorController.getProfessorById);
router.post('/professors', professorController.createProfessor);
router.put('/professors/:id', professorController.updateProfessor);
router.delete('/professors/:id', professorController.deleteProfessor);

module.exports = router;
