"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_data_1 = require("./enum_data");
/***
 * 地支對應五行
 */
var EARTH_FIVE_MAP = {};
exports.EARTH_FIVE_MAP = EARTH_FIVE_MAP;
EARTH_FIVE_MAP[enum_data_1.EARTH_SYMBOL.子] = enum_data_1.FIVE_ELEMENT.水;
EARTH_FIVE_MAP[enum_data_1.EARTH_SYMBOL.丑] = enum_data_1.FIVE_ELEMENT.土;
EARTH_FIVE_MAP[enum_data_1.EARTH_SYMBOL.寅] = enum_data_1.FIVE_ELEMENT.木;
EARTH_FIVE_MAP[enum_data_1.EARTH_SYMBOL.卯] = enum_data_1.FIVE_ELEMENT.木;
EARTH_FIVE_MAP[enum_data_1.EARTH_SYMBOL.辰] = enum_data_1.FIVE_ELEMENT.土;
EARTH_FIVE_MAP[enum_data_1.EARTH_SYMBOL.巳] = enum_data_1.FIVE_ELEMENT.火;
EARTH_FIVE_MAP[enum_data_1.EARTH_SYMBOL.午] = enum_data_1.FIVE_ELEMENT.火;
EARTH_FIVE_MAP[enum_data_1.EARTH_SYMBOL.未] = enum_data_1.FIVE_ELEMENT.土;
EARTH_FIVE_MAP[enum_data_1.EARTH_SYMBOL.申] = enum_data_1.FIVE_ELEMENT.金;
EARTH_FIVE_MAP[enum_data_1.EARTH_SYMBOL.酉] = enum_data_1.FIVE_ELEMENT.金;
EARTH_FIVE_MAP[enum_data_1.EARTH_SYMBOL.戌] = enum_data_1.FIVE_ELEMENT.土;
EARTH_FIVE_MAP[enum_data_1.EARTH_SYMBOL.亥] = enum_data_1.FIVE_ELEMENT.水;
/**
 * @description getFiveFromMap
 *
 * @param {EARTH_SYMBOL} earthSYM
 */
var getFiveFromMap = function (earthSYM) {
    return EARTH_FIVE_MAP[earthSYM];
};
exports.getFiveFromMap = getFiveFromMap;
/**
 * @description getVFiveSymbolFromMap
 *
 * @param {EARTH_SYMBOL} earthSYM
 */
var getFiveSymbolFromMap = function (earthSYM) {
    return enum_data_1.FIVE_ELEMENT[EARTH_FIVE_MAP[earthSYM]];
};
exports.getFiveSymbolFromMap = getFiveSymbolFromMap;
