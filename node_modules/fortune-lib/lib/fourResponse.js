"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 四應對照
 *
 * 四陽
 *
 * 申 1  午 2  辰 2  辰 1
 * 午 2  辰 1  寅 2  寅 1
 * 辰 2  寅 2  子 1  子 1
 *
 * 土    水    木    金
 *
 * 四陰
 *
 * 丑 2  亥 1  酉 1  卯 2
 * 卯 1  丑 2  亥 1  巳 2
 * 巳 1  卯 1  丑 2  未 2
 *
 * 金    火    水    土
 *
 * 順時
 * 子 -> 寅 -> 辰 -> 午 -> 申 -> 戌
 *
 * 逆時
 * 未 -> 巳 -> 卯 -> 丑 -> 亥 -> 酉
 *
 *
 */
var coinSet_1 = require("./coinSet");
var enum_data_1 = require("./enum_data");
var EARTH_FIVE_MAP = __importStar(require("./earthFiveMap"));
/**
 * @description FourRES 卦象基礎物件
 * @author jsonLiang
 */
var FourRES = /** @class */ (function () {
    function FourRES(symbolSet) {
        /**
         * 地支對應
         */
        this.earthSYM = [];
        /**
         * 五行對應
         */
        this.fiveElements = [];
        /**
         * 本宮對應
         */
        this.mainElement = enum_data_1.FIVE_ELEMENT.金;
        /**
         * 六親對應
         */
        this.sixResSymbol = [];
        /**
         * 是否為四陽
         */
        this.isPos = false;
        this.symbolSet = symbolSet.slice();
        this.classify(symbolSet);
        this.setFiveEles();
    }
    FourRES.prototype.setEarthSYM = function (earthSYMs) {
        this.earthSYM = [];
        this.earthSYM = earthSYMs.slice();
        this.setFiveEles();
    };
    FourRES.prototype.setFiveEles = function () {
        this.fiveElements = this.earthSYM.map(function (sym) {
            return EARTH_FIVE_MAP.getFiveFromMap(sym);
        });
    };
    FourRES.prototype.getFiveEles = function () {
        return this.fiveElements;
    };
    FourRES.prototype.getFiveElesSYM = function () {
        var fiveElementsStrs = this.fiveElements.map(function (item) { return enum_data_1.FIVE_ELEMENT[item]; });
        return fiveElementsStrs;
    };
    FourRES.prototype.setupSixRes = function (checkSixMap) {
        this.sixResSymbol = this.fiveElements.map(function (item) {
            var result = checkSixMap[item];
            return result;
        });
    };
    FourRES.prototype.getSixResSymbol = function () {
        return this.sixResSymbol;
    };
    FourRES.prototype.getSixResSymLabel = function () {
        return this.sixResSymbol.map(function (item) {
            return enum_data_1.SIX_RELATIVE_SYMBOL[item];
        });
    };
    FourRES.prototype.classify = function (symbolSet) {
        var first = symbolSet[0], second = symbolSet[1], third = symbolSet[2];
        var conditionText = first + "" + second + "" + third;
        switch (conditionText) {
            case coinSet_1.CoinSymbol["|"] + "" + coinSet_1.CoinSymbol["||"] + "" + coinSet_1.CoinSymbol["||"]:
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.申);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.午);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.辰);
                this.mainElement = enum_data_1.FIVE_ELEMENT.金;
                this.isPos = true;
                break;
            case coinSet_1.CoinSymbol["||"] + "" + coinSet_1.CoinSymbol["|"] + "" + coinSet_1.CoinSymbol["||"]:
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.午);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.辰);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.寅);
                this.mainElement = enum_data_1.FIVE_ELEMENT.水;
                this.isPos = true;
                break;
            case coinSet_1.CoinSymbol["||"] + "" + coinSet_1.CoinSymbol["||"] + "" + coinSet_1.CoinSymbol["|"]:
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.辰);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.寅);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.子);
                this.mainElement = enum_data_1.FIVE_ELEMENT.木;
                this.isPos = true;
                break;
            case coinSet_1.CoinSymbol["|"] + "" + coinSet_1.CoinSymbol["|"] + "" + coinSet_1.CoinSymbol["|"]:
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.辰);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.寅);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.子);
                this.mainElement = enum_data_1.FIVE_ELEMENT.金;
                this.isPos = true;
                break;
            case coinSet_1.CoinSymbol["||"] + "" + coinSet_1.CoinSymbol["|"] + "" + coinSet_1.CoinSymbol["|"]:
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.丑);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.卯);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.巳);
                this.mainElement = enum_data_1.FIVE_ELEMENT.金;
                this.isPos = false;
                break;
            case coinSet_1.CoinSymbol["|"] + "" + coinSet_1.CoinSymbol["||"] + "" + coinSet_1.CoinSymbol["|"]:
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.亥);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.酉);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.卯);
                this.mainElement = enum_data_1.FIVE_ELEMENT.火;
                this.isPos = false;
                break;
            case coinSet_1.CoinSymbol["|"] + "" + coinSet_1.CoinSymbol["|"] + "" + coinSet_1.CoinSymbol["||"]:
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.酉);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.亥);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.丑);
                this.mainElement = enum_data_1.FIVE_ELEMENT.水;
                this.isPos = false;
                break;
            default:
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.卯);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.巳);
                this.earthSYM.push(enum_data_1.EARTH_SYMBOL.未);
                this.mainElement = enum_data_1.FIVE_ELEMENT.土;
                this.isPos = false;
                break;
        }
    };
    FourRES.prototype.getSymBolSet = function () {
        return this.symbolSet;
    };
    FourRES.prototype.getSymBolSetLabel = function () {
        var symbolSetString = this.symbolSet.map(function (item) { return coinSet_1.CoinSymbol[item]; });
        return symbolSetString;
    };
    FourRES.prototype.getEarthSymBolSet = function () {
        var symBolSetString = this.earthSYM.map(function (item) { return enum_data_1.EARTH_SYMBOL[item]; });
        return symBolSetString;
    };
    FourRES.prototype.getEarthSYM = function () {
        return this.earthSYM;
    };
    FourRES.prototype.getMainElement = function () {
        return this.mainElement;
    };
    FourRES.prototype.checkPos = function () {
        return this.isPos;
    };
    return FourRES;
}());
exports.default = FourRES;
