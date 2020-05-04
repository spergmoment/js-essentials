# Strings
Strings are possibly the most basic type you could think of: they display text. They are used everywhere, due to the importance of this.

Creating strings can be done with:
```js
var str = "This is a string!";
```

That makes it seem like it would just be used for displaying text and nothing else, right? Wrong!

Well, *technically*, it is. However, it has many features that aren't immediately obvious. So, let's cover those!
## Concatenation
You can concatenate (put together) strings with other objects. For example:
```js
var concStr = "This is a concatenated " + "string!";
console.log(concStr);
```
Doing this returns:
```js
This is a concatenated string!
```
You can also combine it with numbers, arrays, etc. For example:
```js
var num = 2;
var concStr2 = "This is concatenated string " + num;
console.log(concStr2);
```
Returns:
```js
This is concatenated string 2
```
And for arrays and booleans:
```js
var arr = ["An", "Array"];
var bool = false;
var concStr3 = "Question: is this " + arr + "?\nAnswer: " + bool;
console.log(concStr3);
```
Returns:
```js
Question: is this An,Array?
Answer: false
```
When concatenated to strings, arrays join their elements together with a comma. For more info, after reading this, go to the [Working with Arrays](https://spergmoment.github.io/js-essentials/tutorials/types/Working%20with%20Arrays) page.

## Literals
String literals are just like concatenation, but more efficient and nicer-looking. These are much more complex overall, but this will be the basics for now.

String literals are created with backticks (`), and can concatenate variables with ${<Variable>}, like so:
```js
var lit = "literal";
var num = 1;
var arr = ['An', 'Array'];
var bool = true;
var strlit = `This is string ${lit} #${num}!\nTrue or false: This is not ${arr}.\nAnswer: ${bool}`;
console.log(strlit);
```
Returns:
```js
This is string literal #1!
True or false: This is not An,Array.
Answer: true
```
There are much more... practical uses of this, but this is just an example.

### Templates
**WARNING: This section is much more complicated than anything that has been covered so far. Be warned, and don't get angry if you don't understand!**

Literal templates allow you to insert conditionals *inside* of your strings! The basic syntax is:
```js
${<Conditional> ? "If conditional is true, go here" : "Otherwise, go here."}
```
They allow for cleaner code overall and remove the need for messy if statements everywhere!

A practical example of this can be seen in my [Class Definition demonstration.](https://github.com/spergmoment/js-essentials/blob/master/demonstrations-old/class%20definition.js)

One good thing to do could be having a random number and choosing between strings, like so:
```js
var rand = Math.floor(Math.random() * 4);
var temp = `This is a string literal template. ${rand >= 1 ? "I like string literal templates." : "String literal templates are confusing!"}`;
console.log(temp);
```
This will return either:
```js
This is a string literal template. I like string literal templates.
```
About 2/3 of the time, or
```js
This is a string literal template. String literal templates are confusing!
```
About 1/3 of the time.

The random number may be confusing, but check out my [Math object demonstration](https://github.com/spergmoment/js-essentials/blob/master/demonstrations-old/math%20object.js) for more info.

## Practical Uses
Strings have MANY practical uses. In fact, they're used just about everywhere.

If you ever want to display text, use strings.
