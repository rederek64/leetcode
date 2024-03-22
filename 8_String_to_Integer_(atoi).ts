const range = {
    min: Math.pow(-2, 31),
    max: Math.pow(2, 31) - 1
}

let troll = [];

function myAtoi(s: string): number {

    let i = 0;
    let neg = false;

    while (i < s.length && s[i] === ' ') i++;

    if(['-', '+'].includes(s[i])) {
        neg = s[i] === '-';
        i++;
    }

    if (i < s.length && !s[i].match(/[0-9]/)) return 0;

    let res = '';

    while(i < s.length && s[i].match(/[0-9]/)) {
        res +=s[i];
        i++;
    }

    if(!neg && +res >= range.max) return range.max;
    if(neg && -res <= range.min) return range.min;

    return neg ? -res : +res;

};