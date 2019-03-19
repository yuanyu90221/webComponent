import {EARTH_SYMBOL, HEAVEN_SYMBOL} from './enum_data';
import moment from 'moment';
/**
 * @description getDateToEHSymbol
 * 
 * @param {number} timestamp 
 */
const getDateToEHSymbol = (timestamp: number): string => {
  let resultEHSymbol:string = '';
  let inputTime = moment(timestamp);
  let yearOfInput: number = inputTime.get('year');
  let specificTime = moment([2000, 0 ,1]);
  let idxOfEarth = 0, idxOfHeaven = 0; 
  let diffDay = inputTime.diff(specificTime, 'days') ;
  if (yearOfInput - 2000 >= 0) {
    idxOfEarth = (diffDay + 6)% 12;
    idxOfHeaven = (diffDay + 4)% 10;
  } else {
    idxOfEarth = ((diffDay - 6)%12 + 12)%12;
    idxOfHeaven = ((diffDay - 4)%10 +10)%10;
  }
  resultEHSymbol =  HEAVEN_SYMBOL[idxOfHeaven] + EARTH_SYMBOL[idxOfEarth];
  return resultEHSymbol;
};
interface EARTH_HEAVEN_TYPE {
  earthSym: EARTH_SYMBOL,
  heavenSym: HEAVEN_SYMBOL
};
/**
 * @description getDateToEHSYM
 * 
 * @param {number} timestamp 
 */
const getDateToEHSYM= (timestamp: number): EARTH_HEAVEN_TYPE => {
  let resultEHSymbol:EARTH_HEAVEN_TYPE;
  let inputTime = moment(timestamp);
  let yearOfInput: number = inputTime.get('year');
  let specificTime = moment([2000, 0 ,1]);
  let idxOfEarth = 0, idxOfHeaven = 0; 
  let diffDay = inputTime.diff(specificTime, 'days') ;
  if (yearOfInput - 2000 >= 0) {
    idxOfEarth = (diffDay + 6)% 12;
    idxOfHeaven = (diffDay + 4)% 10;
  } else {
    idxOfEarth = ((diffDay - 6)%12 + 12)%12;
    idxOfHeaven = ((diffDay - 4)%10 +10)%10;
  }
  let startOfEarth: EARTH_SYMBOL = EARTH_SYMBOL.子;
  for ( let idx=0; idx < idxOfEarth; idx++){
    startOfEarth++;
  }
  let startHeaven: HEAVEN_SYMBOL = HEAVEN_SYMBOL.甲;
  for (let idx=0; idx < idxOfHeaven; idx++){
    startHeaven++;
  }
  resultEHSymbol = {
    "earthSym": startOfEarth,
    "heavenSym": startHeaven
  }
  return resultEHSymbol;
};
export default getDateToEHSymbol;
export {getDateToEHSYM};