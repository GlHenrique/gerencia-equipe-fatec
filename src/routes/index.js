const express = require('express');
const Index = require('../controllers/index');

const router = express.Router();

router.get('/', Index.listar);

module.exports = router;
