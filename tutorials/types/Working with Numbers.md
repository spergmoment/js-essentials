# Working with Numbers
## Operators
Operators are a generally important part of JS. They are used often to change numbers.

The most basic operations, +, -, /, and * are available, like so:
```js
var num = 5;
console.log(num + 4, num - 3, num / 5, num * 2);
```
This will return
```js
9 2 1 10
```
There are more operators, like +=, -=, etc. which all just add, subtract, etc to a number, like so:
```js
var num2 = 1;
num2 += 3;
console.log(num2);
```
Which returns `4`.

There are many operators but many of them aren't as useful in basic code. Check the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/javascript) for more info on these.
## Math
The Math object is quite a useful one. It has tons of useful functions, like rounding and such, and even has constants like pi.

For all information regarding the Math object, refer to my [Math object documentation.](https://github.com/spergmoment/js-essentials/blob/master/demonstrations-old/math%20object.js)
## How Numbers Work with Other Types
Numbers behave much differently when other types of objects are used. For example:
```js
var num = 4;
console.log(num + "5");
console.log(num - "5");
console.log(num + "hi");
console.log(num - "hello");
```
For every operator except for addition, using an operator on a number in a string treats the string as a number. Addition just concatenates (puts together) the string. Additionally, because of this, using any operator besides addition on a number and string results in NaN, which means "not a number". With this, the output is:
```js
45
-1
4hi
NaN
```
Despite being called "Not a Number," NaN's type is actually a number. You can see this with using the typeof operator on the built-in NaN value. (Refer to the [type docs](https://spergmoment.github.io/js-essentials/tutorials/types/Types) for more info on typeof and other types.)
```js
console.log(typeof NaN);
```
Returns:
```js
Number
```
This, as well as info on Infinity, is all covered in my [NaN and Infinity docs.](https://github.com/spergmoment/js-essentials/blob/master/demonstrations-old/NaN%20and%20Infinity.js)
