const express = require('express');
const tipoProjeto = require('../controllers/tipo-projeto');

const router = express.Router();

router.post('/', tipoProjeto.novo);
router.get('/', tipoProjeto.listar);
router.get('/:id', tipoProjeto.listarUm);
router.put('/:id', tipoProjeto.editar);
router.delete('/:id', tipoProjeto.excluir);

module.exports = router;
