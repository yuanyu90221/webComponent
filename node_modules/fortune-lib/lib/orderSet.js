"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_data_1 = require("./enum_data");
exports.EARTH_SYMBOL_ORDER = enum_data_1.EARTH_SYMBOL_ORDER;
exports.EARTH_SYMBOL_REVERSE = enum_data_1.EARTH_SYMBOL_REVERSE;
var ENUM_LEN = 6;
/**
 * @description transferNextOrder
 *
 * @param {EARTH_SYMBOL} symbol
 */
var transferNextOrder = function (symbol) {
    var index = 0;
    var searchItem = enum_data_1.EARTH_SYMBOL_ORDER.子;
    searchItem = searchRefItem(symbol, ENUM_LEN, searchItem, enum_data_1.EARTH_SYMBOL, enum_data_1.EARTH_SYMBOL_ORDER);
    var searchResult = getNextOrder(searchItem);
    var finalRes = enum_data_1.EARTH_SYMBOL.子;
    finalRes = searchRefItem(searchResult, 12, finalRes, enum_data_1.EARTH_SYMBOL_ORDER, enum_data_1.EARTH_SYMBOL);
    return finalRes;
};
exports.transferNextOrder = transferNextOrder;
/**
 * @description transferReverseOrder
 *
 * @param {EARTH_SYMBOL} symbol
 */
var transferReverseOrder = function (symbol) {
    var index = 0;
    var searchItem = enum_data_1.EARTH_SYMBOL_REVERSE.未;
    searchItem = searchRefItem(symbol, ENUM_LEN, searchItem, enum_data_1.EARTH_SYMBOL, enum_data_1.EARTH_SYMBOL_REVERSE);
    var searchResult = getNextReverseOrder(searchItem);
    var finalRes = enum_data_1.EARTH_SYMBOL.子;
    finalRes = searchRefItem(searchResult, 12, finalRes, enum_data_1.EARTH_SYMBOL_REVERSE, enum_data_1.EARTH_SYMBOL);
    return finalRes;
};
exports.transferReverseOrder = transferReverseOrder;
/**
 *
 * @description searchRefItem
 *
 * @param {T} symbol
 * @param {number} length
 * @param {T2} firstEl
 * @param {any} srcMap
 * @param {any} targetMap
 */
function searchRefItem(symbol, length, firstEl, srcMap, targetMap) {
    var index = 0;
    var searchItem = firstEl;
    for (; index < length; index++) {
        if (srcMap[symbol] == targetMap[searchItem]) {
            break;
        }
        searchItem++;
    }
    return searchItem;
}
/**
 * @description getNextOrder
 *
 * @param {EARTH_SYMBOL_ORDER} symbol
 */
var getNextOrder = function (symbol) {
    return (++symbol) % ENUM_LEN;
};
exports.getNextOrder = getNextOrder;
/**
 * @description getNextReverseOrder
 *
 * @param {EARTH_SYMBOL_REVERSE} symbol
 */
var getNextReverseOrder = function (symbol) {
    return (--symbol + ENUM_LEN) % ENUM_LEN;
};
exports.getNextReverseOrder = getNextReverseOrder;
