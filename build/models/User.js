"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _db = _interopRequireDefault(require("../database/db"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var User = _db["default"].define("user", {
  first_name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: _sequelize.DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  active: {
    type: _sequelize.DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  timestamps: false
});
var _default = User;
exports["default"] = _default;