import BaseSet from './baseSet';
import upBaseSet from './upBaseSet';
import CoinSet from './coinSet';
import { CoinSymbol } from './coinSet';
import { FIVE_ELEMENT } from './enum_data';
/**
 * @description FortuneCS 功能物件
 * @author jsonLiang
 */
export default class FortuneCS {
    /**
     * 上掛
     */
    private upbsSet;
    /**
     * 下掛
     */
    private bsSet;
    /**
     * 世:掛數
     */
    private eventNum;
    /**
     * 應:掛數
     */
    private corEventNum;
    /**
     * 是否為歸魂掛
     */
    private isReturnElement;
    /**
     * 本宮
     */
    private mainElement;
    /**
     * 六親對應五行表(動態生成)
     */
    private checkSIXmap;
    /**
     * 掛數對應64掛
     */
    private fortuneNum;
    constructor(coinSet: CoinSet[][]);
    getUpBsSet(): upBaseSet;
    getbsSet(): BaseSet;
    /**
     * @description findEventPair 設定世應
     */
    findEventPair(): void;
    /**
     * @description setFortuneNum
     */
    setFortuneNum(): void;
    getFortuneNum(): number;
    /**
     * @description setMovedSixRes 設定動爻六親
     *
     * @param {BaseSet|upBaseSet} bsSet
     */
    setMovedSixRes(bsSet: BaseSet | upBaseSet): void;
    /**
     * @description switchSymbol 反轉掛
     *
     * @param {CoinSymbol[]} inputSymbols
     */
    switchSymbol(inputSymbols: CoinSymbol[]): CoinSymbol[];
    setupSixMap(startElem: FIVE_ELEMENT): void;
    getMainElement(): FIVE_ELEMENT;
    getEventNum(): number;
    getCorEventNum(): number;
}
