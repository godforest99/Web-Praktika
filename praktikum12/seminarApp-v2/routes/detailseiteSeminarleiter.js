const express = require('express');
const router = express.Router();
const model = require('./../models/seminarData.js');

/* GET home page. */
router.get('/DetailseiteSeminarleiter.html', function(req, res, next) {
  res.render('DetailseiteSeminarleiter');
});

module.exports = router;