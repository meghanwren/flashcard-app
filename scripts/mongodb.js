const mongodb = require('mongodb');
const dbClient = mongodb.MongoClient;

dbClient.connect('mongodb://localhost:27017', (error, client) => { //mongodb has their own protocol
  if(error) {
    console.error(error);
    client.close();
  }
  var db = client.db('flashcard');
  var topics = db.collection('topic');

  topics.insertOne({
    "firstName": "fred",
    "lastName": "belotte"
  }).then(() =>{
  topics.find({}).toArray().then((data) => {
    console.log(data);
  });
  //insertOne
  //updateOne
  //deleteOne
  //findOne
  
 // client.close();
  });
  
});