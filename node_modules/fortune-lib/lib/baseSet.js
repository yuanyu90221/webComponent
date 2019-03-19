"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var coinSet_1 = require("./coinSet");
var fourResponse_1 = __importDefault(require("./fourResponse"));
var BaseSet = /** @class */ (function () {
    function BaseSet(orgSet) {
        this.movedSet = null;
        this.orgSet = [];
        this.orgSetSymbol = [];
        this.movedSetSymbol = [];
        this.realSetSymbol = [];
        this.orgSet = orgSet.slice();
        var first = orgSet[0], second = orgSet[1], third = orgSet[2];
        this.orgSetSymbol = [first.getSymbol(), second.getSymbol(), third.getSymbol()];
        this.realSetSymbol = [first.getRealSymbol(), second.getRealSymbol(), third.getRealSymbol()];
        this.movedSetSymbol = [first.getMoveSymbol(), second.getMoveSymbol(), third.getMoveSymbol()];
        this.basicSet = new fourResponse_1.default(this.realSetSymbol);
        if (this.checkMoved()) {
            this.movedSet = new fourResponse_1.default(this.movedSetSymbol);
        }
    }
    BaseSet.prototype.checkMoved = function () {
        var _a = this.orgSet, first = _a[0], second = _a[1], third = _a[2];
        return first.getRealSymbol() !== first.getMoveSymbol() || second.getRealSymbol() !== second.getMoveSymbol()
            || third.getRealSymbol() !== third.getMoveSymbol();
    };
    BaseSet.prototype.getOrigSetSymbol = function () {
        return this.orgSetSymbol;
    };
    BaseSet.prototype.getOrigSetSymbolLabel = function () {
        return this.getOrigSetSymbol().map(function (item) {
            return coinSet_1.CoinSymbol[item];
        });
    };
    BaseSet.prototype.getMovedSymbolabel = function () {
        var movedSet = this.movedSet;
        if (movedSet != null) {
            return movedSet.getSymBolSetLabel();
        }
        else {
            return [];
        }
    };
    BaseSet.prototype.getRealSetSymbol = function () {
        return this.realSetSymbol;
    };
    BaseSet.prototype.getRealSetSymbolStr = function () {
        var realSymbol = this.realSetSymbol.map(function (item) { return item + ""; });
        return realSymbol.reduce(function (curItem, nextItem) {
            return curItem + nextItem;
        });
    };
    BaseSet.prototype.getMovedSetSymbol = function () {
        return this.movedSetSymbol;
    };
    BaseSet.prototype.getBasicSet = function () {
        return this.basicSet;
    };
    BaseSet.prototype.getMovedSet = function () {
        return this.movedSet;
    };
    return BaseSet;
}());
exports.default = BaseSet;
