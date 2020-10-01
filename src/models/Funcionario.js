const mongoose = require('mongoose');

const schema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  data_nascimento: {
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

module.exports = mongoose.model('Funcionario', schema, 'funcionario');
