const express = require('express');
const gfController = require('../controllers/gfController.js');

const router = express.Router();

router.get('/gfs', gfController.getAllGFs);
router.get('/gfs/:id', gfController.getGFById);
router.post('/gfs', gfController.createGF);
router.put('/gfs/:id', gfController.updateGF);
router.delete('/gfs/:id', gfController.deleteGF);

module.exports = router;
