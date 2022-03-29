const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const MovieController = require('./controllers/movieController');

app.post('/movies', MovieController.create);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Ouvindo a porta: ${PORT}.`);
});
