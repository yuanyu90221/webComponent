import { EARTH_SYMBOL, SIX_RELATIVE_SYMBOL, HEAVEN_SYMBOL, SIX_ANIMALS } from './enum_data';
import { SYMBOL_CHAIN } from './symbolStruct';
import * as symUtil from './symbolStruct';
import { SIX_REL } from './sixRelative';
import * as SIX_RELATIVE from './sixRelative';
import { FIVE_EL, FIVE_ELEMENT } from './fiveElement';
import * as FIVE_ELM from './fiveElement';
import { CoinSymbol, FaceSymbol } from './coinSet';
import CoinSet from './coinSet';
import FourRES from './fourResponse';
import BaseSet from './baseSet';
import * as EARTH_FIVE_MAP from './earthFiveMap';
import { EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE } from './orderSet';
import * as OrderSetUtil from './orderSet';
import UpBaseSet from './upBaseSet';
import FortuneCS from './fortuneCS';
import FourtuneNumMap from './fortuneNumMap';
import getDateToEHSymbol from './timeUtil';
import { getDateToEHSYM } from './timeUtil';
/**
 * @description getFortuneResult 算命函數
 *
 * @param {CoinSet[][]} inputSet
 * @param {number} timestamp
 */
declare const getFortuneResult: (inputSet: CoinSet[][], timestamp: number) => object;
export { EARTH_SYMBOL, OrderSetUtil, UpBaseSet, SIX_RELATIVE_SYMBOL, SYMBOL_CHAIN, symUtil, SIX_RELATIVE, SIX_REL, CoinSet, CoinSymbol, FaceSymbol, FIVE_ELM, FIVE_EL, FourRES, FIVE_ELEMENT, BaseSet, EARTH_FIVE_MAP, EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE, FortuneCS, FourtuneNumMap, getFortuneResult, getDateToEHSymbol, HEAVEN_SYMBOL, SIX_ANIMALS, getDateToEHSYM };
