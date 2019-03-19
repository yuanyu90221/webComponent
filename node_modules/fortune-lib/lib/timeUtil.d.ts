import { EARTH_SYMBOL, HEAVEN_SYMBOL } from './enum_data';
/**
 * @description getDateToEHSymbol
 *
 * @param {number} timestamp
 */
declare const getDateToEHSymbol: (timestamp: number) => string;
interface EARTH_HEAVEN_TYPE {
    earthSym: EARTH_SYMBOL;
    heavenSym: HEAVEN_SYMBOL;
}
/**
 * @description getDateToEHSYM
 *
 * @param {number} timestamp
 */
declare const getDateToEHSYM: (timestamp: number) => EARTH_HEAVEN_TYPE;
export default getDateToEHSymbol;
export { getDateToEHSYM };
