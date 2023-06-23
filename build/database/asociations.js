"use strict";

var _models = require("../models");
// Add FK userId to wallet
_models.User.hasOne(_models.Wallet);
_models.Wallet.belongsTo(_models.User);

// Add FK walledId to transaction
_models.Wallet.hasMany(_models.Transaction);
_models.Transaction.belongsTo(_models.Wallet);