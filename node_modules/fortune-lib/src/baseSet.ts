import CoinSet from './coinSet';
import {CoinSymbol} from './coinSet';
import FourRES from './fourResponse';
export default class BaseSet {
  private basicSet: FourRES;
  private movedSet: FourRES|null = null;
  private orgSet: CoinSet[] = [];
  private orgSetSymbol: CoinSymbol[] = [];
  private movedSetSymbol: CoinSymbol[] = [];
  private realSetSymbol: CoinSymbol[] = [];

  constructor(orgSet: CoinSet[]) {
    this.orgSet = [...orgSet];
    let [first, second, third] = orgSet;
    this.orgSetSymbol = [first.getSymbol(), second.getSymbol(), third.getSymbol()];
    this.realSetSymbol = [first.getRealSymbol(), second.getRealSymbol(), third.getRealSymbol()];
    this.movedSetSymbol = [first.getMoveSymbol(), second.getMoveSymbol(), third.getMoveSymbol()];
    this.basicSet = new FourRES(this.realSetSymbol);  
    if (this.checkMoved()){
      this.movedSet = new FourRES(this.movedSetSymbol);
    }
  }
  public checkMoved(): boolean {
    let [first, second, third] = this.orgSet;
    return first.getRealSymbol()!==first.getMoveSymbol() || second.getRealSymbol()!==second.getMoveSymbol() 
    || third.getRealSymbol()!==third.getMoveSymbol(); 
  }

  public getOrigSetSymbol(): CoinSymbol[] {
    return this.orgSetSymbol;
  }

  public getOrigSetSymbolLabel(): string[] {
    return this.getOrigSetSymbol().map(item=> {
      return CoinSymbol[item];
    });
  }

  public getMovedSymbolabel(): string[] {
    let movedSet = this.movedSet;
    if (movedSet!=null){
      return movedSet.getSymBolSetLabel();
    } else {
      return [];
    }
  }
  public getRealSetSymbol(): CoinSymbol[] {
    return this.realSetSymbol;
  }

  public getRealSetSymbolStr(): string {
    let realSymbol: string[] = this.realSetSymbol.map(item => item+"");
    return realSymbol.reduce((curItem, nextItem)=> {
      return curItem+nextItem;
    });
  }

  public getMovedSetSymbol(): CoinSymbol[] {
    return this.movedSetSymbol;
  }

  public getBasicSet(): FourRES{
    return this.basicSet;
  }

  public getMovedSet(): FourRES|null {
    return this.movedSet;
  }
}