"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _transactions = require("../controllers/transactions.controllers");
var _expressValidator = require("express-validator");
var _validarCampos = require("../middlewares/validarCampos");
var _notExistsUser = require("../helpers/notExistsUser");
var _notExistsWallet = require("../helpers/notExistsWallet");
var _notExistsTransaction = require("../helpers/notExistsTransaction");
var router = (0, _express.Router)();
router.get("/api/transactions/:walletId", [(0, _expressValidator.check)("walletId").notEmpty().withMessage("El id del usuario es obligatorio"), (0, _expressValidator.check)("type").isIn(["", "egress", "ingress"]).withMessage("Valores validos: egress, ingress"), (0, _expressValidator.check)("category").isIn(["", "payment", "purchase", "services", "transfer"]).withMessage("Valores validos: payment, purchase, services, transfer"), (0, _expressValidator.check)("walletId").custom(_notExistsWallet.notExistsWallet), _validarCampos.validarCampos], _transactions.getTransactionsByWalletId);
router.post("/api/transactions", [(0, _expressValidator.check)("userId").notEmpty().withMessage("El id del usuario es obligatorio"), (0, _expressValidator.check)("name").notEmpty().withMessage("El nombre es obligatorio"), (0, _expressValidator.check)("amount").notEmpty().withMessage("amount es obligatorio"), (0, _expressValidator.check)("type").isIn(["egress", "ingress"]).withMessage("Valores validos: egress, ingress"), (0, _expressValidator.check)("category").isIn(["payment", "purchase", "services", "transfer"]).withMessage("Valores validos: payment, purchase, services, transfer"), (0, _expressValidator.check)("date").notEmpty().withMessage("La fecha es obligatoria"), (0, _expressValidator.check)("userId").custom(_notExistsUser.notExistsUser), _validarCampos.validarCampos], _transactions.createTransaction);
router["delete"]("/api/transactions/:transactionId", [(0, _expressValidator.check)("transactionId").notEmpty().withMessage("El id de la transacción es obligatorio"), (0, _expressValidator.check)("transactionId").custom(_notExistsTransaction.notExistsTransaction), _validarCampos.validarCampos], _transactions.deleteTransaction);
router.put("/api/transactions/:transactionId", [(0, _expressValidator.check)("transactionId").notEmpty().withMessage("El id de la transacción es obligatorio"), (0, _expressValidator.check)("name").notEmpty().withMessage("El nombre es obligatorio"), (0, _expressValidator.check)("amount").notEmpty().withMessage("amount es obligatorio"), (0, _expressValidator.check)("type").isIn(["", "egress", "ingress"]).withMessage("Valores validos: egress, ingress"), (0, _expressValidator.check)("category").isIn(["payment", "purchase", "services", "transfer"]).withMessage("Valores validos: payment, purchase, services, transfer"), (0, _expressValidator.check)("date").notEmpty().withMessage("La fecha es obligatoria"), (0, _expressValidator.check)("transactionId").custom(_notExistsTransaction.notExistsTransaction), _validarCampos.validarCampos], _transactions.updateTransaction);
var _default = router;
exports["default"] = _default;