/* These, like the case things, have no
practical use. Just some demonstrations. */

isInt = (input) => {
  if(isNaN(input)) return "Input is not a number.";
  if(Math.round(input)===input) return true;
  return false;
}

isDecimal = (input) => {
  if(isNaN(input)) return "Input is not a number.";
  if(Math.round(input)===input) return false;
  return true;
}

Math.isPyTriple = (a, b) => {
  let c = Math.sqrt(a ** 2 + b ** 2);
  if(isDecimal(a)||isDecimal(b)||isDecimal(c)) return false;
  return true;
}

let x = 3;
let y = 3.4;
let z = 4;

console.log(isInt(x), isDecimal(x));
console.log(isInt(y), isDecimal(y));
console.log(Math.isPyTriple(x, z), Math.isPyTriple(y, z));

/* Expected output:
true
false
false
true
true
false */
