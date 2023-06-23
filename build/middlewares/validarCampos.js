"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validarCampos = void 0;
var _expressValidator = require("express-validator");
var validarCampos = function validarCampos(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
};
exports.validarCampos = validarCampos;