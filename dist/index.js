"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const games = require('./routes/games');

const collections = require('./routes/collections');

const app = (0, _express2.default)();
app.use((0, _cors2.default)());
app.use((0, _morgan2.default)('tiny'));
app.use(_bodyParser2.default.json()); // handle routes

app.get('/', function (req, res) {
  res.send('Go Quizzer api');
});
app.use('/games', games);
app.use('/collections', collections); // handle a request if url path is not found

const notFound = (req, res, next) => {
  res.status(404);
  res.json({
    status: 404,
    error: 'not found'
  });
}; // handle an error if occured in the controller


const handleError = (error, req, res, next) => {
  console.log(error);
  res.status(error.status || 500);
  res.json({
    message: error.message || 'failed: not known error',
    msg: error.msg,
    stack: error.stack
  });
};

app.use(notFound); // in-case a url path is not found

app.use(handleError); // in-case an error has occured

const PORT = 5000;
app.listen(PORT, err => {
  if (err) console.log(err);else console.log(`Server started on port: ${PORT}`);
});