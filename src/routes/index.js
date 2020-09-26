const express = require('express');
const Index = require('../controllers/index');

const router = express.Router();

router.get('/', Index.ping);

module.exports = router;
