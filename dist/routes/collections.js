"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _db = require("../db");

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.post('/', (req, res) => {
  console.log(req.body);

  const docRef = _db2.default.collection('collections').doc();

  docRef.set({ ...req.body
  }).then(data => res.send(data)).catch(err => res.send(err));
});
router.get('/', (req, res) => {
  _db2.default.collection('collections').get().then(snapshot => snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))).then(docs => res.send(docs)).catch(err => res.send(err));
});
router.get('/:id', function (req, res) {
  _db2.default.collection('collections').doc(req.query.id).get().then(doc => res.send({
    id: doc.id,
    ...doc.data()
  })).catch(err => res.send(err));
});
module.exports = router;