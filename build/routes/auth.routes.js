"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = require("../controllers/auth.controllers");
var _expressValidator = require("express-validator");
var _validarCampos = require("../middlewares/validarCampos");
var router = (0, _express.Router)();
router.post("/api/auth/login", [(0, _expressValidator.check)("email").isEmail().withMessage("Ingresa un email válido"), (0, _expressValidator.check)("password").notEmpty().withMessage("La contraseña es obligatoria"), _validarCampos.validarCampos], _auth.login);
var _default = router;
exports["default"] = _default;