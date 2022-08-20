"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log('Number of employees: ' + this.employees.length);
        console.log('Employees: ', this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'ACC');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Pass a valid value, please.');
        }
        this.addReport(value);
    }
    addEmployee(employee) {
        if (employee === 'Max') {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
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
const accounting = AccountingDepartment.getInstance();
accounting.addEmployee('Max');
accounting.addEmployee('Riccardo');
accounting.addReport('Something went wrong...');
accounting.mostRecentReport = 'Hello';
console.log(accounting.mostRecentReport);
console.log(accounting);
accounting.describe();
const accountingCopy = {
    name: 's',
    describe: it.describe,
};
