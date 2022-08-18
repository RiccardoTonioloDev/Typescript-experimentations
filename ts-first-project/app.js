"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Riccardo';
if (typeof userInput === 'string') {
    //Dobbiamo controllare se il tipo è quello giusto
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
