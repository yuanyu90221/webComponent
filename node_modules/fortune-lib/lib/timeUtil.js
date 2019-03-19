"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enum_data_1 = require("./enum_data");
var moment_1 = __importDefault(require("moment"));
/**
 * @description getDateToEHSymbol
 *
 * @param {number} timestamp
 */
var getDateToEHSymbol = function (timestamp) {
    var resultEHSymbol = '';
    var inputTime = moment_1.default(timestamp);
    var yearOfInput = inputTime.get('year');
    var specificTime = moment_1.default([2000, 0, 1]);
    var idxOfEarth = 0, idxOfHeaven = 0;
    var diffDay = inputTime.diff(specificTime, 'days');
    if (yearOfInput - 2000 >= 0) {
        idxOfEarth = (diffDay + 6) % 12;
        idxOfHeaven = (diffDay + 4) % 10;
    }
    else {
        idxOfEarth = ((diffDay - 6) % 12 + 12) % 12;
        idxOfHeaven = ((diffDay - 4) % 10 + 10) % 10;
    }
    resultEHSymbol = enum_data_1.HEAVEN_SYMBOL[idxOfHeaven] + enum_data_1.EARTH_SYMBOL[idxOfEarth];
    return resultEHSymbol;
};
;
/**
 * @description getDateToEHSYM
 *
 * @param {number} timestamp
 */
var getDateToEHSYM = function (timestamp) {
    var resultEHSymbol;
    var inputTime = moment_1.default(timestamp);
    var yearOfInput = inputTime.get('year');
    var specificTime = moment_1.default([2000, 0, 1]);
    var idxOfEarth = 0, idxOfHeaven = 0;
    var diffDay = inputTime.diff(specificTime, 'days');
    if (yearOfInput - 2000 >= 0) {
        idxOfEarth = (diffDay + 6) % 12;
        idxOfHeaven = (diffDay + 4) % 10;
    }
    else {
        idxOfEarth = ((diffDay - 6) % 12 + 12) % 12;
        idxOfHeaven = ((diffDay - 4) % 10 + 10) % 10;
    }
    var startOfEarth = enum_data_1.EARTH_SYMBOL.子;
    for (var idx = 0; idx < idxOfEarth; idx++) {
        startOfEarth++;
    }
    var startHeaven = enum_data_1.HEAVEN_SYMBOL.甲;
    for (var idx = 0; idx < idxOfHeaven; idx++) {
        startHeaven++;
    }
    resultEHSymbol = {
        "earthSym": startOfEarth,
        "heavenSym": startHeaven
    };
    return resultEHSymbol;
};
exports.getDateToEHSYM = getDateToEHSYM;
exports.default = getDateToEHSymbol;
