/* There are 3 variable assignment methods:
var, let, and const. These are often
confused. Let's go over them. */
var x = 2;
let y = 6;
const z = 3; // let's declare these three variables differently.

var x = 4; // you can freely re-declare variables with var in its scope.
let y = 3; // this returns an error, you can't redeclare let variables in the same scope.
const z = 2; // you can't change consts. returns an error

/* Now, a different scope... */
if(true) {
  console.log(x); // returns 4
  console.log(y); // returns 6
  console.log(z) // returns 3
  
  let n = 23; // how about we declare this variable with let...
}
console.log(n) // this returns an error, because n isn't in the same scope!

/* If you're reading this, hopefully this helps. */
