"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var symbolWord_1 = __importDefault(require("./symbolWord"));
var enum_data_1 = require("./enum_data");
var WORDSET_LEN = 5;
/**
 * 六親
 */
var SIX_REL = [];
exports.SIX_REL = SIX_REL;
for (var i = 0; i < WORDSET_LEN; i++) {
    var currentWord = new symbolWord_1.default({ symbol: enum_data_1.SIX_RELATIVE_SYMBOL[i] });
    SIX_REL.push(currentWord);
}
SIX_REL.forEach(function (symbol, index) {
    var increase = (index + 1) % WORDSET_LEN;
    var decrease = ((index + 2) % WORDSET_LEN) < 0 ? ((index + 2) % WORDSET_LEN) + WORDSET_LEN : ((index + 2) % WORDSET_LEN);
    symbol.setOrder(SIX_REL[increase]);
    symbol.setReverse(SIX_REL[decrease]);
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
        current = current.next();
        counter--;
    } while (current.hasOwnProperty('order') && counter > 0);
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
