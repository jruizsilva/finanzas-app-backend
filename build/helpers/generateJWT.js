"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateJWT = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var generateJWT = function generateJWT(id) {
  return new Promise(function (resolve, reject) {
    var payload = {
      id: id
    };
    _jsonwebtoken["default"].sign(payload, process.env.PRIVATE_KEY_JWT, {
      expiresIn: "2h"
    }, function (err, token) {
      if (err) {
        console.log(err);
        reject("No se pudo generar el token");
      } else {
        resolve(token);
      }
    });
  });
};
exports.generateJWT = generateJWT;