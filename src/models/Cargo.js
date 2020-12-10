const mongoose = require('mongoose');

const schema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  permanent: {
    type: Boolean,
    required: false,
  }
});

module.exports = mongoose.model('Cargo', schema, 'cargo');
