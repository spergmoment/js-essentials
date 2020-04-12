/* Here is a basic demonstration of what comparative operators are. */

var x = 35; // "=" is used to assign a value to a variable

if(x==35) { // "==" checks the value, not the type, so do not assign values with this. also, this returns true.
  console.log("true!");
} else {
  console.log("false!");
}

if(x==="35") { // "===" checks the value and type. this returns false.
  console.log("true!");
} else {
  console.log("false!");
}

/* It's also worth noting this:
When comparing primitives (numbers and strings), 
use number.toString() to compare them, as == is pretty bad practice. */

if(x.toString()==="35") { // again, this checks the value and type, but instead, this returns true!
  console.log("true!");
} else {
  console.log("false!");
}

/* Now, for < and >... */

if(x>36) { // is x greater than 36? it isn't, so return false
  console.log("true!");
} else {
  console.log("false!");
}

if(x<36) { // is x less than 36? it is, return true
  console.log("true!");
} else {
  console.log("false!");
}

/* But a problem arises... */

if(x>35||x<35) { // this returns false! even with both! how do you fix this?
  console.log("true!");
} else {
  console.log("false!");
}

/* The answer is... */

if(x>=35) { // this returns true, as well as x<=35, because it is asking "greater than or equal to"!
  console.log("true!");
} else {
  console.log("false!");
}

/* Remember: DO NOT DO => OR =<.
=> is arrow function syntax in ES6. That makes it confusing!
and =< doesn't work. */

/* The expected output should be:
true!
false!
true!
false!
true!
false!
true!
*/
