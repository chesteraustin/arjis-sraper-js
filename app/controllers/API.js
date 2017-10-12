const express = require('express');
const router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/API/test', function (req, res, next) {
  res.json("okay!")
});
