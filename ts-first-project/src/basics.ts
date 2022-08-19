//In questo modo imponiamo che nella funzione vengano passati valori che sono
//solamente numeri.
function add1(
	n1: number,
	n2: number,
	showResult: boolean,
	resultPhrase: string
) {
	const result = n1 + n2;
	if (showResult) {
		console.log(resultPhrase + result);
	} else {
		return n1 + n2;
	}
}

const number1 = 3;
const number2 = 5.5;
const printResult = true;
const resultPhrase = 'Result is: ';

//Se number1 o number2 o entrambi fossero di un tipo diverso da number, questa
//funzione non farebbe compilare il codice.
const result = add1(number1, number2, printResult, resultPhrase);
