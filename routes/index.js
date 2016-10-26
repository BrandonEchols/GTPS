var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'GTPS Home' });
});

router.get('duplexA', function(req, res, next) {
  res.render('duplexA.ejs', { title: 'GTPS Home' });
});
module.exports = router;
