const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRoutes = require('./routes/userRoutes.js');
const linkRoutes = require('./routes/linkRoutes.js');

app.use('/api', userRoutes);
app.use('/api', linkRoutes);

app.listen(3000, () => console.log('Escutando na porta 3000'));

