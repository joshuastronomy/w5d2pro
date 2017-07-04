const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const mainrouter = require('./routes/routes');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use('/public', express.static('public'));

app.use('/', mainrouter);

app.listen(3000, function () {
  console.log('User directory online...');
})
