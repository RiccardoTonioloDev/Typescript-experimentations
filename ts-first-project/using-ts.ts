const button = document.querySelector('button')!;
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number | string, num2: number | string) {
	if (typeof num1 === 'string' && typeof num2 === 'string') {
		return +num1 + +num2;
	} else if (typeof num1 === 'number' && typeof num2 === 'number') {
		return num1 + num2;
	}
	return +num1 + +num2;
}

button.addEventListener('click', function () {
	console.log(add(input1.value, input2.value));
});
