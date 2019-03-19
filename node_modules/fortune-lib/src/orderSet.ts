import {EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE, EARTH_SYMBOL} from './enum_data';
const ENUM_LEN: number = 6;
/**
 * @description transferNextOrder
 * 
 * @param {EARTH_SYMBOL} symbol 
 */
const transferNextOrder = (symbol: EARTH_SYMBOL): EARTH_SYMBOL => {
  let index:number = 0;
  let searchItem = EARTH_SYMBOL_ORDER.子;
  searchItem = searchRefItem<EARTH_SYMBOL, EARTH_SYMBOL_ORDER>(symbol, ENUM_LEN, searchItem, EARTH_SYMBOL,EARTH_SYMBOL_ORDER);
  let searchResult = getNextOrder(searchItem);
  let finalRes = EARTH_SYMBOL.子;
  finalRes = searchRefItem<EARTH_SYMBOL_ORDER, EARTH_SYMBOL>(searchResult, 12, finalRes, EARTH_SYMBOL_ORDER, EARTH_SYMBOL);
  return finalRes;
};
/**
 * @description transferReverseOrder
 * 
 * @param {EARTH_SYMBOL} symbol 
 */
const transferReverseOrder = (symbol: EARTH_SYMBOL): EARTH_SYMBOL => {
  let index: number = 0;
  let searchItem = EARTH_SYMBOL_REVERSE.未;
  searchItem = searchRefItem<EARTH_SYMBOL, EARTH_SYMBOL_REVERSE>(symbol, ENUM_LEN, searchItem, EARTH_SYMBOL, EARTH_SYMBOL_REVERSE);
  let searchResult = getNextReverseOrder(searchItem);
  let finalRes = EARTH_SYMBOL.子;
  finalRes = searchRefItem<EARTH_SYMBOL_REVERSE, EARTH_SYMBOL>(searchResult, 12, finalRes, EARTH_SYMBOL_REVERSE, EARTH_SYMBOL);
  return finalRes;
};

/**
 * 
 * @description searchRefItem
 * 
 * @param {T} symbol 
 * @param {number} length 
 * @param {T2} firstEl 
 * @param {any} srcMap 
 * @param {any} targetMap 
 */
function searchRefItem<T extends EARTH_SYMBOL_ORDER| EARTH_SYMBOL | EARTH_SYMBOL_REVERSE, T2 extends EARTH_SYMBOL_ORDER| EARTH_SYMBOL| EARTH_SYMBOL_REVERSE> (symbol:T, length: number, firstEl:T2, srcMap: any, targetMap: any):T2 {
  let index: number = 0;
  let searchItem: T2 =  firstEl;
  for (; index < length; index++) {
    if (srcMap[symbol]==targetMap[searchItem]) {
      break;
    }
    searchItem++;
  }
  return searchItem;
}
/**
 * @description getNextOrder
 * 
 * @param {EARTH_SYMBOL_ORDER} symbol 
 */
const getNextOrder = (symbol: EARTH_SYMBOL_ORDER) : EARTH_SYMBOL_ORDER=> {
  return (++symbol)%ENUM_LEN;
};
/**
 * @description getNextReverseOrder
 * 
 * @param {EARTH_SYMBOL_REVERSE} symbol 
 */
const getNextReverseOrder = (symbol: EARTH_SYMBOL_REVERSE) : EARTH_SYMBOL_REVERSE => {
  return (--symbol+ENUM_LEN)%ENUM_LEN;
};

export {getNextOrder, getNextReverseOrder, transferNextOrder, transferReverseOrder, EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE};