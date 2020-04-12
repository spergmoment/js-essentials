/* The Math object is built-in to JS.
Let's see what it can do. */

console.log(Math.round(4.1)); // rounds the number, returning 4
console.log(Math.round(7.7)); // this rounds up, returning 8

console.log(Math.pow(3, 3)); // takes the first number to the power of the second number, returning 27
console.log(3**3); // this also works, returning 27. ** is the operator for power in JS

console.log(Math.sqrt(9)); // takes the square root of 9, returning 3

console.log(Math.abs(-32.9)); // takes the absolute value of the number, returning 32.9

console.log(Math.ceil(6.3)); // rounds the number up regardless of decimal (unless it has no decimals besides 0), returning 7

console.log(Math.floor(7.9)); // same as Math.ceil() but rounds it down, returning 7

console.log(Math.sin(90)); // takes the sine of the number (in radians), returning pi/2
console.log(Math.sin(90 * Math.PI / 180)); // takes the sine of the number and converts it to degrees, returning 1

console.log(Math.cos(0)); // takes the cosine of the number, in radians, returning 1
console.log(Math.cos(0 * Math.PI / 180)); // takes the cosine of the number and converts it to degrees, which also happens to be 1

console.log(Math.min(0, 150, 30, 20, -8, -200)); // takes the smallest number of the group, returning -200

console.log(Math.max(0, 150, 30, 20, -8, -200)); // takes the largest number of the group, returning 150

console.log(Math.random()); // takes a random number between 0 and 1 (0 inclusive, 1 exclusive)
console.log(Math.random() * 6); // same as before, but max of 6
console.log((Math.random() * 6) + 3); // again, same as before, but min of 3 and max of 6
console.log(Math.round((Math.random() * 12) + 2)); // same again, but this time, it rounds the number, with a max of 12 and min of 2


/* That's all the methods that you may
ever need. There are some others:
acos(x), asin(x), atan(x), atan2(y, x),
exp(x), and log(x), but these aren't
very useful. Read about them here:
https://www.w3schools.com/js/js_math.asp

Now, let's look at the constants. */

console.log(Math.PI); // this returns 3.141592653589793

console.log(Math.E); // returns Euler's number, or ~2.71828

console.log(Math.SQRT2); // returns the square root of 2

console.log(Math.SQRT1_2); // returns the square root of 1/2

console.log(Math.LN2); // returns the natural logarithm of 2

console.log(Math.LN10); // returns the natural logarithm of 10

console.log(Math.LOG2E); // returns base 2 logarithm of E

console.log(Math.LOG10E); // returns base 10 logarithm of E

/* The only constant you'll really ever need is pi.
The methods are more overall useful, but these constants
can be nice in more complicated JS code. */

/* The expected output should be:
4
8
27
27
3
32.9
7
7
0.8939966636005579
1
1
1
-200
150
0.8639141349469235
1.1743734907998542
7.552440530779345
2
3.141592653589793
2.718281828459045
1.4142135623730951
0.7071067811865476
0.6931471805599453
2.302585092994046
1.4426950408889634
0.4342944819032518
*/
