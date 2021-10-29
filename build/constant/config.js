"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/gsense",
  PORT: process.env.PORT || 4000,
  SECRET: "F37*R3P05170R10"
};
exports.default = _default;