var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'party' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Hello Casestudy page. */
router.get('/casestudy', function(req, res) {
    res.render('casestudy', { title: 'Casestudy' });
});

module.exports = router;
