"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description symbolWord
 * @author jsonLiang
 */
var symbolWord = /** @class */ (function () {
    function symbolWord(_a) {
        var _b = _a.symbol, symbol = _b === void 0 ? '' : _b, _c = _a.reverse, reverse = _c === void 0 ? {} : _c, _d = _a.order, order = _d === void 0 ? {} : _d;
        /**
         * 符號
         */
        this.symbol = '';
        this.symbol = symbol;
        this.reverse = reverse;
        this.order = order;
    }
    symbolWord.prototype.next = function () {
        return this.order;
    };
    symbolWord.prototype.getSymbol = function () {
        return this.symbol;
    };
    symbolWord.prototype.reverseOrder = function () {
        return this.reverse;
    };
    symbolWord.prototype.setOrder = function (order) {
        if (order === void 0) { order = {}; }
        this.order = order;
    };
    symbolWord.prototype.setReverse = function (reverse) {
        if (reverse === void 0) { reverse = {}; }
        this.reverse = reverse;
    };
    return symbolWord;
}());
exports.default = symbolWord;
