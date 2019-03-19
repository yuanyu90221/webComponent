"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enum_data_1 = require("./enum_data");
exports.EARTH_SYMBOL = enum_data_1.EARTH_SYMBOL;
exports.SIX_RELATIVE_SYMBOL = enum_data_1.SIX_RELATIVE_SYMBOL;
exports.HEAVEN_SYMBOL = enum_data_1.HEAVEN_SYMBOL;
exports.SIX_ANIMALS = enum_data_1.SIX_ANIMALS;
var symbolStruct_1 = require("./symbolStruct");
exports.SYMBOL_CHAIN = symbolStruct_1.SYMBOL_CHAIN;
var symUtil = __importStar(require("./symbolStruct"));
exports.symUtil = symUtil;
var sixRelative_1 = require("./sixRelative");
exports.SIX_REL = sixRelative_1.SIX_REL;
var SIX_RELATIVE = __importStar(require("./sixRelative"));
exports.SIX_RELATIVE = SIX_RELATIVE;
var fiveElement_1 = require("./fiveElement");
exports.FIVE_EL = fiveElement_1.FIVE_EL;
exports.FIVE_ELEMENT = fiveElement_1.FIVE_ELEMENT;
var FIVE_ELM = __importStar(require("./fiveElement"));
exports.FIVE_ELM = FIVE_ELM;
var coinSet_1 = require("./coinSet");
exports.CoinSymbol = coinSet_1.CoinSymbol;
exports.FaceSymbol = coinSet_1.FaceSymbol;
var coinSet_2 = __importDefault(require("./coinSet"));
exports.CoinSet = coinSet_2.default;
var fourResponse_1 = __importDefault(require("./fourResponse"));
exports.FourRES = fourResponse_1.default;
var baseSet_1 = __importDefault(require("./baseSet"));
exports.BaseSet = baseSet_1.default;
var EARTH_FIVE_MAP = __importStar(require("./earthFiveMap"));
exports.EARTH_FIVE_MAP = EARTH_FIVE_MAP;
var orderSet_1 = require("./orderSet");
exports.EARTH_SYMBOL_ORDER = orderSet_1.EARTH_SYMBOL_ORDER;
exports.EARTH_SYMBOL_REVERSE = orderSet_1.EARTH_SYMBOL_REVERSE;
var OrderSetUtil = __importStar(require("./orderSet"));
exports.OrderSetUtil = OrderSetUtil;
var upBaseSet_1 = __importDefault(require("./upBaseSet"));
exports.UpBaseSet = upBaseSet_1.default;
var fortuneCS_1 = __importDefault(require("./fortuneCS"));
exports.FortuneCS = fortuneCS_1.default;
var fortuneNumMap_1 = __importDefault(require("./fortuneNumMap"));
exports.FourtuneNumMap = fortuneNumMap_1.default;
var timeUtil_1 = __importDefault(require("./timeUtil"));
exports.getDateToEHSymbol = timeUtil_1.default;
var timeUtil_2 = require("./timeUtil");
exports.getDateToEHSYM = timeUtil_2.getDateToEHSYM;
/**
 * @description getFortuneResult 算命函數
 *
 * @param {CoinSet[][]} inputSet
 * @param {number} timestamp
 */
var getFortuneResult = function (inputSet, timestamp) {
    var result = {};
    var finalResult = new fortuneCS_1.default(inputSet);
    var upbase = {};
    var downbase = {};
    var upbsSet = finalResult.getUpBsSet();
    var bsSet = finalResult.getbsSet();
    var resultOfDateSym = timeUtil_2.getDateToEHSYM(timestamp);
    var earthSym = resultOfDateSym.earthSym, heavenSym = resultOfDateSym.heavenSym;
    var sixAnimals = setSixAnimals(heavenSym);
    var sixAnimalsStrs = sixAnimals.map(function (animals) { return enum_data_1.SIX_ANIMALS[animals]; });
    upbase = setBasicBase(upbsSet);
    downbase = setBasicBase(bsSet);
    result = {
        "upbase": upbase,
        "downbase": downbase,
        "fortuneNum": finalResult.getFortuneNum(),
        "event": finalResult.getEventNum(),
        "corEvent": finalResult.getCorEventNum(),
        "mainElem": fiveElement_1.FIVE_ELEMENT[finalResult.getMainElement()],
        "dateSymbol": enum_data_1.HEAVEN_SYMBOL[heavenSym] + enum_data_1.EARTH_SYMBOL[heavenSym],
        "sixAnimal": sixAnimalsStrs,
        "movedNum": judgeMovedSet(bsSet, upbsSet)
    };
    return result;
};
exports.getFortuneResult = getFortuneResult;
;
/**
 * @description judgeMovedSet
 *
 * @param baseSet baseSet 下爻
 * @param upBaseSet upBaseSEt 下爻
 */
