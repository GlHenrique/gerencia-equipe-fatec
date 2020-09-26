const express = require('express');
const statusProjeto = require('../controllers/status-projeto');

const router = express.Router();

router.post('/', statusProjeto.novo);
router.get('/', statusProjeto.listar);
router.get('/:id', statusProjeto.listarUm);

module.exports = router;
