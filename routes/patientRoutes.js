const express = require('express');
const router = express.Router();
const { createPatient, getPatients, deletePatient } = require('../controllers/patientController');
const auth = require('../middlewares/authMiddleware');

// Rutas protegidas por token
router.post('/', auth, createPatient);
router.get('/', auth, getPatients);
router.delete('/:id', auth, deletePatient);

module.exports = router;
