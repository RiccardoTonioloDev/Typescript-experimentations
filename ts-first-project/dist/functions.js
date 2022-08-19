"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printRisultato(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = add(n1, n2);
    cb(result);
}
printRisultato(add(5, 12));
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
    return 1;
});
//# sourceMappingURL=functions.js.map