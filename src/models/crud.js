const mongoose = require('mongoose');

const CrudSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const Crud = mongoose.model('apiRickAndMorty', CrudSchema);

module.exports = Crud;
