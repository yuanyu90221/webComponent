import symbolWord from './symbolWord';
/**
 * 地支循序表
 */
declare const SYMBOL_CHAIN: Array<symbolWord>;
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
export { SYMBOL_CHAIN, antiVersal, transversal };
