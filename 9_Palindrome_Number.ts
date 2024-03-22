/*
function isPalindrome(x: number): boolean {
    const y = x.toString().split("").reverse().join("");
    if(x.toString() == y) return true;
    return false;
};
*/

/*
function isPalindrome(x: number): boolean {

    let y: string = "";

    for (let i = x.toString().length-1; i >= 0; i--)
        y += x.toString()[i];

    if (x.toString() == y) return true;
    return false;
    
}
*/

function isPalindrome(x: number): boolean {
    const str = x.toString();
    return str === str.split('').reverse().join('');
}