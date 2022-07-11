const { models } = require('mongoose');
const Crud = require('../models/crud');

const findAllCrudServices = async () => {
  const crudes = await Crud.find();
  console.log(crudes);
  return crudes;
};

const findByIdCrudServices = async (Id) => {
  const oneCrud = await Crud.findById(Id);
  return oneCrud;
};

const createCrudServices = async (novoCrud) => {
  const createdCrud = await Crud.create(novoCrud);
  return createdCrud;
};

const updateCrudServices = async (id, crudEditado) => {
  const updateCrud = await Crud.findByIdAndUpdate(id, crudEditado);
  return updateCrud;
};

const deleteCrudServices = async (id) => {
  return await Crud.findByIdAndDelete(id);
};

module.exports = {
  findAllCrudServices,
  findByIdCrudServices,
  createCrudServices,
  updateCrudServices,
  deleteCrudServices,
};
