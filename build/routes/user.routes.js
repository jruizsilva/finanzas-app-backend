"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _user = require("../controllers/user.controllers");
var _existsEmail = require("../helpers/existsEmail");
var _validarCampos = require("../middlewares/validarCampos");
var _validateJWT = require("../middlewares/validateJWT");
var _expressValidator = require("express-validator");
var router = (0, _express.Router)();
router.get("/api/users/token", _validateJWT.validarJWT, _user.getUser);
router.post("/api/users", [(0, _expressValidator.check)("first_name").notEmpty().withMessage("first_name es obligatorio"), (0, _expressValidator.check)("last_name").notEmpty().withMessage("last_name es obligatorio"), (0, _expressValidator.check)("password").isLength({
  min: 6
}).withMessage("El password debe de ser más de 6 letras"), (0, _expressValidator.check)("email").isEmail().withMessage("El email debe ser válido"), (0, _expressValidator.check)("email").custom(_existsEmail.existsEmail), _validarCampos.validarCampos], _user.registerUser);
var _default = router;
exports["default"] = _default;