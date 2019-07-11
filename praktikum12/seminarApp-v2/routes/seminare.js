const express = require('express');
const router = express.Router();
const model = require('./../models/seminars.js');

/* GET home page. */
router.get('/seminarliste', function(req, res, next) {
  res.render('Seminare', {seminare: model.seminare});
});

module.exports = router;