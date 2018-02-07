
//npm i expect@1.20.2 mocha@3.0.2 nodemon@1.10.2 supertest@2.0.0 --save-dev
const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server.js');
const {Todo} = require('./../models/todo.js');

const todos = [{text: 'Test todo text'}, {text: "Test todo text"}];

beforeEach( (done) => {
  Todo.remove({}).then(() => {
    Todo.insertMany(todos);
  }).then(() => {
    done();
  });
});

describe('POST /todos', () => {
  it('shoulde create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text);
    })
    .end((err,res) => {
      if (err) {
        return done(err);
      }

      Todo.find().then((todos) => {
        expect(todos.length).toBe(3);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e) => {
        done(e);
      });
    });
  });


  it('should not create todo with wrong body', () => {

    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err,res) => {
      if (err) {
        return done(err);
      }

      Todo.find().then((todos) => {
        expect(todos.length).toBe(2);
        done();
      }).catch((e) => {
        done(e);
      });
    });
  });
});

describe('GET /todos', (done) => {
  it('shoul get all todos', () => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
      expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});
