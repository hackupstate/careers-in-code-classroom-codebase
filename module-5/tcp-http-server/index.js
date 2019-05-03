const app = require('express')();
const net = require('net');
const path = require('path');
const uuid = require('uuid');

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
  let data = '';
  req.on('data', d => {
    data += d.toString();
  });
  req.on('end', d => {
    req.body = data;
    next();
  });
});

// Home page
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, 'index.html')))
app.get('/styles.css', (req, res) => res.status(200).sendFile(path.join(__dirname, '/styles.css')))

// Day 2, Day 3, Day 4
app.get('/fruit', (req, res) => res.status(200).send('Apples, Oranges, Banannas'));
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
  if (req.headers['Authorization'] === 'supersecret') {
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

const PORT = parseInt(process.env.PORT || 5000, 10);
app.listen(PORT);
console.log(`* Started HTTP server on port ${PORT}`);
