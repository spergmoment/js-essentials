/* NaN is pretty interesting.
Here's a demonstration. */

console.log(NaN + 3); // this returns NaN, same with any other operation

console.log(NaN - "34"); // also returns NaN

/* Now the interesting thing... */

console.log(typeof NaN); // this returns a number!

/* Now, for the way to get NaN... */

console.log("hello" / 13);

/* Interestingly, when multiplying, subtracting, or dividing, JS tries to convert strings to numbers,
but with adding, it just puts the string and number together... */

console.log("100" - 52) // returns 48

console.log("15" + 9) // returns 159

/* Infinity is also pretty interesting. */

console.log(9e999 * 9e999) // this is outside of the normal range of numbers. returns Infinity

console.log(23/0) // also returns Infinity, same with any division by 0.

console.log(typeof Infinity) // also returns a number!

/* The expected output should be this:
NaN
NaN
number
NaN
48
159
Infinity
Infinity
number
*/
