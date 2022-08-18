"use strict";
//In questo modo imponiamo che nella funzione vengano passati valori che sono
//solamente numeri.
function add(n1, n2, showResult, resultPhrase) {
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
//Se number1 o number2 o entrambi fossero di un tipo diverso da number, questa
//funzione non farebbe compilare il codice.
const result = add(number1, number2, printResult, resultPhrase);
