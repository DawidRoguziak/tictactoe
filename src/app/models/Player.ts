export class Player {
    winCounter: number;
    name: String;
    isComputer: boolean;
    symbol: String;

    constructor(name: String, symbol:String, isComputer:boolean = false) {
        this.name = name;
        this.winCounter = 0;
        this.isComputer = isComputer;
        this.symbol = symbol;
    }
}