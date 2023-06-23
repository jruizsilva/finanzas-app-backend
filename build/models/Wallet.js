"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _db = _interopRequireDefault(require("../database/db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Wallet = _db["default"].define("wallet", {
  balance: {
    type: _sequelize.DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  }
}, {
  timestamps: false
});
var _default = Wallet;
exports["default"] = _default;