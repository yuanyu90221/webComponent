import { EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE, EARTH_SYMBOL } from './enum_data';
/**
 * @description transferNextOrder
 *
 * @param {EARTH_SYMBOL} symbol
 */
declare const transferNextOrder: (symbol: EARTH_SYMBOL) => EARTH_SYMBOL;
/**
 * @description transferReverseOrder
 *
 * @param {EARTH_SYMBOL} symbol
 */
declare const transferReverseOrder: (symbol: EARTH_SYMBOL) => EARTH_SYMBOL;
/**
 * @description getNextOrder
 *
 * @param {EARTH_SYMBOL_ORDER} symbol
 */
declare const getNextOrder: (symbol: EARTH_SYMBOL_ORDER) => EARTH_SYMBOL_ORDER;
/**
 * @description getNextReverseOrder
 *
 * @param {EARTH_SYMBOL_REVERSE} symbol
 */
declare const getNextReverseOrder: (symbol: EARTH_SYMBOL_REVERSE) => EARTH_SYMBOL_REVERSE;
export { getNextOrder, getNextReverseOrder, transferNextOrder, transferReverseOrder, EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE };
