const express = require('express');
const router = express.Router();
const { createProgress, getProgress } = require('../controllers/progressController');
const authMiddleware = require('../middlewares/authMiddleware');

// ✅ Middleware ya correctamente aplicado
router.post('/', authMiddleware, createProgress);
router.get('/', authMiddleware, getProgress);

module.exports = router;
