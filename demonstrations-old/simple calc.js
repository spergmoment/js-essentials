let p = prompt("Please enter an equation. Note: do ** for powers and exponents.");
try {
    let e = Function('"use strict";return (' + p + ')')();
    window.alert(e);
} catch (e) {
    window.alert(e);
}
/* Using eval functions like this is NOT
a good idea in public code. Be careful. */
