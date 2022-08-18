"use strict";
function combine(n1, //Definiamo che n1 e n2 possono essere sia number che string
n2, resultConversion) {
    let result;
    //Tuttavia dobbiamo fare delle guardie di tipo per controllare a runtime.
    if ((typeof n1 === 'number' && typeof n2 === 'number') ||
        resultConversion === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    // 	return +result;
    // } else {
    // 	return result.toString();
    // }
}
const combineNumber = combine(30, 60, 'as-number');
console.log(combineNumber);
const combineString = combine('30', '60', 'as-text');
console.log(combineString);
