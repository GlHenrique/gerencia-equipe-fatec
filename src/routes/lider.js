const express = require('express');
const lider = require('../controllers/lider');

const router = express.Router();

router.post('/', lider.novo);
router.get('/', lider.listar);
router.get('/:id', lider.listarUm);
router.put('/:id', lider.editar);
router.delete('/', lider.excluir);

module.exports = router;
