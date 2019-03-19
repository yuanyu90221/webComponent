// import fortune = require('fortune-lib/lib');
import {getFortuneResult, FaceSymbol, CoinSet} from 'fortune-lib/lib';
import * as moment from 'moment';
let coSet6 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceDown, FaceSymbol.FaceDown]);
let coSet5 = new CoinSet([FaceSymbol.FaceDown, FaceSymbol.FaceUp, FaceSymbol.FaceUp]);
let coSet4 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceDown]);
let upbsSet = [coSet6, coSet5, coSet4];
let coSet3 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceDown, FaceSymbol.FaceDown]);
let coSet2 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceUp]);
let coSet1 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceDown]);
let bsSet = [coSet3, coSet2, coSet1];

let result: object = getFortuneResult([upbsSet, bsSet], moment().unix()*1000);
console.log(JSON.stringify(result));