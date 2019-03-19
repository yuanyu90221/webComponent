/**
 * 銅錢正反 處理:
 * 
 * 反反反 -> X
 * 正反反 -> |
 * 正正反 -> ||
 * 正正正 -> O
 * 
 */
enum CoinSymbol {
  'X',
  '|',
  '||',
  'O'
};
/**
 * 銅錢 正反:
 * 
 * FaceDown: 反
 * FaceUp: 正
 */
enum FaceSymbol {
  FaceDown,
  FaceUp
};
/**
 * @description CoinSet 基礎掛 物件
 * @author jsonLiang
 */
export default class CoinSet {
  /**
   * 銅錢正反面
   */
  private faceSet: FaceSymbol[] = [];
  /**
   * 對應卦象
   */
  private coinSymbol: CoinSymbol;  
  constructor(faceSet: FaceSymbol[]){
    if (faceSet.length !== 3) {
      throw Error("Input Set Should be 3");
    }
    this.faceSet = [...faceSet];
    this.coinSymbol = this.setSymbol();
  }

  private setSymbol(): CoinSymbol {
    let counter: number = this.faceSet.reduce((pre, current)=> {
      return pre + current;
    });
    
    // const symbol:string = CoinSymbol[counter];
    let result: CoinSymbol = CoinSymbol.X;
    switch (counter) {
      case CoinSymbol["|"]:
        result = CoinSymbol["|"];
        break;
      case CoinSymbol["||"]:
        result = CoinSymbol["||"];
        break;
      case CoinSymbol.O:
        result = CoinSymbol.O;
        break;
    }
    return result;
  }

  public getSymbol():CoinSymbol {
    return this.coinSymbol;
  }
  
  public getFaceSet():FaceSymbol[] {
    return this.faceSet;
  }

  public getRealSymbol(): CoinSymbol {
    let realSymbol: CoinSymbol = this.coinSymbol;
    switch(this.coinSymbol) {
      case CoinSymbol.O:
        return CoinSymbol["|"];
      case CoinSymbol.X:
        return CoinSymbol["||"];
      default:
      return realSymbol;
    }
  }

  public getMoveSymbol(): CoinSymbol {
    let realSymbol: CoinSymbol = this.coinSymbol;
    switch(this.coinSymbol) {
      case CoinSymbol.O: 
        return CoinSymbol["||"];
      case CoinSymbol.X:
        return CoinSymbol["|"];
      default:
        return realSymbol; 
    }
  }
}

export {CoinSymbol, FaceSymbol};