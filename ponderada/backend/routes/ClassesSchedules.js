const express = require('express');
const classScheduleController = require('../controllers/classesSchedule.js');

const router = express.Router();

router.get('/class-schedules', classScheduleController.getAllClassSchedules);
router.get('/class-schedules/:id', classScheduleController.getClassScheduleById);
router.post('/class-schedules', classScheduleController.createClassSchedule);
router.put('/class-schedules/:id', classScheduleController.updateClassSchedule);
router.delete('/class-schedules/:id', classScheduleController.deleteClassSchedule);

module.exports = router;
