"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _db = _interopRequireDefault(require("../database/db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Transaction = _db["default"].define("transaction", {
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: _sequelize.DataTypes.DOUBLE,
    allowNull: false
  },
  type: {
    type: _sequelize.DataTypes.ENUM(["egress", "ingress"]),
    allowNull: false
  },
  category: {
    type: _sequelize.DataTypes.ENUM(["payment", "purchase", "services", "transfer"]),
    allowNull: false
  },
  date: {
    type: _sequelize.DataTypes.DATEONLY,
    allowNull: false
  },
  show: {
    type: _sequelize.DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false
  }
}, {
  timestamps: false
});
var _default = Transaction;
exports["default"] = _default;