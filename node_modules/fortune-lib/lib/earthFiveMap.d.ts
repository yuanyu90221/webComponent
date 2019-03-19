import { FIVE_ELEMENT, EARTH_SYMBOL } from './enum_data';
/***
 * 地支對應五行
 */
declare const EARTH_FIVE_MAP: any;
/**
 * @description getFiveFromMap
 *
 * @param {EARTH_SYMBOL} earthSYM
 */
declare const getFiveFromMap: (earthSYM: EARTH_SYMBOL) => FIVE_ELEMENT;
/**
 * @description getVFiveSymbolFromMap
 *
 * @param {EARTH_SYMBOL} earthSYM
 */
declare const getFiveSymbolFromMap: (earthSYM: EARTH_SYMBOL) => string;
export { EARTH_FIVE_MAP, getFiveFromMap, getFiveSymbolFromMap };
