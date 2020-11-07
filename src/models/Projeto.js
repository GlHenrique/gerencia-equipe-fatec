const mongoose = require('mongoose');

const schema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  data_inicio: {
    type: Date,
    required: true,
  },
  data_fim: {
    type: Date,
    required: true,
  },
  integrantes: {
    type: [String],
    ref: 'Funcionario',
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  supervisor: {
    type: mongoose.ObjectId,
    ref: 'Funcionario',
    required: true,
  },
  lider: {
    type: mongoose.ObjectId,
    ref: 'Funcionario',
    required: true,
  },
  tipo: {
    type: mongoose.ObjectId,
    ref: 'TipoProjeto',
    required: true,
  },
  status: {
    type: mongoose.ObjectId,
    ref: 'StatusProjeto',
    required: true,
  },
});

module.exports = mongoose.model('Projeto', schema, 'projeto');
