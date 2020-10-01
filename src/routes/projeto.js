const express = require('express');
const projeto = require('../controllers/projeto');

const router = express.Router();

router.post('/', projeto.novo);
router.get('/', projeto.listar);
router.get('/:id', projeto.listarUm);
router.put('/:id', projeto.editar);
router.delete('/', projeto.excluir);

module.exports = router;
