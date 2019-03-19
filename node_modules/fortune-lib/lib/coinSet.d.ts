/**
 * 銅錢正反 處理:
 *
 * 反反反 -> X
 * 正反反 -> |
 * 正正反 -> ||
 * 正正正 -> O
 *
 */
declare enum CoinSymbol {
    'X' = 0,
    '|' = 1,
    '||' = 2,
    'O' = 3
}
/**
 * 銅錢 正反:
 *
 * FaceDown: 反
 * FaceUp: 正
 */
declare enum FaceSymbol {
    FaceDown = 0,
    FaceUp = 1
}
/**
 * @description CoinSet 基礎掛 物件
 * @author jsonLiang
 */
export default class CoinSet {
    /**
     * 銅錢正反面
     */
    private faceSet;
    /**
     * 對應卦象
     */
    private coinSymbol;
    constructor(faceSet: FaceSymbol[]);
    private setSymbol;
    getSymbol(): CoinSymbol;
    getFaceSet(): FaceSymbol[];
    getRealSymbol(): CoinSymbol;
    getMoveSymbol(): CoinSymbol;
}
export { CoinSymbol, FaceSymbol };
