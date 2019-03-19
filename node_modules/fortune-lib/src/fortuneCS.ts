import BaseSet from './baseSet';
import upBaseSet from './upBaseSet';
import CoinSet from './coinSet';
import {CoinSymbol} from './coinSet';
import {FIVE_ELEMENT, SIX_RELATIVE_SYMBOL} from './enum_data';
import FourRES  from './fourResponse';
import FortuneNumMap from './fortuneNumMap';
/**
 * @description FortuneCS 功能物件
 * @author jsonLiang
 */
export default class FortuneCS {
  /**
   * 上掛
   */
  private upbsSet: upBaseSet; 
  /**
   * 下掛
   */
  private bsSet: BaseSet;
  /**
   * 世:掛數 
   */ 
  private eventNum: number = 0;
  /**
   * 應:掛數
   */
  private corEventNum: number = 0;
  /**
   * 是否為歸魂掛
   */
  private isReturnElement = false;
  /**
   * 本宮
   */
  private mainElement: FIVE_ELEMENT = FIVE_ELEMENT.金;
  /**
   * 六親對應五行表(動態生成)
   */
  private checkSIXmap: any = {};
  /**
   * 掛數對應64掛
   */
  private fortuneNum: number = 0;
  constructor(coinSet: CoinSet[][]){
    let [upPart, downPart] = coinSet;
    this.upbsSet = new upBaseSet(upPart);
    this.bsSet = new BaseSet(downPart);
    this.findEventPair();
  }

  public getUpBsSet(): upBaseSet{
    return this.upbsSet;
  }

  public getbsSet(): BaseSet{
    return this.bsSet;
  }

  /**
   * @description findEventPair 設定世應
   */
  public findEventPair() {
    let upBaseSymbol: CoinSymbol[] = this.upbsSet.getRealSetSymbol();
    let baseSymbol: CoinSymbol[] = this.bsSet.getRealSetSymbol();
    let resultCompare: string = "";
    for (let idx = 0; idx < 3; idx++) {
      if (upBaseSymbol[idx] == baseSymbol[idx]) {
        resultCompare += "O";
      }
      else {
        resultCompare += "X";
      }
    }   
    switch(resultCompare) {
      case "XXO":
        this.eventNum = 4;
        this.corEventNum = 1;
        break;
      case "XOO":
        this.eventNum = 5;
        this.corEventNum = 1;
        break;
      case "OOO":
        this.eventNum = 6;
        this.corEventNum = 3;
        break;
      case "OOX": 
        this.eventNum = 1;
        this.corEventNum = 4;
        break;
      case "OXX":
        this.eventNum = 2;
        this.corEventNum = 5;
        break;
      case "XXX":
        this.eventNum = 3;
        this.corEventNum = 6;
        break;
      case "OXO":
        this.eventNum = 3;
        this.corEventNum = 6;
        this.isReturnElement = true; //歸魂掛
        break;
      default: 
        this.eventNum = 4;
        this.corEventNum = 1;
        break;
    }
    switch(this.eventNum) {
      case 1:
      case 2:
      case 3:
      case 6:
        if (this.isReturnElement) {
          this.mainElement = this.bsSet.getBasicSet().getMainElement();
        }
        else {
          this.mainElement = this.upbsSet.getBasicSet().getMainElement();
        }
        break;
      case 4:
      case 5:
        let baseSymbol: CoinSymbol[] = this.getbsSet().getRealSetSymbol();
        let convertedSymbols: CoinSymbol[] = this.switchSymbol(baseSymbol);
        let computeFourRes = new FourRES(convertedSymbols);
        this.mainElement = computeFourRes.getMainElement();
        break;
    }
    this.setupSixMap(this.mainElement);
    this.bsSet.getBasicSet().setupSixRes(this.checkSIXmap);
    this.upbsSet.getBasicSet().setupSixRes(this.checkSIXmap);
    this.setMovedSixRes(this.bsSet);
    this.setMovedSixRes(this.upbsSet);
    this.setFortuneNum();
  }
  /**
   * @description setFortuneNum
   */
  public setFortuneNum():void {
    let setSymbolsStr = this.upbsSet.getRealSetSymbolStr() + this.bsSet.getRealSetSymbolStr();
    this.fortuneNum = FortuneNumMap[setSymbolsStr];
  }
  
  public getFortuneNum():number {
    return this.fortuneNum;
  }
  /**
   * @description setMovedSixRes 設定動爻六親
   * 
   * @param {BaseSet|upBaseSet} bsSet 
   */
  public setMovedSixRes(bsSet: BaseSet|upBaseSet) {
    if (bsSet.checkMoved()) {
      let bsMovedSet = bsSet.getMovedSet();
      if (bsMovedSet!=null){
        bsMovedSet.setupSixRes(this.checkSIXmap);
      }
    } 
  }
  /**
   * @description switchSymbol 反轉掛
   * 
   * @param {CoinSymbol[]} inputSymbols 
   */
  public switchSymbol(inputSymbols: CoinSymbol[]): CoinSymbol[] {
    return inputSymbols.map(item => {
      switch(item) {
        case CoinSymbol["|"]:
          return CoinSymbol["||"];
        default:
          return CoinSymbol["|"];
      }
    });
  }

  public setupSixMap(startElem: FIVE_ELEMENT) {
    let startSix:SIX_RELATIVE_SYMBOL = SIX_RELATIVE_SYMBOL.兄;
    let startFive: FIVE_ELEMENT = startElem;
    for (let idx =0; idx < 5; idx++) {
      this.checkSIXmap[(startFive+idx)%5] = (startSix+idx)%5; 
    } 
  }
  public getMainElement(): FIVE_ELEMENT{
    return this.mainElement;
  }

  public getEventNum():number{
    return this.eventNum;
  }

  public getCorEventNum(): number{
    return this.corEventNum;
  }
}
