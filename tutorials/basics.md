# The Basics
Javascript is a great language for beginners. It, along with Python, is essential to beginning your coding career.

## Why JS?
Javascript, as stated before, is a great beginner's language. It teaches all the fundamentals of coding, while remaining easy to learn.

It's not just for beginners, though. It has many advanced tools that are *great* for experienced coders, like Node.JS, NPM, and more.

## Creating and Running
Let's get started with the most basic thing: creating and running your code.

Before all of this, make sure you have node.js installed. This can be done with `pacman -S npm` on Arch Linux, or on the official website for others.

The first thing you ever learn in any language is how to log things to the console. To do that, you must use `console.log`. Here's how to create and run it:

1. Create a file. Name it `index.js` or anything you want, as long as it has `.js` at the end. That tells it, "This is a JS file! Run it as Javascript."
2. Using the text editor/code editor of your choice (Notepad, VS Code, Xed, etc), input the following code into that file:
```js
console.log("This is logged!");
```

3. Save the file.
4. Open your terminal or command line (Powershell on Windows, Terminal on Mac, and whatever your desktop environment provided on Linux).
5. Navigate to the file's folder. This can be done by typing `cd ` and then dragging your folder over to the terminal. (Some file explorers let you open folders in the terminal. If yours does, use it!)
6. Type `node index.js`, replacing `index` with whatever your filename is.
7. You should get the following output:
```js
This is logged!
```
8. If you didn't, look over the steps and try again.

Now, let's break that down.

`console.log` tells the code to log whatever is in the ().

`("This is logged!")` tells the code to log "This is logged!".

And finally, at the end of each line, there is a `;`, or a semicolon. This tells the code that the line has ended.

### NOTE
An update a few years back removed the need to always have a semicolon. However, it's still good practice to have one.

## Creating and using variables
The most important part of JS is the variables. There are 3 main ways of declaring variables.

Most of this info can be found in my "var, let, const" demonstration. That explains this in much more detail.

So, how do you declare variables?
```js
var hello = "Hello World!";
```
That declares a variable. The variable will stay the same until it is overwritten, with:
```js
hello = "Bye World!";
```
Yes, that sounds like a suicide message, but that's besides the point. The hello variable is now "Bye World!" as opposed to "Hello World!".

So, what can you do with them? Well, you can log them:
```js
var hello = "Hello World!";
console.log(hello);
hello = "Bye World!";
console.log(hello);
```
Doing the same running steps as before, we get:
```
Hello World!
Bye World!
```
Now, there are 2 other basic ways of declaring variables, `let` and `const`.

The difference between these are that var variables can be used anywhere, let variables can only be used in that specific part of the code (or the "scope"), and const variables can't be overwritten. So the following code:
```js
const hello = "Hello World!";
hello = "Hello!";
```
Will return an error.

You will most commonly use `var` and `const`.

Personally, I always use `let` over `var`. There's no real reason to do this, I'm just more accustomed to it. There are very few situations where you will want to use `let` over `var`, but occasionally, there will be.

There are many other rules and way to declare variables, but those are for a different time.

## Functions
Functions are another hugely important part of Javascript. In fact, you've already used a function, `console.log`!

There are 2 ways to declare functions:
```js
function helloWorld() {
    console.log("Hello World!");
}
```
and
```js
var helloWorld = () => {
    console.log("Hello World!");
};
```
For this one, you often want to use `const` to make sure it isn't overwritten.

For the rest of this tutorial, I will be using `var func = () => {}` as I am more used to it.

So, how do you use these? Simple:
```js
helloWorld();
```
Will return:
```
Hello World!
```
Now, that's the basic part. But you can also `return` things! This can be done like:
```js
const helloWorld = () => {
    console.log("Hello");
    return "world!";
};
console.log(helloWorld());
```
This will run the `console.log("Hello")`, and then will log "world!", since there is a `return "world!"` at the end, resulting in:
```
Hello
world!
```
You can do many things with this, but let's move on.

You can actually put in values in functions, like so:
```js
const helloWorld = (input) => {
    console.log("Hello World!");
    console.log(input);
};
```
And you can use them like this:
```js
helloWorld("How are you?");
```
Which will result in
```
Hello World!
How are you?
```
You can do even more things like this, such as returning random values based on a number inputted, generating random strings out of an input, etc, but we'll get into that later.
## Types
There are many different types in JS. For example, there are strings and functions, which we've seen.

Here are the types that are most important:
- String (Represents text)
- Number (Represents any number)
- Function (Explained before)
- Boolean (True and False)
- Object (Used for storing various data)
- Array (Iterable list of things)

These will be explained more later.
## Conditional Statements
The final major, required part of JS are the conditionals, like `if` and `else`.

To use these, we need to know about comparison.
### Comparing
The basic comparative operators are `==`, `===`, `<`, and `>`.

There are also `<=` and `>=`.

Let's look at them:
- ==
  * Equals. The most basic comparison.
- ===
  * Strictly Equals. Compares the same way as ==, except it *also* checks the type, not just the value.
  * So, for example, `"2" == 2` is true, while `"2" === 2` is false, as `"2"` is a string and `2` is a number.
  * This will be used in most cases over ==, but == has its occasional uses.
- >
  * Greater than. Used for numbers.
- <
  * Less than. Used for numbers.
- \>=
  * Greater than or equal to. Used for numbers.
- <=
  * Less than or equal to. Used for numbers.
  
These are required for conditionals.

Using `if` is simple:
```js
var hello = "Hello";
if (hello == "Hello") {
    console.log("True!");
}
```
That logs `True!`. But what if it isn't the same? Use `else`:
```js
var hello = "Hello";
if (hello == "Hey") {
    console.log("True!");
} else {
    console.log("False...");
}
```
This returns `False...` since Hello is not the same as Hey.

There's also `else if`:
```js
var hello = "Hello";
if (hello == "Hey") {
    console.log("How are you?");
} else if (hello == "Hello") {
    console.log("How's your day been?");
} else {
    console.log("Hello!");
}
```
This will return `How's your day been?`.

There are also short-hand statements, but again, those are for a different time.
