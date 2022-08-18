let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Riccardo';
if (typeof userInput === 'string') {
	//Dobbiamo controllare se il tipo è quello giusto
	userName = userInput;
}

function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
}

generateError('An error occurred!', 500);
