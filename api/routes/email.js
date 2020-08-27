var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/send', function(req, res, next) {
  res.json({status: 1, message: 'User API working'});
});

module.exports = router;
