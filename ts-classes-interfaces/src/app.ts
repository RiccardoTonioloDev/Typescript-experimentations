class Department {
	//Al posto di definire in questo modo, possiamo andarlo a fare direttamente nel costruttore.
	// private id: string;
	// private name: string; //questo serve a TypeScript per dichiarare gli attributi
	// //di una classe in modo esplicito, con i relativi tipi.
	private employees: string[] = [];

	constructor(private name: string, private readonly id: string) {
		this.name = name;
		this.id = id;
	}

	describe(this: Department) {
		console.log(`Department (${this.id}): ${this.name}`);
	}

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log('Number of employees: ' + this.employees.length);
		console.log('Employees: ', this.employees);
	}
}

const accounting = new Department('Accounting', '1');
accounting.addEmployee('Riccardo');
accounting.addEmployee('Max');
console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();

const accountingCopy = {
	// describe: accounting.describe.bind(accounting),
	// //Bind mi permette di associare uno scope a una funzione.
	// //In questo caso stiamo passando lo scope dell'oggetto accounting, e quindi
	// //describe può accedere alla variabile name (presa da describe tramite this).
	name: 's',
	describe: accounting.describe,
};

// accountingCopy.describe(); //Qui viene un errore poichè abbiamo specificato che
//possiamo utilizzare la funzione describe solamente su degli oggetti di tipo
//Departmente (guarda come abbiamo definito describe all'interno della classe).

// accountingCopy.describe(); //Qui invece funziona poichè abbiamo creato un oggetto
//che rispetta gli stessi attributi definiti nella classe, e quindi è riconosciuto
//come Department anche se non generato dal suo costruttore originale.
//EDIT: non funziona più poichè abbiamo aggiunto altri attributi a Department.
