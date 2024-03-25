const express = require('express');
const studentsPresencesClassesController = require('../controllers/studentPresenceClassesController.js');

const router = express.Router();

router.get('/students-presences-classes', studentsPresencesClassesController.getAllStudentsPresencesClasses);
router.get('/students-presences-classes/:id', studentsPresencesClassesController.getStudentsPresencesClassesById);
router.post('/students-presences-classes', studentsPresencesClassesController.createStudentsPresencesClasses);
router.put('/students-presences-classes/:id', studentsPresencesClassesController.updateStudentsPresencesClasses);
router.delete('/students-presences-classes/:id', studentsPresencesClassesController.deleteStudentsPresencesClasses);

module.exports = router;
