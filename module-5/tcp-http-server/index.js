const app = require('express')();
const net = require('net');
const path = require('path');
const uuid = require('uuid');
const fs = require('fs');

// TCP SERVER

const choice = (...array) => array[Math.round(Math.random() * array.length)];

const QUESTION_IDENTIFIERS = {
  FAV: (args, write) => {
    const a = args.join(' ');

    const answers = {
      apple: 'macintosh',
      car: 'volvo',
      'operating system': 'linux',
      flower: 'violet',
    };

    const answer = answers[a];
    if (answer) {
      write(`ANS ${answer}`);
    } else {
      write(`ERR cannot answer that particular question`);
    }
  },
  MAN: (args, write) => {
    if (args[0] === 'cpus') {
      const numCpus = require('os').cpus().length;
      write(`ANS I have ${numCpus} cpu cores.`);
    } else {
      write('ERR cannot answer that particular question');
    }
  },
  IST: (args, write) => {
    if (args[0] === 'time') {
      const date = (new Date()).toISOString();
      write(`ANS The time is ${date.slice(date.indexOf('T')+1)}`);
    } else if (args[0] === 'day') {
      const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][(new Date()).getDay()];
      write(`ANS It is a ${day}`);
    } else {
      write('ERR cannot answer that particular question');
    }
  },
}

const server = net.createServer(socket => {
  let data = '';
  socket.on('data', (buf) => {
    data += buf.toString();
    if (data.endsWith('\n')) {
      const words = data.trim().split(' ');
      if (words.length <= 1) {
        socket.write('ERR please specify a question identifier\r\n');
        return;
      }

      const [questionIdentifier, ...args] = words;
      const func = QUESTION_IDENTIFIERS[questionIdentifier];
      if (!func) {
        socket.write(`ERR the given question identifier ${questionIdentifier} is not known\r\n`);
        return;
      }

      func(args, data => socket.write(data));
      socket.write('\r\n');
      data = '';
    }
  });
});

const TCP_PORT = parseInt(process.env.TCP_PORT || 4000, 10);
server.listen(TCP_PORT, '0.0.0.0');
console.log(`* Started TCP server on port ${TCP_PORT}`);



// HTTP SERVER
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Method', '*');
  res.set('Access-Control-Allow-Headers', '*');
  next();
});

app.use((req, res, next) => {
  req.setTimeout(
    3600 * 1000, // 1 hour, students were having issues with the request timing out
    () => res.send('Request has timed out, please try again!')
  );
  let data = '';
  req.on('data', d => {
    data += d.toString();
  });
  req.on('end', d => {
    if (data.trim().length > 0) {
      try {
        req.body = JSON.parse(data);
      } catch (err) {
        req.body = data;
      }
    }
    next();
  });
});

// Home page
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, 'index.html')))
app.get('/styles.css', (req, res) => res.status(200).sendFile(path.join(__dirname, '/styles.css')))

// Day 2, Day 3, Day 4
app.get('/fruit', (req, res) => res.status(200).send('Apples, Oranges, Banannas'));
app.get('/apples', (req, res) => res.status(200).send('Apples!'));
app.get('/oranges', (req, res) => res.status(200).send('Oranges.'));
app.post('/banannas', (req, res) => res.status(200).send('Banannas?'));
app.post('/echo', (req, res) => res.status(200).send(req.body));
function frequencies(body) {
  const words = body.toString().split(' ');
  return words.reduce((frequencies, word) => {
    frequencies[word] = frequencies[word] ? frequencies[word] + 1 : 1;
    return frequencies;
  }, {});
}
app.post('/text-processing/most-common-word', (req, res) => {
  const freqs = frequencies(req.body);
  const maxKey = Math.max.apply(Math, Object.keys(frequencies).map(key => parseInt(key, 10)));
  res.status(200);
  res.send(freqs[maxKey.toString()]);
});
app.post('/text-processing/frequencies', (req, res) => {
  const freqs = frequencies(req.body);
  res.status(200);
  res.send(Object.entries(freqs).map(([key, value]) => `${key}: ${value}`).join('\n')+'\n');
});
app.get('/lockbox', (req, res) => {
  if (req.headers['authorization'] === 'supersecret') {
    res.status(201).send('You have unlocked the box! Your instructor is impressed.');
  } else {
    res.status(401).send('You have not provides the right password to unlock the box. Try again!');
  }
});

// Day 5: Headers
const TOKENS = [];
app.post('/tokens', (req, res) => {
  const token = uuid.v4().replace('-', '');
  token.push({
    key: token,
    permissions: ['read'],
  });
  res.status(201).send(`Your token was created! It is ${token}.`);
});
app.get('/protected-resource', (req, res) => {
  const parts = req.headers['Authorization'];
  if (parts.length < 2) {
    return res.status(401).send('You did not specify a token, that is required for this endpoint.');
  }
  if (parts[0].toLowerCase() !== 'bearer') {
    return res.status(400).send('Please add an authorization type (bearer, basic, etc) before your authorization data.');
  }
  const token = parts[1];
  if (!TOKENS.find(t => t.key === token)) {
    return res.status(403).send(`Your token was not found in the server's registry.`);
  }
  return res.status(200).send('You specified a valid token! Thank you.');
});

