function add(n1: number, n2: number): number {
	return n1 + n2;
}

function printRisultato(num: number): void {
	console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = add(n1, n2);
	cb(result);
}

printRisultato(add(5, 12));

let combineValues: (n1: number, n2: number) => number;
combineValues = add;
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
	console.log(result);
	return 1;
});
