const express = require('express');
const router = express.Router();
const model = require('./../models/seminarData.js');

/* GET home page. */
router.get('/Seminare.html', function(req, res, next) {
  res.render('Seminare', {seminare: model.seminare});
});

module.exports = router;