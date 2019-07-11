const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/seminarneu', function(req, res, next) {
  res.render('Seminarformular');
});

module.exports = router;