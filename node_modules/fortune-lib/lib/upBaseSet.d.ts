import { EARTH_SYMBOL } from './enum_data';
import CoinSet from './coinSet';
import BaseSet from './baseSet';
/**
 * @description upBaseSet 上掛
 * @author jsonLiang
 */
export default class upBaseSet extends BaseSet {
    constructor(orgSet: CoinSet[]);
    /**
     * @description getNext3EarthSYMs
     *
     * @param {EARTH_SYMBOL} first
     */
    getNext3EarthSYMs(first: EARTH_SYMBOL): EARTH_SYMBOL[];
}
