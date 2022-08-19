"use strict";
function combine(n1, n2, resultConversion) {
    let result;
    if ((typeof n1 === 'number' && typeof n2 === 'number') ||
        resultConversion === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
const combineNumber = combine(30, 60, 'as-number');
console.log(combineNumber);
const combineString = combine('30', '60', 'as-text');
console.log(combineString);
//# sourceMappingURL=union-aliases.js.map