const mongoose = require('mongoose');

const schema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  data_inicio: {
    type: Date,
    required: true,
  },
  data_fim: {
    type: Date,
    required: true,
  },
  salario: {
    type: String,
    required: true,
  },
  cargo: {
    type: mongoose.ObjectId,
    ref: 'Cargo',
    required: true,
  },
  supervisor: {
    type: mongoose.ObjectId,
    ref: 'Supervisor',
    required: true,
  },
});

module.exports = mongoose.model('Projeto', schema, 'projeto');
