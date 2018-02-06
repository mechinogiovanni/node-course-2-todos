const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Somethin to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return ('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,2 ));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Giovanni',
  //   age: 32,
  //   location: 'Rome'
  // }, (err, result) => {
  //   if (err) {
  //     return ('unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,2 ));
  // });
  //

  db.close();
});
