import symbolWord from './symbolWord';
import { FIVE_ELEMENT } from './enum_data';
/**
 * 五行對應表
 */
declare const FIVE_EL: Array<symbolWord>;
/**
 * @description transversal
 *
 * @param {symbolWord} input
 * @param {number} step
 */
declare const transversal: (input: symbolWord, step: number) => symbolWord;
/**
 * @description antiVersal
 *
 * @param {symbolWord} input
 * @param {number} step
 */
declare const antiVersal: (input: symbolWord, step: number) => symbolWord;
export { FIVE_EL, transversal, antiVersal, FIVE_ELEMENT };
