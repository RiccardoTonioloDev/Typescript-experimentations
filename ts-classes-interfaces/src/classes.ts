abstract class Department {
	//Al posto di definire in questo modo, possiamo andarlo a fare direttamente nel costruttore.
	// private id: string;
	// private name: string; //questo serve a TypeScript per dichiarare gli attributi
	// //di una classe in modo esplicito, con i relativi tipi.
	protected employees: string[] = [];

	constructor(private name: string, protected readonly id: string) {
		this.name = name;
		this.id = id;
	}

	static fiscalYear = 2020;
	static createEmployee(name: string) {
		return { name: name };
	}

	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log('Number of employees: ' + this.employees.length);
		console.log('Employees: ', this.employees);
	}
}

class ITDepartment extends Department {
	private admins: string[];
	constructor(id: string, admins: string[]) {
		super(id, 'IT');
		this.admins = admins;
	}
	describe(this: ITDepartment): void {
		console.log('IT Department - ID: ' + this.id);
	}
}

class AccountingDepartment extends Department {
	private lastReport: string;
	private static instance: AccountingDepartment;
	private constructor(id: string, private reports: string[]) {
		super(id, 'ACC');
		this.lastReport = reports[0];
	}

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error('No report found.');
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('Pass a valid value, please.');
		}
		this.addReport(value);
	}

	addEmployee(employee: string): void {
		if (employee === 'Max') {
			return;
		}
		this.employees.push(employee);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReports() {
		console.log(this.reports);
	}

	describe(this: AccountingDepartment): void {
		console.log('Accounting Departmente - ID: ' + this.id);
	}

	static getInstance() {
		if (AccountingDepartment.instance) {
			return this.instance;
		}
		return new AccountingDepartment('d2', []);
	}
}

const employee1 = Department.createEmployee('Riccardo');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('1', ['Riccardo']);
it.addEmployee('Riccardo');
it.addEmployee('Max');
console.log(it);
it.describe();
it.printEmployeeInformation();

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();

accounting.addEmployee('Max');
accounting.addEmployee('Riccardo');
accounting.addReport('Something went wrong...');
accounting.mostRecentReport = 'Hello';
console.log(accounting.mostRecentReport);
console.log(accounting);

accounting.describe();

const accountingCopy = {
	// describe: accounting.describe.bind(accounting),
	// //Bind mi permette di associare uno scope a una funzione.
	// //In questo caso stiamo passando lo scope dell'oggetto accounting, e quindi
	// //describe può accedere alla variabile name (presa da describe tramite this).
	name: 's',
	describe: it.describe,
};

// accountingCopy.describe(); //Qui viene un errore poichè abbiamo specificato che
//possiamo utilizzare la funzione describe solamente su degli oggetti di tipo
//Departmente (guarda come abbiamo definito describe all'interno della classe).

// accountingCopy.describe(); //Qui invece funziona poichè abbiamo creato un oggetto
//che rispetta gli stessi attributi definiti nella classe, e quindi è riconosciuto
//come Department anche se non generato dal suo costruttore originale.
//EDIT: non funziona più poichè abbiamo aggiunto altri attributi a Department.
