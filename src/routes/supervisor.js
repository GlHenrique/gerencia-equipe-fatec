const express = require('express');
const supervisor = require('../controllers/supervisor');

const router = express.Router();

router.post('/', supervisor.novo);
router.get('/', supervisor.listar);
router.get('/:id', supervisor.listarUm);
router.put('/:id', supervisor.editar);
router.delete('/:id', supervisor.excluir);

module.exports = router;
