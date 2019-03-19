import {EARTH_SYMBOL, SIX_RELATIVE_SYMBOL, HEAVEN_SYMBOL, SIX_ANIMALS} from './enum_data';
import {SYMBOL_CHAIN} from './symbolStruct';
import * as symUtil from './symbolStruct';
import {SIX_REL} from './sixRelative';
import * as SIX_RELATIVE from './sixRelative';
import {FIVE_EL, FIVE_ELEMENT} from './fiveElement';
import * as FIVE_ELM from './fiveElement';
import {CoinSymbol, FaceSymbol} from './coinSet';
import CoinSet from './coinSet';
import FourRES from './fourResponse';
import BaseSet from './baseSet';
import * as EARTH_FIVE_MAP from './earthFiveMap';
import {EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE} from './orderSet';
import * as OrderSetUtil from './orderSet';
import UpBaseSet from './upBaseSet';
import FortuneCS from './fortuneCS';
import FourtuneNumMap from './fortuneNumMap';
import getDateToEHSymbol from './timeUtil';
import { getDateToEHSYM } from './timeUtil';
import upBaseSet from './upBaseSet';
/**
 * @description getFortuneResult 算命函數
 * 
 * @param {CoinSet[][]} inputSet 
 * @param {number} timestamp 
 */
const getFortuneResult = ( inputSet:CoinSet[][], timestamp: number): object => {
  let result:object = {};
  let finalResult: FortuneCS = new FortuneCS(inputSet);
  let upbase: object = {};
  let downbase: object = {};
  let upbsSet = finalResult.getUpBsSet();
  let bsSet = finalResult.getbsSet();
  let resultOfDateSym = getDateToEHSYM(timestamp);
  let {earthSym, heavenSym} = resultOfDateSym;
  
  let sixAnimals: SIX_ANIMALS[] = setSixAnimals(heavenSym);
  let sixAnimalsStrs: string[] = sixAnimals.map(animals=> SIX_ANIMALS[animals]); 
  upbase = setBasicBase(upbsSet);
  downbase = setBasicBase(bsSet);
  result = {
    "upbase": upbase,
    "downbase": downbase,
    "fortuneNum": finalResult.getFortuneNum(),
    "event": finalResult.getEventNum(),
    "corEvent": finalResult.getCorEventNum(),
    "mainElem": FIVE_ELEMENT[finalResult.getMainElement()],
    "dateSymbol": HEAVEN_SYMBOL[heavenSym]+EARTH_SYMBOL[heavenSym],
    "sixAnimal": sixAnimalsStrs,
    "movedNum": judgeMovedSet(bsSet, upbsSet)
  }
  return result;
};
interface moveBase {
  index: number,
  isNeg: boolean
};
/**
 * @description judgeMovedSet
 * 
 * @param baseSet baseSet 下爻
 * @param upBaseSet upBaseSEt 下爻
 */
const judgeMovedSet = (baseSet: BaseSet, upBaseSet: upBaseSet ): (null|number)=>{
  let resultNum: null | number = null;
  let upMovedSet = upBaseSet.getMovedSet();
  let downMovedSet = baseSet.getMovedSet();
  let upperBase = upBaseSet.getOrigSetSymbolLabel();
  let downBase = baseSet.getOrigSetSymbolLabel();
  let upResultArr:Array<moveBase> = [];
  let downresultArr:Array<moveBase> = [];
  let finalResultArr:Array<moveBase> = [];
  if (upMovedSet!==null) {
    upResultArr = upperBase.filter((item, index)=> {
      return item == CoinSymbol[CoinSymbol.O] || item == CoinSymbol[CoinSymbol.X];
    }).map((item, index)=> {
      return {
        index: 6-index,
        isNeg: item == CoinSymbol[CoinSymbol.X]
      }
    });
  }
  if (downMovedSet!==null) {
    downresultArr = downBase.filter((item, index)=> {
      return item == CoinSymbol[CoinSymbol.O] || item == CoinSymbol[CoinSymbol.X];
    }).map((item, index)=> {
      return {
        index: 3-index,
        isNeg: item == CoinSymbol[CoinSymbol.X]
      }
    });
  }
  finalResultArr = [...upResultArr, ...downresultArr];
  if (finalResultArr.length > 0 && finalResultArr.length <= 2) {
    resultNum = finalResultArr[finalResultArr.length-1].index;
  }
  return resultNum;
};
const setSixAnimals = (heavenElem: HEAVEN_SYMBOL): SIX_ANIMALS[] =>{
  let resultAnimals: SIX_ANIMALS[]= [];
  let startAnimal: SIX_ANIMALS = SIX_ANIMALS.青龍;
  switch(heavenElem) {
    case HEAVEN_SYMBOL.甲:
    case HEAVEN_SYMBOL.乙:
      startAnimal = SIX_ANIMALS.青龍;
      break;
    case HEAVEN_SYMBOL.丙:
    case HEAVEN_SYMBOL.丁:
      startAnimal = SIX_ANIMALS.朱雀;
      break;
    case HEAVEN_SYMBOL.戊:
      startAnimal = SIX_ANIMALS.勾塵;
      break;
    case HEAVEN_SYMBOL.己:
      startAnimal = SIX_ANIMALS.騰蛇;
      break;
    case HEAVEN_SYMBOL.庚:
    case HEAVEN_SYMBOL.辛:
      startAnimal = SIX_ANIMALS.白虎;
      break;
    default:
      startAnimal = SIX_ANIMALS.玄武;
      break;
  }
  for ( let idx =0; idx < 6; idx++ ){
    startAnimal = (startAnimal+6)%6; 
    resultAnimals.push(startAnimal);
    startAnimal++;
  }
  return resultAnimals;
};
/**
 * @description setBasicBase 設定基礎回應
 * 
 * @param {BaseSet|upBaseSet} baseSet 
 */
const setBasicBase = (baseSet: BaseSet|upBaseSet): object => {
  let result: object = {};
  let movedSet = baseSet.getMovedSet();
  if (movedSet==null) {
    result = {
      "earthSym": baseSet.getBasicSet().getEarthSymBolSet(),
      "fiveElem": baseSet.getBasicSet().getFiveElesSYM(),
      "sixRes": baseSet.getBasicSet().getSixResSymLabel(),
      "base": baseSet.getOrigSetSymbolLabel()
    }
  } else {
    result = {
      "earthSym": baseSet.getBasicSet().getEarthSymBolSet(),
      "fiveElem": baseSet.getBasicSet().getFiveElesSYM(),
      "sixRes": baseSet.getBasicSet().getSixResSymLabel(),
      "base": baseSet.getOrigSetSymbolLabel(),
      "movebase": {
        "earthSym": movedSet.getEarthSymBolSet(),
        "fiveElem": movedSet.getFiveElesSYM(),
        "sixRes": movedSet.getSixResSymLabel(),
        "base": baseSet.getMovedSymbolabel(), 
      }
    }
  }
  return result;
};
export { EARTH_SYMBOL,
  OrderSetUtil, 
  UpBaseSet,
  SIX_RELATIVE_SYMBOL, SYMBOL_CHAIN, symUtil,
  SIX_RELATIVE, SIX_REL, CoinSet, CoinSymbol, FaceSymbol, FIVE_ELM, FIVE_EL, FourRES, FIVE_ELEMENT, BaseSet, EARTH_FIVE_MAP,
  EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE,
  FortuneCS, FourtuneNumMap,
  getFortuneResult,
  getDateToEHSymbol,
  HEAVEN_SYMBOL,
  SIX_ANIMALS,
  getDateToEHSYM
};