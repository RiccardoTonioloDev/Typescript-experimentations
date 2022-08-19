"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
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
    name: 's',
    describe: accounting.describe,
};
