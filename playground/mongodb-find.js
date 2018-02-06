const {
  MongoClient,
  ObjectId
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectId("5a799da44b79bf82f9d7abdf")
  // }).toArray()
  //   .then((docs) => {
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  //   }
  // );

  // db.collection('Todos').find().count()
  //   .then((count) => {
  //     console.log(`todos count: ${count}`);
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  //   }
  // );

  db.collection('Users')
    .find({
      name: 'Giovanni'
    })
    .toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });


  db.close();
});
