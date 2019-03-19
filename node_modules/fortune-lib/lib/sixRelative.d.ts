import symbolWord from './symbolWord';
/**
 * 六親
 */
declare const SIX_REL: Array<symbolWord>;
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
export { SIX_REL, antiVersal, transversal };
