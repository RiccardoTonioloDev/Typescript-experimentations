"use strict";
function add1(n1, n2, showResult, resultPhrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 3;
const number2 = 5.5;
const printResult = true;
const resultPhrase = 'Result is: ';
const result = add1(number1, number2, printResult, resultPhrase);
//# sourceMappingURL=basics.js.map