"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _config = _interopRequireDefault(require("../constant/config"));

var _message = _interopRequireDefault(require("../constant/message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var header = req.headers.authorization.split(" ");
    var token = header[1];
    if (!token) return res.status(403).json({
      status: false,
      message: _message.default.NO_TOKEN_PROVIDED
    });

    try {
      var decoded = _jsonwebtoken.default.verify(token, _config.default.SECRET);

      req.userId = decoded.id;
      var user = yield _user.default.findById(req.userId, {
        password: 0
      });
      if (!user) return res.status(404).json({
        status: false,
        message: _message.default.USER_NOT_FOUND
      });
      next();
    } catch (error) {
      return res.status(401).json({
        status: false,
        message: _message.default.UNAUTHORIZED
      });
    }
  });

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;