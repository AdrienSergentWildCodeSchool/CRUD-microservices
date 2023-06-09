const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let authors = [
  { id: 1, name: 'Auteur 1' },
  { id: 2, name: 'Auteur 2' },
  { id: 3, name: 'Auteur 3' }
];

app.get('/authors', (req, res) => {
  res.json(authors);
});

app.get('/authors/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const author = authors.find(author => author.id === id);

  if (author) {
    res.json(author);
  } else {
    res.status(404).json({ error: 'Auteur non trouvé' });
  }
});

app.listen(4000, () => {
  console.log('Microservice de gestion des auteurs démarré sur le port 4000');
});