"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var symbolWord_1 = __importDefault(require("./symbolWord"));
var enum_data_1 = require("./enum_data");
var WORDSET_LEN = 12;
/**
 * 地支循序表
 */
var SYMBOL_CHAIN = [];
exports.SYMBOL_CHAIN = SYMBOL_CHAIN;
for (var i = 0; i < WORDSET_LEN; i++) {
    var currentWord = new symbolWord_1.default({ symbol: enum_data_1.EARTH_SYMBOL[i] });
    SYMBOL_CHAIN.push(currentWord);
}
SYMBOL_CHAIN.forEach(function (symbol, index) {
    var increase = (index + 1) % WORDSET_LEN;
    var decrease = ((index - 1) % WORDSET_LEN) < 0 ? ((index - 1) % WORDSET_LEN) + WORDSET_LEN : ((index - 1) % WORDSET_LEN);
    symbol.setOrder(SYMBOL_CHAIN[increase]);
    symbol.setReverse(SYMBOL_CHAIN[decrease]);
});
/**
 * @description transversal
 *
 * @param {symbolWord} input
 * @param {number} step
 */
var transversal = function (input, step) {
    var current = input;
    var counter = step;
    do {
        var symbol = current.getSymbol();
        // console.log(`${symbol}`);
        current = current.next();
        counter--;
    } while (current.hasOwnProperty('order') && counter > 0);
    // console.log(current.getSymbol());
    return current;
};
exports.transversal = transversal;
/**
 * @description antiVersal
 *
 * @param {symbolWord} input
 * @param {number} step
 */
var antiVersal = function (input, step) {
    var current = input;
    var counter = step;
    do {
        current = current.reverseOrder();
        counter--;
    } while (current.hasOwnProperty('reverse') && counter > 0);
    return current;
};
exports.antiVersal = antiVersal;
