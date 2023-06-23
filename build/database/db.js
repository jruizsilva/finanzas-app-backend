"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _config = require("../config");
var sequelize = process.env.NODE_ENV === 'production' ? new _sequelize.Sequelize({
  database: _config.deploy.database,
  username: _config.deploy.username,
  password: _config.deploy.password,
  host: _config.deploy.host,
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 3,
    min: 1,
    idle: 10000
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
    keepAlive: true
  },
  ssl: true
}) : new _sequelize.Sequelize({
  database: _config.local.database,
  username: _config.local.username,
  password: _config.local.password,
  host: _config.local.host,
  dialect: 'postgres',
  logging: false
});

// const sequelize = new Sequelize({
//   database: deploy.database,
//   username: deploy.username,
//   password: deploy.password,
//   host: deploy.host,
//   dialect: "postgres",
//   logging: false,
//   pool: {
//     max: 3,
//     min: 1,
//     idle: 10000,
//   },
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//     keepAlive: true,
//   },
//   ssl: true,
// });
var _default = sequelize;
exports["default"] = _default;