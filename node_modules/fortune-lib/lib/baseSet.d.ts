import CoinSet from './coinSet';
import { CoinSymbol } from './coinSet';
import FourRES from './fourResponse';
export default class BaseSet {
    private basicSet;
    private movedSet;
    private orgSet;
    private orgSetSymbol;
    private movedSetSymbol;
    private realSetSymbol;
    constructor(orgSet: CoinSet[]);
    checkMoved(): boolean;
    getOrigSetSymbol(): CoinSymbol[];
    getOrigSetSymbolLabel(): string[];
    getMovedSymbolabel(): string[];
    getRealSetSymbol(): CoinSymbol[];
    getRealSetSymbolStr(): string;
    getMovedSetSymbol(): CoinSymbol[];
    getBasicSet(): FourRES;
    getMovedSet(): FourRES | null;
}
