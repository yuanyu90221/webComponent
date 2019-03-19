/**
 * @description symbolWord
 * @author jsonLiang
 */
export default class symbolWord {
  /**
   * 符號
   */
  private symbol: string = '';
  /**
   * 反向指標
   */
  private reverse: any;
  /**
   * 正向指標
   */
  private order: any;
  constructor({symbol='', reverse = {}, order = {}}) {
    this.symbol = symbol;
    this.reverse = reverse;
    this.order = order;
  }
  public next() {
    return this.order;
  }
  public getSymbol() {
    return this.symbol;
  }
  public reverseOrder() {
    return this.reverse;
  }

  public setOrder(order = {}) {
    this.order = order;
  }
  public setReverse(reverse = {}){
    this.reverse = reverse;
  }
}