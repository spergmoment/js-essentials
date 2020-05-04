# Arrays
Arrays are similarly useful to strings and numbers. They can display lists of strings, numbers, objects, etc.

They are created with []. For example:
```js
var arr = ['This', 'Is', 'An', 'Array'];
console.log(arr);
```
Returns:
```js
[ "This", "Is", "An", "Array" ]
```
You may see some extra stuff besides that, but ignore it for now.

There are obviously many more things you can do with them. So, let's get started!
## Displaying Arrays
You may want to display your arrays without all the messy garbage.

You can use Array.join(character) to display array elements joined by a character, like so:
```js
var arr = ['This', 'Is', 'Another', 'Array'];
console.log(arr.join(" "));
```
Returns:
```js
This Is Another Array
```
You'll most commonly need to join them with a space. However, you can join them with *anything:*
```js
var arr = ['This', 'Is', 'Yet', 'Another', 'Array'];
console.log(arr.join("yes"));
```
Returns:
```js
ThisyesIsyesYetyesAnotheryesArray
```
You can do all sorts of things with that!
## Accessing elements
Sometimes, you want to just access one element at a time. You can do this using Array[index].

Indices are zero-indexed. This means they start at 0. For example, the 4th element of an array is the 3rd index, and the first is the 0th index.

This may seem confusing, but don't worry. It's simple:
```js
var array = ["Element", 1, "String"];
console.log(array[0]); // first element
console.log(array[1]); // second element
console.log(array[2]); // third element
```
This returns:
```js
Element
1
String
```
You can also get random array elements, but this will be covered later.
## Modifying arrays
You may want to modify arrays in certain ways. There are multiple methods to help with this.

### shift()
The Array.shift() method removes the first element of an array, and returns it. For example:
```js
var arr = [1, "String", true];
var firstElement = arr.shift();
console.log(arr);
console.log(firstElement);
```
Returns:
```js
["String", true]
1
```
### unshift()
Array.unshift() does the exact opposite of shift(), inserting an element at the front of an array. It also returns the length of the array:
```js
var arr = ["String", true];
var arrLength = arr.unshift(1);
console.log(arr);
console.log(arrLength);
```
Returns:
```js
[1, "String", true]
3
```
### pop()
The pop() method is just like shift(), except it removes (and returns) the last element:
```js
var arr = [1, "String", true];
var lastElement = arr.pop();
console.log(arr);
console.log(firstElement);
```
Returns:
```js
[1, "String"]
true
```
### push()
push() is just like unshift(), except it inserts at the end of the array:
```js
var arr = [1, "String"];
var arrLength = arr.pop(true);
console.log(arr);
console.log(arrLength);
```
Returns:
```js
[1, "String", true]
3
```
### splice()
What if you want to remove or insert something not in the front or back? Use splice()!

splice() is a very diverse method. Quoting from MDN:
> The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

The syntax for splice() is:
```js
<Array>.splice(startNumber, deleteCount, itemsToAdd);
```
Where `startNumber` is the zero-based index position to start from, deleteCount is the number of items to delete/replace (If omitted, it replaces/deletes everything remaining), and itemsToAdd is a comma-separated list of values that specify what to replace the old values with.

Additionally, it returns an array of the deleted/removed objects.

It may seem complicated, but here are a few examples.

Note: all of these will assume that the `arr` variable is `['Element', true, 1, "Another Element"]`, and will always log `arr` and `spliced` at the end.
#### Delete one element
```js
var spliced = arr.splice(1, 1);
```
Returns:
```js
["Element", 1, "Another Element"]
[true]
```
#### Delete multiple elements
```js
var spliced = arr.splice(1, 2);
```
Returns:
```js
["Element","Another Element"]
[true, 1]
```
#### Replace one element
```js
var spliced = arr.splice(1, 1, false);
```
Returns:
```js
["Element", false, 1, "Another Element"]
[true]
```
#### Replace multiple elements
```js
var spliced = arr.splice(0, 2, "Hello", false);
```
Returns:
```js
["Hello", false, 1, "Another Element"]
["Element", true]
```
#### Replace one element and delete one element
```js
var spliced = arr.splice(1, 2, false);
```
Returns:
```js
["Element", false, "Another Element"]
[true, 1]
```
#### Add an element
```js
var spliced = arr.splice(4, 0, 2); // Start number should be what the index of the added element should be
```
Returns:
```js
["Element", true, 1, 2, "Another Element"]
[]
```
#### Replace one element and add one element
```js
var spliced = arr.splice(2, 1, 3, 4);
```
Returns:
```js
["Element", true, 3, 4, "Another Element"]
[1]
```

Again, all of this may seem complicated, but it gets easier as you use it more!
## Misc.
There are more things you can do with arrays. Here are some examples.

Note: the `arr` variable will be `["Hello", "A", "B", 2]`, and all of these code snippets will log `arr`, or whatever variable is shown, at the end.
### Sorting
Array.sort() can use many custom functions to sort through, but the default goes by alphabetical order, like so:
```js
arr.sort();
```
Returns:
```js
[2, "A", "B", "Hello"]
```
### Slicing
You can access multiple values with Array.slice().

The syntax is as follows:
```js
<Array>.slice(startIndex, endIndex)
```
The endIndex is not included.

For example:
```js
var sliced = arr.slice(1, 3);
```
Returns:
```js
["A", "B"]
```
### Finding Elements
You may sometimes need to find an element you don't know the index of.

You can use indexOf():
```js
var found = arr.indexOf("Hello");
```
Returns:
```js
0
```
And then, use that index from there on.
### Looping
Sometimes you'll need to loop through arrays. There are many ways to do this.
#### For Loop
For loops' syntax is as follows:
```js
for (<Start>; <Check>; <End>) {
    <Code>
}
```
Start is what is done at the beginning, and isn't done again. Check is a conditional done at the beginning of every iteration, which, if passed, continues, otherwise, it stops. End is what is done after every iteration.

These are very complex and useful, but for now, we can just use it to loop through an array:
```js
for (var i = 0; i < arr.length; i ++) {
    console.log(arr[i]);
}
```
Returns:
```js
Hello
A
B
2
```
Let's break that down.

`var i = 0` declares the "iteration" variable...

`i < arr.length` checks if the iteration variable has reached the end of the array yet...

`i ++` adds 1 to the iteration variable each time...

and `console.log(arr[i])` logs the array element at that index, from the iteration variable.
#### For...of Loop
for...of is a different type of loop, whose syntax is as follows:
```js
for (var <Variable> of <Array>) {
    <Code>
}
```
Which is self-explanatory. These are generally cleaner:
```js
for (var element of arr) {
    console.log(element);
}
```
Returns:
```js
Hello
A
B
2
```
#### Array.forEach()
forEach is a much more complex method, which actually uses a function. Here's the syntax:
```js
<Array>.forEach(<Function>)
```
Function can be an arrow syntax function or a regular function:
```js
var func = (element) => {
    console.log(element);
}
arr.forEach(func);
```
Or:
```js
arr.forEach(element => console.log(element));
```
Both return:
```js
Hello
A
B
2
```
Both forms work just fine.
#### Filtering
You can filter arrays with a function, using this syntax:
```js
<Array>.filter(function);
```
Which returns the filtered array. Like forEach, both function forms work.

For this, I'll use an arrow function to save some time.
```js
var filtered = arr.filter(element => typeof element === String); // checks if it's a string
```
Returns:
```js
["Hello", "A", "B"]
```
