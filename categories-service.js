const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let categories = [
  { id: 1, name: 'Fiction' },
  { id: 2, name: 'Non-fiction' },
  { id: 3, name: 'Science-fiction' }
];

app.get('/categories', (req, res) => {
  res.json(categories);
});

app.get('/categories/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const category = categories.find(category => category.id === id);

  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ error: 'Catégorie non trouvée' });
  }
});

app.listen(5000, () => {
  console.log('Microservice de gestion des catégories démarré sur le port 5000');
});