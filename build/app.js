"use strict";

var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _db = _interopRequireDefault(require("./database/db"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _transactions = _interopRequireDefault(require("./routes/transactions.routes"));
var _wallet = _interopRequireDefault(require("./routes/wallet.routes"));
require("./database/asociations");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
// Settings
app.set("port", process.env.PORT || 3001);

// Middlewares
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])("dev"));
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());

// Routes
app.use(_user["default"]);
app.use(_auth["default"]);
app.use(_transactions["default"]);
app.use(_wallet["default"]);
_db["default"].sync({
  force: false
}).then(function () {
  console.log("DB connected");
  app.listen(app.get("port"), function () {
    console.log("Server listening on port", app.get("port"));
  });
})["catch"](function (err) {
  console.log(err);
});