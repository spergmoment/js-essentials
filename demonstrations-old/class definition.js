/* This is an example of multiple things:
- Class definition
- Prototypes
- Comparative operators in definitions
- String literals
  * Templates
This might seem daunting at first, but
it is actually pretty simple! */
class Time { // invoke a new class, called Time
    constructor(hour, min, sec, millisec) { // the base constructor of the class, contains any non-default values
        this.hour = parseInt(hour, 10) || new Date().getHours();
        // is there an "hour" variable defined? if so, set "hour" to that value, but if not, make it the current hour
        this.min = parseInt(min, 10) || new Date().getMinutes(); // same as above, but with minutes
        this.sec = parseInt(sec, 10) || new Date().getSeconds(); // "" with seconds
        this.millisec = parseInt(millisec, 10) || new Date().getMilliseconds(); // same with milliseconds
    }
}
Time.prototype.getHours = function() {
    return this.hour;
}; // returns either the hour input, or the current hour
Time.prototype.getMinutes = function() {
    return `${(this.min>=10) ? this.min : `0${this.min}`}`;
    /* Now, string literals/templates...
    Here's an example of a string literal: `${someVarOrStatement} some text`
    String literals allow you to concatenate (add) predefined values into strings easier.
    Now for templates, here's an example:
    var vars = [
      "Hello!",
      "Hi!"
    ];
    const v = vars[Math.floor(Math.random() * 2)]; // this gets a random value from the "vars" array...
    console.log(`${v === "Hello!" ? "Hey!" : "What's up?"} Sample Text`);
    Let's break that down...
    the ${v === "Hello!"} part is a conditional, checking if v is "Hello" or not...
    the ? tells the doc that it's a template literal...
    "Hey!" : "What's up?"} will, in this case, return either 
    "Hey! Sample Text" if the value from the array is "Hello!"
    or "What's up? Sample Text" if the value is anything else, in this case "Hi!".
    You can apply this to the return statement seen above, like so...
    ${(this.min>=10) checks if the current minute or the inputted minute is greater than or equal to 10...
    ? tells the doc it's a template literal...
    this.min : `0${this.min}`} returns either the current minute if it is greater than or equal to 10, 
    e.g 12, or the current minute with a 0 in front if it is less than 10, e.g. 03.
    */
};
Time.prototype.getSeconds = function() {
    return `${(this.sec>=10) ? this.sec : `0${this.sec}`}`; // This is the same as the minutes.
};
Time.prototype.getMilliseconds = function() {
    return `${(this.millisec>=100) ? '' : `${(this.millisec<10) ? '00' : '0'}`}${this.millisec}`
    /* This one is nested!
    What this does is:
    - Is the millisecond value at least 100?
      * If so, don't do anything. Go outside of that template literal.
      * If it isn't, continue on.
    - Is the millisecond value less than 10?
      * If so, put two 0's in front
      * If not, put a single 0 in front.
    - Take that value that was returned from that, and put it in front of the current milliseconds. */
};
Time.prototype.get12Hour = function() {
    const h = this.getHours(); // You can call prototypes in prototypes!
    if (h == 0) return `12 A.M.`; // 0 hours is 12 AM
    if (h >= 1 && h <= 11) return `${h} A.M.`; // 1-11 hours is AM
    if (h == 12) return `12 P.M.`; // 12 hours is 12 PM
    if (h >= 13 && h <= 23) return `${h-12} P.M.`; // and 13-23 hours is PM
};
Time.prototype.toString = function() {
    let hour = this.get12Hour();
    let hourIdentifier = hour.split("").slice(2);
    if (hourIdentifier[0] === " ") hourIdentifier.shift();
    return `${parseInt(hour, 10)}:${this.getMinutes()}:${this.getSeconds()}.${this.getMilliseconds()} ${hourIdentifier.join("")}`;
};
const time = new Time();
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());
console.log(time.get12Hour());
console.log("The time is: " + time);
const time2 = new Time(16, 3, 9, 74);
console.log(time2.getHours());
console.log(time2.getMinutes());
console.log(time2.getSeconds());
console.log(time2.getMilliseconds());
console.log(time2.get12Hour());
console.log("The time is: " + time2);
/* Expected output:
The current hour
The current minute
The current seconds
The current milliseconds
The current 12 hour time
The current formatted time
16
03
09
074
4 P.M.
The time is: 4:03:09.074 P.M. */