var judgeMovedSet = function (baseSet, upBaseSet) {
    var resultNum = null;
    var upMovedSet = upBaseSet.getMovedSet();
    var downMovedSet = baseSet.getMovedSet();
    var upperBase = upBaseSet.getOrigSetSymbolLabel();
    var downBase = baseSet.getOrigSetSymbolLabel();
    var upResultArr = [];
    var downresultArr = [];
    var finalResultArr = [];
    if (upMovedSet !== null) {
        upResultArr = upperBase.filter(function (item, index) {
            return item == coinSet_1.CoinSymbol[coinSet_1.CoinSymbol.O] || item == coinSet_1.CoinSymbol[coinSet_1.CoinSymbol.X];
        }).map(function (item, index) {
            return {
                index: 6 - index,
                isNeg: item == coinSet_1.CoinSymbol[coinSet_1.CoinSymbol.X]
            };
        });
    }
    if (downMovedSet !== null) {
        downresultArr = downBase.filter(function (item, index) {
            return item == coinSet_1.CoinSymbol[coinSet_1.CoinSymbol.O] || item == coinSet_1.CoinSymbol[coinSet_1.CoinSymbol.X];
        }).map(function (item, index) {
            return {
                index: 3 - index,
                isNeg: item == coinSet_1.CoinSymbol[coinSet_1.CoinSymbol.X]
            };
        });
    }
    finalResultArr = upResultArr.concat(downresultArr);
    if (finalResultArr.length > 0 && finalResultArr.length <= 2) {
        resultNum = finalResultArr[finalResultArr.length - 1].index;
    }
    return resultNum;
};
var setSixAnimals = function (heavenElem) {
    var resultAnimals = [];
    var startAnimal = enum_data_1.SIX_ANIMALS.青龍;
    switch (heavenElem) {
        case enum_data_1.HEAVEN_SYMBOL.甲:
        case enum_data_1.HEAVEN_SYMBOL.乙:
            startAnimal = enum_data_1.SIX_ANIMALS.青龍;
            break;
        case enum_data_1.HEAVEN_SYMBOL.丙:
        case enum_data_1.HEAVEN_SYMBOL.丁:
            startAnimal = enum_data_1.SIX_ANIMALS.朱雀;
            break;
        case enum_data_1.HEAVEN_SYMBOL.戊:
            startAnimal = enum_data_1.SIX_ANIMALS.勾塵;
            break;
        case enum_data_1.HEAVEN_SYMBOL.己:
            startAnimal = enum_data_1.SIX_ANIMALS.騰蛇;
            break;
        case enum_data_1.HEAVEN_SYMBOL.庚:
        case enum_data_1.HEAVEN_SYMBOL.辛:
            startAnimal = enum_data_1.SIX_ANIMALS.白虎;
            break;
        default:
            startAnimal = enum_data_1.SIX_ANIMALS.玄武;
            break;
    }
    for (var idx = 0; idx < 6; idx++) {
        startAnimal = (startAnimal + 6) % 6;
        resultAnimals.push(startAnimal);
        startAnimal++;
    }
    return resultAnimals;
};
/**
 * @description setBasicBase 設定基礎回應
 *
 * @param {BaseSet|upBaseSet} baseSet
 */
var setBasicBase = function (baseSet) {
    var result = {};
    var movedSet = baseSet.getMovedSet();
    if (movedSet == null) {
        result = {
            "earthSym": baseSet.getBasicSet().getEarthSymBolSet(),
            "fiveElem": baseSet.getBasicSet().getFiveElesSYM(),
            "sixRes": baseSet.getBasicSet().getSixResSymLabel(),
            "base": baseSet.getOrigSetSymbolLabel()
        };
    }
    else {
        result = {
            "earthSym": baseSet.getBasicSet().getEarthSymBolSet(),
            "fiveElem": baseSet.getBasicSet().getFiveElesSYM(),
            "sixRes": baseSet.getBasicSet().getSixResSymLabel(),
            "base": baseSet.getOrigSetSymbolLabel(),
            "movebase": {
                "earthSym": movedSet.getEarthSymBolSet(),
                "fiveElem": movedSet.getFiveElesSYM(),
                "sixRes": movedSet.getSixResSymLabel(),
                "base": baseSet.getMovedSymbolabel(),
            }
        };
    }
    return result;
};
