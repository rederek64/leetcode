function romanToInt(s: string): number {
    const RomanValues: {[key: string]: number} = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total: number = 0;
    let i: number = 0;

    while (i < s.length) {
        if (i + 1 < s.length && RomanValues[s[i]] < RomanValues[s[i + 1]]) {
            total += RomanValues[s[i + 1]] - RomanValues[s[i]];
            i += 2;
        } else {
            total += RomanValues[s[i]];
            i++;
        }
    }

    return total;
};