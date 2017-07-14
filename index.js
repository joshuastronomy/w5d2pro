const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const uData = require('./users/users.js');
uData.title = "Directory";

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  res.send(uData);
})

app.get('/index', function(req, res){
  res.render('index', uData);
})

app.get('/users/:id', function(req, res)  {
  res.render('userpage', uData.users[req.params.id - 1]);
})

app.listen(process.env.PORT || 3000, function () {
  console.log('User directory online...');
})
