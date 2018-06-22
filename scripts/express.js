var express = require('express');
var path = require('path');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/index/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/contact/', (req, res) => {
  res.sendFile(path.join(__dirname, '../contact-us.html'));
});

app.get('/actual/', (req, res) => {
  res.sendFile(path.join(__dirname, '../actual-flashcard.html'));
});

app.get('/career/', (req, res) => {
  res.sendFile(path.join(__dirname, '../careers.html'));
});

app.get('/create/', (req, res) => {
  res.sendFile(path.join(__dirname, '../create.html'));
});

app.listen(5090);
