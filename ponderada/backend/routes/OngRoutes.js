const express = require('express');
const ongController = require('../controllers/ongController.js');

const router = express.Router();

router.get('/ongs', ongController.getAllOngs);
router.get('/ongs/:id', ongController.getOngById);
router.post('/ongs', ongController.createOng);
router.put('/ongs/:id', ongController.updateOng);
router.delete('/ongs/:id', ongController.deleteOng);

module.exports = router;
