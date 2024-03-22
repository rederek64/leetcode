function reverse(x: number): number {

    let xstr: String = new String(x);
    let xarr: String[] = xstr.split('').filter((x: String) => x != new String("-"));
    let rxarr: String[] = xarr.reverse();
    let rxstr: String = new String(rxarr.join(''));
    let rxint: Number = new Number(rxstr);

    if (x < 0) {
        if (new Number(-rxint) < new Number(Math.pow(-2, 31))) return 0;
        return -rxint;
    }

    if (rxint > new Number(Math.pow(2, 31) - 1)) return 0;
    return +rxint;

};