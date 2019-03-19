"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 銅錢正反 處理:
 *
 * 反反反 -> X
 * 正反反 -> |
 * 正正反 -> ||
 * 正正正 -> O
 *
 */
var CoinSymbol;
(function (CoinSymbol) {
    CoinSymbol[CoinSymbol["X"] = 0] = "X";
    CoinSymbol[CoinSymbol["|"] = 1] = "|";
    CoinSymbol[CoinSymbol["||"] = 2] = "||";
    CoinSymbol[CoinSymbol["O"] = 3] = "O";
})(CoinSymbol || (CoinSymbol = {}));
exports.CoinSymbol = CoinSymbol;
;
/**
 * 銅錢 正反:
 *
 * FaceDown: 反
 * FaceUp: 正
 */
var FaceSymbol;
(function (FaceSymbol) {
    FaceSymbol[FaceSymbol["FaceDown"] = 0] = "FaceDown";
    FaceSymbol[FaceSymbol["FaceUp"] = 1] = "FaceUp";
})(FaceSymbol || (FaceSymbol = {}));
exports.FaceSymbol = FaceSymbol;
;
/**
 * @description CoinSet 基礎掛 物件
 * @author jsonLiang
 */
var CoinSet = /** @class */ (function () {
    function CoinSet(faceSet) {
        /**
         * 銅錢正反面
         */
        this.faceSet = [];
        if (faceSet.length !== 3) {
            throw Error("Input Set Should be 3");
        }
        this.faceSet = faceSet.slice();
        this.coinSymbol = this.setSymbol();
    }
    CoinSet.prototype.setSymbol = function () {
        var counter = this.faceSet.reduce(function (pre, current) {
            return pre + current;
        });
        // const symbol:string = CoinSymbol[counter];
        var result = CoinSymbol.X;
        switch (counter) {
            case CoinSymbol["|"]:
                result = CoinSymbol["|"];
                break;
            case CoinSymbol["||"]:
                result = CoinSymbol["||"];
                break;
            case CoinSymbol.O:
                result = CoinSymbol.O;
                break;
        }
        return result;
    };
    CoinSet.prototype.getSymbol = function () {
        return this.coinSymbol;
    };
    CoinSet.prototype.getFaceSet = function () {
        return this.faceSet;
    };
    CoinSet.prototype.getRealSymbol = function () {
        var realSymbol = this.coinSymbol;
        switch (this.coinSymbol) {
            case CoinSymbol.O:
                return CoinSymbol["|"];
            case CoinSymbol.X:
                return CoinSymbol["||"];
            default:
                return realSymbol;
        }
    };
    CoinSet.prototype.getMoveSymbol = function () {
        var realSymbol = this.coinSymbol;
        switch (this.coinSymbol) {
            case CoinSymbol.O:
                return CoinSymbol["||"];
            case CoinSymbol.X:
                return CoinSymbol["|"];
            default:
                return realSymbol;
        }
    };
    return CoinSet;
}());
exports.default = CoinSet;
