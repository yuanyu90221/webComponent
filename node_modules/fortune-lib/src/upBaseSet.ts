import FourRES from './fourResponse';
import {CoinSymbol} from './coinSet';
import { EARTH_SYMBOL } from './enum_data';
import * as OrderSetUtil from './orderSet';
import CoinSet from './coinSet';
import BaseSet from './baseSet';
/**
 * @description upBaseSet 上掛
 * @author jsonLiang
 */
export default class upBaseSet extends BaseSet{

  constructor(orgSet: CoinSet[]) {
    super(orgSet);
    let first = this.getBasicSet().getEarthSYM()[0];
    let newEarthSYMs = this.getNext3EarthSYMs(first);
    this.getBasicSet().setEarthSYM(newEarthSYMs);
    this.getBasicSet().setFiveEles();
  }
  /**
   * @description getNext3EarthSYMs
   * 
   * @param {EARTH_SYMBOL} first 
   */
  public getNext3EarthSYMs(first: EARTH_SYMBOL): EARTH_SYMBOL[] {
    let newEARTHSYMs: EARTH_SYMBOL[] = [];
    let pushedSYM: EARTH_SYMBOL = first;
    let index: number = 0;
    if (this.getBasicSet().checkPos()) {
      for (; index < 3; index++) {
        pushedSYM = OrderSetUtil.transferNextOrder(pushedSYM);
        newEARTHSYMs.unshift(pushedSYM);
      }
    } else {
      for (; index < 3; index++) {
        pushedSYM = OrderSetUtil.transferReverseOrder(pushedSYM);
        newEARTHSYMs.unshift(pushedSYM);
      }
    }
    return newEARTHSYMs;
  }
  
}