var express = require('express');
var router = express.Router();

var User = require('../models').User;

router.get('/', function(req, res, next) {

  User.findAndCountAll({
    offset: 0,
    limit: 10
  })
  .then(function(result) {
    res.json(result);
  });
});

router.get('/:id', function(req, res, next) {
  User.findById(req.params.id).then(function(result) {
    res.json(result);
  });
});

router.get('/:id/users', function(req, res, next) {
  User.findAndCountAll({
    offset: 0,
    limit: 10,
    where: { user_id: req.params.id }
  })
  .then(function(result) {
    res.json(result);
  });
});

router.get('/delete/:id', function(req, res, next) {
  User.findById(req.params.id).then(function(result) {
    result.destroy();
    res.json({status: "ok"});
  });
});

module.exports = router;
