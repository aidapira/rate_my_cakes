const path = require('path');
const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.static(__dirname + "/public/dist/public"));
app.use(session({
  secret: 'cake',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(express.json()); // enables json to be received
// to parse form data, req.body will be undefined without
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all("*", (request, response) => {
  response.sendFile(path.join(__dirname, "/public/dist/public/index.html"))
});

app.listen(3000, () => console.log('listening on port 3000'));
