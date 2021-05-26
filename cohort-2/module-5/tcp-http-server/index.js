const app = require('express')();
const net = require('net');
const path = require('path');
const uuid = require('uuid');
const session = require('express-session');
const fs = require('fs');
const fetch = require('node-fetch');

const sessionMiddleware = session({
  secret: 'wxSA9TipQyLdKUNmPSaVpVnDDdh3pk/FadecsBcYVl',
  resave: false,
  saveUninitialized: true,
});

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
  res.set('Access-Control-Allow-Methods', '*');
  res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Credentials', 'true');
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

app.use((req, res, next) => {
  if (req.headers['host'] === 'hackupstate.com') {
    fetch(`https://hackupstate.com/${req.originalUrl}`, { headers: req.headers }).then(r => {
      res.status(res.statusCode);
      r.body.pipe(res);
    });
    return
  }
  if (req.headers['host'] === 'careersincode.org') {
    fetch(`https://hackupstate.com/${req.originalUrl}`, { headers: req.headers }).then(r => {
      res.status(res.statusCode);
      r.body.pipe(res);
    });
    return
  }
  next();
});

// Home page
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, 'index.html')))
app.get('/styles.css', (req, res) => res.status(200).sendFile(path.join(__dirname, '/styles.css')))

// Day 2, Day 3, Day 4
app.get('/fruit', (req, res) => res.status(200).send('Apples, Oranges, Bananas'));
app.get('/apples', (req, res) => res.status(200).send('Apples!'));
app.get('/oranges', (req, res) => res.status(200).send('Oranges.'));
app.post('/bananas', (req, res) => res.status(200).send('Bananas?'));
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
  const entries = Object.entries(freqs);
  const keys = entries.map(i => i[0]), values = entries.map(i => i[1]);
  const max = Math.max.apply(Math, values);
  const maxKey = keys[values.indexOf(max)]
  res.status(200).send(maxKey+'\n');
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
  const token = uuid.v4().replace(/-/g, '');
  TOKENS.push({
    key: token,
    permissions: ['read'],
  });
  res.status(201).send(`Your token was created! It is ${token}.`);
});
app.get('/protected-resource', (req, res) => {
  const parts = (req.headers['authorization'] || '').split(' ');
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

app.post('/image-upload', (req, res) => {
  if (!req.headers['content-type']) {
    res.status(400).send('Please sent a content type!');
  }
  if (!['image/png', 'image/jpeg'].includes(req.headers['content-type'])) {
    res.status(400).send('Image data unable to be processed - ensure you specify the correct content-type!');
  }
  res.status(200).send('Image successfully received, thanks!');
});

// Day 6: JSON
app.get('/users1', (req, res) => {
  res.status(200).send('Ryan Gaus-teacher-201 E Jefferson St-Syracuse-NY;Suzie John-student-235 Harrison St-Syracuse-NY');
});
app.get('/users2', (req, res) => {
  res.status(200).send('Ryan Gaus-teacher-201 E Jefferson St-Syracuse-NY-13202;Suzie John-student-235 Harrison St-Syracuse-NY-13202');
});
app.get('/users3', (req, res) => {
  res.status(200).send('Ryan Gaus-201 E Jefferson St-Syracuse-NY-13202;Suzie John-235 Harrison St-Syracuse-NY-13202');
});
app.get('/users4', (req, res) => {
  res.status(200).send('Jean-Luc Picard-teacher-201 E Jefferson St-Syracuse-NY;Suzie John-student-235 Harrison St-Syracuse-NY');
});
app.get('/json', (req, res) => res.status(200).send({
  hello: 'world',
  numbers: [1, 2, 3, 4, 5],
}));
app.get('/number-list', (req, res) => res.status(200).send([
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
]));

// Day 7: REST API design
app.get('/users', (req, res) => {
  const page = (parseInt(req.query.page, 10) || 1) - 1;
  if (isNaN(page)) {
    return res.status(400).send({detail: "Bad page parameter"});
  }
  const pageSize = req.query.size || 10;
  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;

  let allData = require('./users.json');
  if (req.query.city) {
    allData = allData.filter(d => d.city.indexOf(req.query.city) >= 0);
  }

  const pageOfData = allData.slice(startIndex, endIndex);
  res.status(200).send({
    total: allData.length,
    page: page+1,
    nextPageAvailable: (allData.length - 1) > endIndex,
    data: pageOfData,
  });
});

function getFile(filename) {
  try {
    const contents = fs.readFileSync(filename);
    return JSON.parse(contents);
  } catch (e) {
    return [];
  }
}
function saveFile(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}
const STUDENTS_FILE = '/tmp/students.json';
const ASSIGNMENTS_FILE = '/tmp/assignments.json';
const STUDENTS = getFile(STUDENTS_FILE);
const ASSIGNMENTS = getFile(ASSIGNMENTS_FILE);

function studentsCreate(req, res) {
  if (typeof req.body === 'string') {
    res.status(400).send({detail: "Body is not formatted correctly!"});
    return
  }

  const student = {...req.body, id: uuid.v4()};
  STUDENTS.push(student);
  res.status(201);
  res.send(student);

  saveFile(STUDENTS_FILE, STUDENTS);
}
app.post('/students', studentsCreate);
function studentsReadByIdAssignmentsCreate(req, res) {
  if (typeof req.body === 'string') {
    res.status(400).send({detail: "Body is not formatted correctly!"});
    return
  }

  const assignment = {...req.body, id: uuid.v4(), studentId: req.params.id};
  ASSIGNMENTS.push(assignment);
  res.status(201);
  res.send(assignment);

  saveFile(ASSIGNMENTS_FILE, ASSIGNMENTS);
}
app.post('/students/:id/assignments', studentsReadByIdAssignmentsCreate);

// Read
function studentsReadList(req, res) {
  let filtered = STUDENTS;

  if (req.query.name) {
    filtered = filtered.filter(s => (s.name || '').indexOf(req.query.name) >= 0);
  }

  res.status(200);
  res.send({results: filtered});
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
  if (typeof req.body === 'string') {
    res.status(400).send({detail: "Body is not formatted correctly!"});
    return
  }

  for (let i = 0; i < STUDENTS.length; i++) {
    if (STUDENTS[i].id === req.params.id) {
      STUDENTS[i] = Object.assign({}, STUDENTS[i], req.body);

      res.status(200);
      res.send(STUDENTS[i]);
      saveFile(STUDENTS_FILE, STUDENTS);
      return;
    }
  }
  res.status(404);
  res.send({detail: 'No such user with id '+req.params.id+' exists!'});

  saveFile(STUDENTS_FILE, STUDENTS);
}
app.put('/students/:id', studentsUpdate);
function studentsAssignmentsUpdate(req, res) {
  if (typeof req.body === 'string') {
    res.status(400).send({detail: "Body is not formatted correctly!"});
    return
  }

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
app.delete('/students/:id/assignments/:aid', studentsAssignmentsDelete);












const CARS_FILE = '/tmp/cars.json';
const CARS = getFile(CARS_FILE);

function carsCreate(req, res) {
  if (typeof req.body === 'string') {
    res.status(400).send({detail: "Body is not formatted correctly!"});
    return
  }

  const car = {...req.body, id: uuid.v4()};
  CARS.push(car);
  res.status(201).send(car);

  saveFile(CARS_FILE, CARS);
}
app.post('/cars', carsCreate);

// Read
function carsReadList(req, res) {
  res.status(200).send({results: CARS});
}
app.get('/cars', carsReadList);
function carsReadById(req, res) {
  for (let i = 0; i < CARS.length; i++) {
    const car = CARS[i];
    if (car.id === req.params.id) {
      res.status(200).send(car);
      return;
    }
  }
  res.status(404).send({detail: 'No such car with id '+req.params.id+' exists!'});
}
app.get('/cars/:id', carsReadById);

// Update
function carsUpdate(req, res) {
  if (typeof req.body === 'string') {
    res.status(400).send({detail: "Body is not formatted correctly!"});
    return
  }

  for (let i = 0; i < CARS.length; i++) {
    if (CARS[i].id === req.params.id) {
      CARS[i] = Object.assign({}, CARS[i], req.body);

      res.status(200);
      res.send(CARS[i]);
      saveFile(CARS_FILE, CARS);
      return;
    }
  }
  res.status(404);
  res.send({detail: 'No such car with id '+req.params.id+' exists!'});

  saveFile(CARS_FILE, CARS);
}
app.put('/cars/:id', carsUpdate);

// Delete
function carsDelete(req, res) {
  for (let i = 0; i < CARS.length; i++) {
    if (CARS[i].id === req.params.id) {
      CARS.splice(i, 1);
      res.status(204).end();
      return;
    }
  }
  res.status(404);
  res.send({detail: 'No such car with id '+req.params.id+' exists!'});

  saveFile(CARS_FILE, CARS);
}
app.delete('/cars/:id', carsDelete);




// Mock version of Joey's API
const PRODUCT_DATABASE = require('./joey-api-mock-data');

const getCart = (req) => {
  const itemsInCart = req.session.cart.items
    .map((cartItem) => {
      const item = PRODUCT_DATABASE.find((dbItem) => dbItem.id === cartItem.id)
      return {
        ...cartItem,
        name: item.name,
        price: item.price,
        thumbnail: item.thumbnail,
      };
    })
  const cartResponse = {
    items: itemsInCart,
  }
  return cartResponse
}

app.get('/api/product-search', (req, res) => {
  const { query, filterBy, sortBy } = req.query;
  let itemsToReturn = PRODUCT_DATABASE;
  if (query) {
    const regex = new RegExp(query, "ig");
    itemsToReturn = itemsToReturn.filter((i) => i.name.match(regex));
  }

  let filteredItemsToReturn = itemsToReturn;
  if (filterBy) {
    filteredItemsToReturn = filteredItemsToReturn.filter(
      (i) => i.attributes.indexOf(filterBy) >= 0
    )
  }
  let sortedItemsToReturn = filteredItemsToReturn
  switch (sortBy) {
    case "best-selling":
      sortedItemsToReturn = sortedItemsToReturn.sort(
        (a, b) => b.rating - a.rating
      )
      break
    case "price-ascending":
      sortedItemsToReturn = sortedItemsToReturn.sort(
        (a, b) => a.price - b.price
      )
      break
    case "price-descending":
      sortedItemsToReturn = sortedItemsToReturn.sort(
        (a, b) => b.price - a.price
      )
      break
    default:
    // allow pass-thru
  }
  res.status(200).send({items: sortedItemsToReturn});
});

app.get("/api/product/:id", (req, res) => {
  const item = PRODUCT_DATABASE.find((i) => i.id === req.params.id);
  res.status(200).send(item);
});

const injectCartIntoSessionMiddleware = (req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = {items: []};
  }
  next();
}

app.get(
  "/api/cart",
  sessionMiddleware,
  injectCartIntoSessionMiddleware,
  (req, res) => res.status(200).send(getCart(req)),
);

app.put("/api/cart-add", sessionMiddleware, injectCartIntoSessionMiddleware, (req, res) => {
  if (!req.body.id) {
    return res.status(400).send({detail: 'Required body key id was not found.'});
  }
  if (!req.body.quantity) {
    return res.status(400).send({detail: 'Required body key quantity was not found.'});
  }
  const { quantity, id } = req.body;
  const itemInCart = req.session.cart.items.find((i) => i.id === id)
  if (itemInCart) {
    req.session.cart.items = req.session.cart.items.map((i) => {
      if (i.id === id) {
        i.quantity += quantity;
      }
      return i
    })
  } else {
    req.session.cart.items.push({ id, quantity });
  }
  res.status(200).send(getCart(req));
});

app.put("/api/cart-remove", sessionMiddleware, injectCartIntoSessionMiddleware, (req, res) => {
  if (!req.body.removeAll) {
    if (!req.body.id) {
      return res.status(400).send({detail: 'Required body key id was not found.'});
    }
    if (typeof req.body.quantity === 'undefined') {
      return res.status(400).send({detail: 'Required body key quantity was not found.'});
    }
  }

  const { quantity = 0, id, removeAll } = req.body;
  const itemInCart = req.session.cart.items.find((i) => i.id === id)
  if (removeAll || (itemInCart && itemInCart.quantity - quantity <= 0)) {
    req.session.cart.items = req.session.cart.items.filter((i) => i.id !== id)
  } else if (itemInCart) {
    req.session.cart.items = req.session.cart.items.map((i) => {
      if (i.id === id) {
        i.quantity = i.quantity - quantity
      }
      return i
    })
  }

  res.status(200).send(getCart(req));
});


const PORT = parseInt(process.env.PORT || 5000, 10);
app.listen(PORT);
console.log(`* Started HTTP server on port ${PORT}`);
