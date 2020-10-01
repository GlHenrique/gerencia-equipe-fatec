const express = require('express');
const cargo = require('../controllers/cargo');

const router = express.Router();

router.post('/', cargo.novo);
router.get('/', cargo.listar);
router.get('/:id', cargo.listarUm);
router.put('/:id', cargo.editar);
router.delete('/', cargo.excluir);

module.exports = router;