// Day 6: JSON
app.get('/json', (req, res) => res.status(200).send({
  hello: 'world',
  numbers: [1, 2, 3, 4, 5],
}));
app.get('/number-list', (req, res) => res.status(200).send({
  numbers: [
    7529,
    5824,
    78,
    627,
    598,
    3151,
    3857,
    12,
    3,
    52614,
    395,
    817,
    36,
    4781,
    39,
    75,
    42,
    3856,
    7143,
    1085,
    26,
  ],
}));

// Day 7: REST API design
function getFile(filename) {
  try {
    const contents = fs.readFileSync(filename);
    return JSON.parse(contents);
  } catch (e) {
    return [];
  }
}
function saveFile(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data));
}
const STUDENTS_FILE = '/tmp/students.json';
const ASSIGNMENTS_FILE = '/tmp/assignments.json';
const STUDENTS = getFile(STUDENTS_FILE);
const ASSIGNMENTS = getFile(ASSIGNMENTS_FILE);

function studentsCreate(req, res) {
  const student = {...req.body, id: uuid.v4()};
  STUDENTS.push(student);
  res.status(201);
  res.send(student);

  saveFile(STUDENTS_FILE, STUDENTS);
}
app.post('/students', studentsCreate);
function studentsReadByIdAssignmentsCreate(req, res) {
  const assignment = {...req.body, id: uuid.v4(), studentId: req.params.id};
  ASSIGNMENTS.push(assignment);
  res.status(201);
  res.send(assignment);

  saveFile(ASSIGNMENTS_FILE, ASSIGNMENTS);
}
app.post('/students/:id/assignments', studentsReadByIdAssignmentsCreate);

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
function studentsReadByIdAssignmentsList(req, res) {
  const assignments = [];
  for (let i = 0; i < ASSIGNMENTS.length; i++) {
    const assignment = ASSIGNMENTS[i];
    if (assignment.studentId === req.params.id) {
      assignments.push(assignment);
    }
  }
  res.send({results: assignments});
  res.end();
}
app.get('/students/:id/assignments', studentsReadByIdAssignmentsList);
function studentsReadByIdAssignmentsReadById(req, res) {
  for (let i = 0; i < ASSIGNMENTS.length; i++) {
    const assignment = ASSIGNMENTS[i];
    if (assignment.id === req.params.aid && assignment.studentId === req.params.id) {
      res.status(200);
      res.send(assignment);
      return;
    }
  }
  res.status(404);
  res.send({detail: 'No such assignment with student id '+req.params.id+' and assignment id '+req.params.aid+' exists!'});
}
app.get('/students/:id/assignments/:aid', studentsReadByIdAssignmentsReadById);

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

  saveFile(STUDENTS_FILE, STUDENTS);
}
app.put('/students/:id', studentsUpdate);
function studentsAssignmentsUpdate(req, res) {
  for (let i = 0; i < ASSIGNMENTS.length; i++) {
    const assignment = ASSIGNMENTS[i];
    if (assignment.id === req.params.aid && assignment.studentId === req.params.id) {
      ASSIGNMENTS[i] = req.body;
      ASSIGNMENTS[i].id = req.params.aid;
      ASSIGNMENTS[i].studentId = req.params.id;

      res.status(200);
      res.send(ASSIGNMENTS[i]);
      return;
    }
  }
  res.status(404);
  res.send({detail: 'No such assignment with student id '+req.params.id+' and assignment id '+req.params.aid+' exists!'});

  saveFile(ASSIGNMENTS_FILE, ASSIGNMENTS);
}
app.put('/students/:id/assignments/:aid', studentsAssignmentsUpdate);

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

  saveFile(STUDENTS_FILE, STUDENTS);
}
app.delete('/students/:id', studentsDelete);
function studentsAssignmentsDelete(req, res) {
  for (let i = 0; i < ASSIGNMENTS.length; i++) {
    if (ASSIGNMENTS[i].id === req.params.aid && ASSIGNMENTS[i].studentId === req.params.id) {
      ASSIGNMENTS.splice(i, 1);

      res.status(204);
      res.end();
      return;
    }
  }
  res.status(404);
  res.send({detail: 'No such user with id '+req.params.id+' exists!'});

  saveFile(ASSIGNMENTS_FILE, ASSIGNMENTS);
}
app.delete('/students/:id/assignments/:aid', studentsDelete);


const PORT = parseInt(process.env.PORT || 5000, 10);
app.listen(PORT);
console.log(`* Started HTTP server on port ${PORT}`);
