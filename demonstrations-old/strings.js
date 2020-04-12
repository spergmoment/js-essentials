/* Let's go over some basic string stuff. */

var str = "hello!"; // generates a string
console.log(str);

var str2 = "hello!\nhow are you?";
console.log(str2);

/* The above returns this: "hello!
how are you?"
\n means a linebreak. 
there are more things similar to this, 
but \n is the most useful. */

var str3 = "hello! my name is sperg. " + Math.random() * 10; 
console.log(str3);

/* This returns "hello! my name is sperg." 
and concatenates (adds) a random number between 1 and 10. */

var str4 = "hello! how are you?" +
"my name is sperg."; 
console.log(str4); // returns the string "hello! how are you? my name is sperg."
/* Doing that is useful for code readability, especially with long strings. */

/* Expected output:
hello!
hello!
how are you?
hello! my name is sperg. 7.288517868132322
hello! how are you?my name is sperg.
*/
