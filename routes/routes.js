const express = require('express');
const router = express.Router();
const uData = require('../users/users.js');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost/robotsRedux';

// Use connect method to connect to the server

router.get('/', function(req, res) {

});

router.get('/index', function(req, res){
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to robotsRedux");
    const robots = db.collection('robots');
    const users = robots.find().toArray(function(err, docs) {
      res.render('index', {users: docs});
    });
    db.close();
  });
  // res.render('index', uData);
});

router.get('/users/:id', function(req, res)  {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to robotsRedux");
    const robots = db.collection('robots');
    robots.findOne({id: req.params.id}).then(function(gotBot) {
      console.log(gotBot);
      res.render('userpage', {gotBot});
    });
    db.close();
  });

  // res.render('userpage', uData.users[req.params.id - 1]);
})

module.exports = router;
