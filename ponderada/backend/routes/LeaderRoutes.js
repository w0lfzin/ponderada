const express = require('express');
const leaderController = require('../controllers/leaderController.js');

const router = express.Router();

router.get('/leaders', leaderController.getAllLeaders);
router.get('/leaders/:id', leaderController.getLeaderById);
router.post('/leaders', leaderController.createLeader);
router.put('/leaders/:id', leaderController.updateLeader);
router.delete('/leaders/:id', leaderController.deleteLeader);
router.get('/leader/:id/ong', leaderController.getOngByLeaderId);


module.exports = router;
