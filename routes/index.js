var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log(req.body.name);
  console.log(req.body.price);
  res.redirect('/');
  // res.render('index', { title: 'Express' });
  // res.send('post method')
});

module.exports = router;
