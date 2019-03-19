import symbolWord from './symbolWord';
import {EARTH_SYMBOL} from './enum_data';
const WORDSET_LEN = 12;
/**
 * 地支循序表
 */
const SYMBOL_CHAIN: Array<symbolWord> = [];
for (let i = 0 ; i < WORDSET_LEN; i++) {
  let currentWord = new symbolWord({symbol: EARTH_SYMBOL[i]});
  SYMBOL_CHAIN.push(currentWord);
}
SYMBOL_CHAIN.forEach((symbol, index)=>{
  let increase = (index+1)%WORDSET_LEN;
  let decrease = ((index-1)%WORDSET_LEN) < 0 ? ((index-1)%WORDSET_LEN)+WORDSET_LEN : ((index-1)%WORDSET_LEN);
  symbol.setOrder(SYMBOL_CHAIN[increase]);
  symbol.setReverse(SYMBOL_CHAIN[decrease]);
});
/**
 * @description transversal 
 * 
 * @param {symbolWord} input 
 * @param {number} step 
 */
const transversal = (input: symbolWord, step: number) => {
  let current = input;
  let counter = step;
  do {
    let symbol = current.getSymbol();
    // console.log(`${symbol}`);
    current = current.next();
    counter--;
  } while(current.hasOwnProperty('order') && counter>0);
  // console.log(current.getSymbol());
  return current;
};

/**
 * @description antiVersal
 * 
 * @param {symbolWord} input 
 * @param {number} step 
 */
const antiVersal = (input: symbolWord, step: number) => {
  let current = input;
  let counter = step;
  do {
    current = current.reverseOrder();
    counter--;
  } while(current.hasOwnProperty('reverse') && counter>0);
  return current;
};

export {SYMBOL_CHAIN, antiVersal, transversal};