/**
 * @description symbolWord
 * @author jsonLiang
 */
export default class symbolWord {
    /**
     * 符號
     */
    private symbol;
    /**
     * 反向指標
     */
    private reverse;
    /**
     * 正向指標
     */
    private order;
    constructor({ symbol, reverse, order }: {
        symbol?: string | undefined;
        reverse?: {} | undefined;
        order?: {} | undefined;
    });
    next(): any;
    getSymbol(): string;
    reverseOrder(): any;
    setOrder(order?: {}): void;
    setReverse(reverse?: {}): void;
}
