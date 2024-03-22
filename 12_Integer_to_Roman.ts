function intToRoman(num: number): string {
    const SymbolTable: {[key: string]: number} = {'I': 1, 'IV': 4, 'V': 5, 'IX': 9, 'X': 10, 'XL': 40, 'L': 50, 'XC': 90, 'C': 100, 'CD': 400, 'D': 500, 'CM': 900, 'M': 1000};
    let numStr: string = '';
    let numTemp: number = num;

    // Start from the largest value and work towards the smallest.
    for (let key of Object.keys(SymbolTable).sort((a, b) => SymbolTable[b] - SymbolTable[a])) {
        while (numTemp >= SymbolTable[key]) {
            numTemp -= SymbolTable[key];
            numStr += key;
        }
    }

    return numStr;
};