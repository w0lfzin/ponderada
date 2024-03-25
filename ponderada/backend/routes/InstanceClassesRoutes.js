const express = require('express');
const instanceClassesController = require('../controllers/InstanceClassesController.js');

const router = express.Router();

router.get('/instance-classes', instanceClassesController.getAllInstanceClasses);
router.get('/instance-classes/:id', instanceClassesController.getInstanceClassesById);
router.post('/instance-classes', instanceClassesController.createInstanceClasses);
router.put('/instance-classes/:id', instanceClassesController.updateInstanceClasses);
router.delete('/instance-classes/:id', instanceClassesController.deleteInstanceClasses);

module.exports = router;
