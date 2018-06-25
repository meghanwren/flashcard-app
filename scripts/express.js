var express = require('express');
var path = require('path');
var nunjucks = require('nunjucks');
const expressNunjucks = require('express-nunjucks');
var bodyparser = require('body-parser');

const app = express();

app.use(express.static('scripts'));
app.use(express.static('styles'));

nunjucks.configure('templates', {
  autoescape: true, //autocompletes html tags
  express: app
})

app.set('view engine', 'nunjucks');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ //parser reads data and turns it into objects
  extended: false
}));

app.get('/', (req, res) => {
  res.render(path.join(__dirname, '../templates/header-footer.nunjucks'));
});

app.get('/header-footer', (req, res) => {
  res.render(path.join(__dirname, '../templates/header-footer.nunjucks'));
});

app.get('/contact-us', (req, res) => {
  res.render(path.join(__dirname, '../templates/contact-us.nunjucks'));
});

app.get('/note', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/note.nunjucks'));
});

app.get('/careers', (req, res) => {
  res.render(path.join(__dirname, '../templates/careers.nunjucks'));
});

app.get("/create", (req, res) => {
  res.render(path.join(__dirname, '../templates/create.nunjucks'));
});

app.listen(5090);