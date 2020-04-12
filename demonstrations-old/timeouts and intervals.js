 
/* Something that is very useful are timeouts and intervals,
which can be created with the setTimeout and setInterval
functions. But what do they do? Let's see... */

var p = prompt("Say something!");

setTimeout(() => { // sets a timeout on a function...
  window.alert("You said: " + p);
  console.log(p);
  window.alert("Thank you!");
}, 500); // ...for half a second, as that is in milliseconds.

/* However, theres a bit of a catch... */
setTimeout(() => {
  window.alert("First one!");
}, 2000); // sets a 2 sec timeout...

setTimeout(() => {
  window.alert("Second one!");
}, 1000); // You would expect this to go after the first one, right?
/* Wrong. The second one goes first! Is there a way to fix this?
Well, yes. Here are your options: Nesting the setTimeouts, like so... */

setTimeout(() => {
  window.alert("First one!");
  setTimeout(() => {
    window.alert("Second one!");
  }, 1000);
}, 2000); // this makes the first one appear... well, first, and the second one appear second.

/* Or, you can set the timeout on the second one to 3000.
Now, for setInterval: */
var n = 0;
setInterval(() => {
  window.alert(n); // alerts the variable n.
  n++; // increments n by one
}, 4000); // so now, every 4 seconds, you are alerted of the value of n, and it increments itself.
/* These are generally very useful to know. */
