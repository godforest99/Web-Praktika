const express = require('express');
const router = express.Router();
const model = require('./../models/seminarData.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Dashboard');
  next;
});
router.get('/Dashboard.html', function(req, res, next) {
  res.render('Dashboard');
  res.end();
});

module.exports = router;