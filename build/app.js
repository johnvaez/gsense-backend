"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("./constant/config"));

var _endpoint = _interopRequireDefault(require("./constant/endpoint"));

var _auth = _interopRequireDefault(require("./controllers/auth.controller"));

var _user = _interopRequireDefault(require("./controllers/user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)(); // Settings

app.set("port", _config.default.PORT); // Middlewares

var jsonParser = _bodyParser.default.json({
  limit: 1024 * 1024 * 10,
  type: "application/json"
});

var urlencodedParser = _bodyParser.default.urlencoded({
  extended: true,
  limit: 1024 * 1024 * 10,
  type: "application/x-www-form-urlencoded"
});

app.use(jsonParser);
app.use(urlencodedParser);
app.use((0, _cors.default)());
app.use((0, _helmet.default)());
app.use((0, _morgan.default)("dev"));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
})); // Routes

app.use(_endpoint.default.PREFIX, _auth.default);
app.use(_endpoint.default.PREFIX, _user.default);
var _default = app;
exports.default = _default;