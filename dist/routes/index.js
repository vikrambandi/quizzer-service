"use strict";

var _express = _interopRequireDefault(require("express"));

var _db = _interopRequireDefault(require("../db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var router = _express["default"].Router(); // middleware that is specific to this router


router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
}); // define the about route

router.post('/', function (req, res) {
  console.log(req.body);

  var docRef = _db["default"].collection('games').doc('game');

  docRef.set(_objectSpread({}, req.body)).then(function (res) {
    return res.send('/games api post request');
  })["catch"](function (err) {
    return res.send(err);
  });
});
router.get('/:id', function (req, res) {
  console.log(req.body);
  res.send('/games api get request');
});
module.exports = router;