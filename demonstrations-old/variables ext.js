var x;
x = 23;
console.log(x); // returns x. you can declare a variable as undefined and define it later

let y;
y="hello";
console.log(y); // the same stuff as var

var a, b, c; // you can declare multiple variables in one line

a=10;
b=15;
c=25;
console.log(a + b + c); // returns 50, 10+15+25

var z;
console.log(z); // returns undefined. as stated before, doing var (variable) without an assignment returns undefined.

let n = ("x: " + x + " y: " + y + " z: " + z); // returns the string "x: 23 y: hello z: undefined"
console.log(n);

/* Expected output:
23
hello
50
undefined
x: 23 y: hello z: undefined
*/
