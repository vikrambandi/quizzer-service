"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _db = require("../db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router(); // define the about route


router.post('/', (req, res) => {
  console.log(req.body);

  const docRef = _db2.default.collection('games').doc('game');

  docRef.set({ ...req.body
  }).then(data => res.send('/games api post request')).catch(err => res.send(err));
});
router.get('/:id', function (req, res) {
  console.log(req.body);
  res.send('/games api get request');
});
module.exports = router;