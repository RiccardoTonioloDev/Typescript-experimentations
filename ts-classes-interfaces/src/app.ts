interface Named {
	name?: string;
	outPutName?: string;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

interface AddFn {
	(a: number, b: number): number;
}
let add: AddFn;

add = (a: number, b: number) => {
	return a + b;
};

class Person implements Greetable {
	name?: string;

	constructor(name?: string) {
		if (name) {
			this.name = name;
		}
	}

	greet(phrase: string): void {
		if (this.name) {
			console.log(phrase + ' ' + this.name);
		} else {
			console.log('Hi!');
		}
	}
}

let user1: Greetable;

user1 = {
	name: 'Riccardo',
	greet(phrase: string) {
		console.log(phrase + ' ' + this.name);
	},
};

let user2 = new Person();

user1.greet('Hi, i am:');
user2.greet('Hi, i am:');
