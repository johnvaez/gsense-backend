"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  SUCCESS: "Proceso exitoso",
  REQUIRED: "Campo requerido",
  IS_EMAIL_EXIST: "La dirección de correo electrónico que ha ingresado ya está registrada",
  USER_NOT_FOUND: "Usuario no encontrado",
  AUTENTICATION_ERROR: "Error de autenticación",
  NO_TOKEN_PROVIDED: "No se ha proporcionado ningún token",
  UNAUTHORIZED: "No autorizado"
};
exports.default = _default;