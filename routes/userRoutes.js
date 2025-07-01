const express = require('express');
const router = express.Router();

const { register, login, forgotPassword } = require('../controllers/userController');

// Ruta para registro
router.post('/register', register);

// Ruta para login
router.post('/login', login);

// Ruta para enviar link de recuperación de contraseña
router.post('/forgot-password', forgotPassword);

module.exports = router;
