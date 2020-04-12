/* Some case stuff ig. 
This has no practical use. */

let isNumber = i => {
    let input = i;
    if (i.toString) input = i.toString();
    if (isNaN(Number(input))) return false;
    return true;
}
let isLetter = i => {
    let input = i;
    if (i.toString) input = i.toString();
    if (input.toLowerCase() === input.toUpperCase()) return false;
    return true;
}
let isSpecialChar = i => {
    let input = i;
    if (i.toString) input = i.toString();
    if (!isLetter(input) && !isNumber(input)) return true;
    return false;
}
let caseof = i => {
    let input = i;
    if (i.toString) input = i.toString();
    if (isLetter(input) || isSpecialChar(input)) return "Not a valid input.";
    if (input.toLowerCase() === input) return "Lowercase";
    if (input.toUpperCase() === input) return "Uppercase";
    return "Some sort of error occurred!";
}

console.log(isNumber(3));
console.log(isNumber("5"));
console.log(isNumber("bruh"));

console.log(isLetter(3));
console.log(isLetter("h"));
console.log(isLetter("{"));

console.log(isSpecialChar(3));
console.log(isSpecialChar("h"));
console.log(isSpecialChar("{"));

/* Expected output:
true
true
false
false
true
false
false
false
true */
