const express = require('express');
const router = express.Router();
const model = require('./../models/seminarData.js');

/* GET home page. */
router.get('/Seminarformular.html', function(req, res, next) {
  res.render('Seminarformular');
});

module.exports = router;