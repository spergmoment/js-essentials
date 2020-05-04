[Back to Main Page](https://spergmoment.github.io/js-essentials/types)
# JS Types
Javascript has many different built-in types.

The basic ones were covered in the basics file. Refer to that to see them.

## How Types Work with Each Other
Types react differently to one another.

Often, you shouldn't use other types with each other. The only ones which work well together at all are Strings and Numbers.
## Determining Types and Creating Them
The first type you learn is about Strings.

These are created with 
```js
var str = "This is a String.";
```
Strings are used for displaying text.

You can use double quotes (""), single quotes (''), or backticks (``).

The second main type is Numbers. These can have operators used on them.

They can be created with
```js
var num = 4;
```
Numbers are used for exactly what they sound like they're used for: numbers.

The third main type is the Array.

These are often used for storing lists of strings.

They are created with
```js
var arr = ["This", "Is", "An", "Array."];
```
They are always used for iterating through values and storing similar values all in one.

The fourth main type is the Boolean.

All a boolean does is represent true or false.

Fun fact: if a value exists, when converted to a boolean (put in a conditional) it is true. Values like undefined, null, 0, etc. are `false`.

To make them, you must use
```js
var bool = true;
```
These are used almost solely for conditionals.

The fifth main type is the Object.

This represents almost everything in Javascript.

They are the most useful part of JS, and are way too diverse and useful to be explained here, or even in a separate file.

However, to create them:
```js
var obj = {
    value: "This is an Object value.",
    value2: "This is another Object value."
};
```
To access properties of them, use `<Object>.<Property>`. In this case, `obj.value` or `obj.value2`.

You can store any type of value in Objects.

## Determing Types
Determing types is simple: the `typeof` operator. To use it:
```js
var str = "String";
var num = 2;
var arr = ["Array", "This is an Array"];
var bool = false;
var obj = {
    value: "Property"
};
console.log(typeof str, typeof num, typeof arr, typeof bool, typeof obj);
```
This will give you
```js
string number object boolean object
```
Notice the array is considered an object?

Arrays are objects, just with special properties. Both are iterable in some way.

