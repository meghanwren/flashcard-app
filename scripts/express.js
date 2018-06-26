const bodyParser = require('body-parser');
var Card = require('../scripts/cards.js');
const express = require('express');
const mongodb = require('mongodb');
const nunjucks = require('nunjucks');
const app = express();
const mongoClient = mongodb.MongoClient;

nunjucks.configure('templates', {
  autoescape: true,
  express: app
});

app.listen(9000);

app.set('view engine', 'nunjucks');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('scripts'));
app.use(express.static('./styles'));

mongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) {
    console.error(err);
    client.close();
  } else {
    let db = client.db('flashcards');
    let cards = db.collection('cards');

    app.route('/')
      .get((req, res) => {
        res.render('headerfooter');
      });

      app.route('/headerfooter')
      .get((req, res) => {
        res.render('headerfooter');
      });

    app.route('/contactus')
      .get((req, res) => {
        res.render('contactus');
      });

     app.route('/careers')
      .get((req, res) => {
        res.render('careers');
      });

    app.route('/create')
      .get((req, res) => {
        res.render('create');
      })
      .post((req, res) => {
        let c = new Card(req.body);
        console.log(req.body);
        cards.insertOne(c, (err, res1) => {
          cards.find({}).toArray((err, res2) => {
            
            res.render('stack', {data: res2});
          });
        });
      });

      app.route('/delete') 
      .get((req, res) => {
        cards.deleteMany({}, (err, res3) => {
          res.render('stack');
        });
      });
    
    app.route('/stack')
      .get((req, res) => {
        cards.find().toArray((err, res2) => {
          res.render('stack', {data: res2});
        });
      });
  }
});