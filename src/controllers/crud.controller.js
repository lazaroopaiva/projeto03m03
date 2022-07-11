const crudServices = require('../service/crud.services');
const mongoose = require('mongoose');

const findAllCrudController = async (req, res) => {
  const cruds = await crudServices.findAllCrudServices();
  if (cruds.length == 0) {
    return res
      .status(400)
      .send({ message: `Não existe nenhum personagem cadastrado ` });
  }
  res.send(cruds);
};

const findByIdCrudController = async (req, res) => {
  const parametroId = req.params.id;
  const escolhaCrud = await crudServices.findByIdCrudServices(parametroId);
  if (!escolhaCrud) {
    return res.status(400).send({ message: 'Esse personagem não existe!' });
  }
  res.send(escolhaCrud);
};

const createCrudController = async (req, res) => {
  const crud = req.body;
  if (!crud || !crud.name || !crud.imageUrl) {
    return res
      .status(400)
      .send({ message: 'Envie os dois campos do personagem!' });
  }
  const novoCrud = await crudServices.createCrudServices(crud);

  res.send(novoCrud);
};

const updateCrudController = async (req, res) => {
  const idParam = req.params.id;
  const crudEditado = req.body;
  console.log();
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido' });
  }
  if (!crudEditado || !crudEditado.name || !crudEditado.imageUrl) {
    return res
      .status(400)
      .send({ message: 'Envie os dois campos do personagem!' });
  }

  const updateCrud = await crudServices.updateCrudServices(
    idParam,
    crudEditado,
  );
  console.log(updateCrud);
  res.send(updateCrud);
};

const deleteCrudController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido' });
  }
  const escolhaCrud = await crudServices.deleteCrudServices(idParam);
  if (!escolhaCrud) {
    return res.status(400).send({ message: 'Personagem não Encontrado' });
  }
  res.send({ message: 'Personagem deletado com sucesso!' });
};

module.exports = {
  findAllCrudController,
  findByIdCrudController,
  createCrudController,
  updateCrudController,
  deleteCrudController,
};
