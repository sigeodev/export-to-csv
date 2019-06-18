"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var exportToCsv = function exportToCsv(data, fileName) {
  if ((0, _isEmpty["default"])(data)) {
    return new Error('Export CSV - You should pass me an array of arrays!');
  }

  var name = fileName || (0, _moment["default"])().format('YYYY-MM-DD');
  var csvContent = "data:text/csv;charset=utf-8,".concat(data && data.map(function (e) {
    return e.join(',');
  }).join('\n'));
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', "".concat(name, ".csv"));
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

var _default = exportToCsv;
exports["default"] = _default;