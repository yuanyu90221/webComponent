import {SIX_REL, SIX_RELATIVE, FIVE_ELM, FIVE_EL, FourRES, CoinSet, FIVE_ELEMENT} from './index';
import { CoinSymbol } from './coinSet';
import { EARTH_SYMBOL } from './enum_data';

console.log(`六親`);
let result = SIX_RELATIVE.antiVersal(SIX_REL[0], 1);
console.log(SIX_REL[0].getSymbol()+ "剋" + result.getSymbol());
let result1 = SIX_RELATIVE.transversal(SIX_REL[0], 1);
console.log(SIX_REL[0].getSymbol()+ "生" + result1.getSymbol());

console.log(`五行`);
let result2 = FIVE_ELM.antiVersal(FIVE_EL[0], 1);
console.log(FIVE_EL[0].getSymbol()+ "剋" + result2.getSymbol());
let result3 = FIVE_ELM.transversal(FIVE_EL[0], 1);
console.log(FIVE_EL[0].getSymbol()+ "生" + result3.getSymbol());

let result4RES = new FourRES([CoinSymbol["||"], CoinSymbol["|"], CoinSymbol["||"]]);
console.log(result4RES.getEarthSymBolSet());
console.log(FIVE_ELEMENT[result4RES.getMainElement()]);
console.log(result4RES.getSymBolSet());
console.log(result4RES.getSymBolSetLabel());
console.log(result4RES.checkPos()?'四陽':'四陰');