const mongoose = require('mongoose');

const schema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('TipoProjeto', schema, 'tipo_projeto');
