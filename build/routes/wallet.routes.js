"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _validarCampos = require("../middlewares/validarCampos");
var _expressValidator = require("express-validator");
var _wallet = require("../controllers/wallet.controllers");
var _notExistsWallet = require("../helpers/notExistsWallet");
var router = (0, _express.Router)();
router.get("/api/wallet/:walletId", [(0, _expressValidator.check)("walletId").notEmpty().withMessage("walletId es obligatorio"), (0, _expressValidator.check)("walletId").custom(_notExistsWallet.notExistsWallet), _validarCampos.validarCampos], _wallet.getWalletById);
var _default = router;
exports["default"] = _default;