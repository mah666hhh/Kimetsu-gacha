"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
var KimetsuTop_1 = require("./KimetsuTop");
var serviceWorker = require("./serviceWorker");
// TODO: ここから public / index.htmlのrootにDOMを差込む
react_dom_1["default"].render(react_1["default"].createElement(KimetsuTop_1["default"], null), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
