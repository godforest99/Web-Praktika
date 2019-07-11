const express = require('express');
const router = express.Router();

/* GET home page. */
router.use(function(req, res, next) {
  res.render('404');
  res.end();
});

module.exports = router;