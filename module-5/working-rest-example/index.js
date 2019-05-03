const express = require('express');
const app = express();

app.use(express.json());

const STUDENTS = [];

function studentsRoute(req, res) {
  res.status(200);
  res.set('Content-Type', 'text/html');
  res.send('<p>Hello world!</p>');
}

// Create
function studentsCreate(req, res) {
  STUDENTS.push(req.body);
  res.status(201);
  res.send(req.body);
}
app.post('/students', studentsCreate);

// Read
function studentsReadList(req, res) {
  res.status(200);
  res.send({results: STUDENTS});
}
app.get('/students', studentsReadList);
function studentsReadById(req, res) {
  for (let i = 0; i < STUDENTS.length; i++) {
    const student = STUDENTS[i];
    if (student.id === req.params.id) {
      res.status(200);
      res.send(student);
      return;
    }
  }
  res.status(404);
  res.send({detail: 'No such user with id '+req.params.id+' exists!'});
}
app.get('/students/:id', studentsReadById);

// Update
function studentsUpdate(req, res) {
  for (let i = 0; i < STUDENTS.length; i++) {
    if (STUDENTS[i].id === req.params.id) {
      STUDENTS[i] = req.body;

      res.status(200);
      res.send(STUDENTS[i]);
      return;
    }
  }
  res.status(404);
  res.send({detail: 'No such user with id '+req.params.id+' exists!'});
}
app.put('/students/:id', studentsUpdate);

// Delete
function studentsDelete(req, res) {
  for (let i = 0; i < STUDENTS.length; i++) {
    if (STUDENTS[i].id === req.params.id) {
      STUDENTS.splice(i, 1);

      res.status(204);
      res.end();
      return;
    }
  }
  res.status(404);
  res.send({detail: 'No such user with id '+req.params.id+' exists!'});
}
app.delete('/students/:id', studentsDelete);

app.listen(5000);
