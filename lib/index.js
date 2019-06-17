"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_isempty_1 = require("lodash.isempty");
var moment_1 = require("moment");
var exportToCsv = function (data, fileName) {
    if (lodash_isempty_1.default(data)) {
        return new Error("Export CSV - You should pass me an array of arrays!");
    }
    var name = fileName || moment_1.default().format("YYYY-MM-DD");
    var csvContent = "data:text/csv;charset=utf-8," + (data && data.map(function (e) { return e.join(","); }).join("\n"));
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", name + ".csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
exports.default = exportToCsv;
