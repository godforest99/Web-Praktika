const express = require('express');
const router = express.Router();
const model = require('./../models/seminarData.js');

/* GET home page. */
router.get('/DetailseiteSeminar.html', function(req, res, next) {
  res.render('DetailseiteSeminar');
});

module.exports = router;