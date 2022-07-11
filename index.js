const express = require('express');
const cors = require('cors');
const route = require('./src/routes/crud.routes');
const connectToDatabase = require('./src/database/bd');

const port = 3000;
const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/characters', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
