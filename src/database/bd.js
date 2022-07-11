const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(
      'mongodb+srv://lazopaiva:01012000lazaros@apirickandmorty.87tiqzt.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => console.log(`mongoDB conectado!`))
    .catch((error) =>
      console.log(`erro ao conectar com o mongoDB, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
