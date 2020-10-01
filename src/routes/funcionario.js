const express = require('express');
const funcionario = require('../controllers/funcionario');

const router = express.Router();

router.post('/', funcionario.novo);
router.get('/', funcionario.listar);
router.get('/:id', funcionario.listarUm);
router.put('/:id', funcionario.editar);
router.delete('/', funcionario.excluir);

module.exports = router;
