const express = require('express');
const responsableController = require('../controllers/responsableController.js');

const router = express.Router();

router.get('/responsables', responsableController.getAllResponsables);
router.get('/responsables/:id', responsableController.getResponsableById);
router.post('/responsables', responsableController.createResponsable);
router.put('/responsables/:id', responsableController.updateResponsable);
router.delete('/responsables/:id', responsableController.deleteResponsable);

module.exports = router;
