type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Riccardo",
  privileges: ["Create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start date: " + emp.startDate.toISOString());
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird"; //NON È UN ASSEGNAMENTO, MA UN TIPO LETTERALE
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; //NON È UN ASSEGNAMENTO, MA UN TIPO LETTERALE
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

const paragraph = document.querySelector("p");
// const userInputElement = <HTMLInputElement>(
// 	document.getElementById('user-input')!
// ); POSSIAMO USARE QUESTA SINTASSI, MA VA A DISTURBARE REACT NEL CASO VENGA
//UTILIZZATO LI.

interface HTMLInputElementExtended extends HTMLInputElement {
  prova: string;
}

const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElementExtended;

userInputElement.value = "Hi there";
userInputElement.prova = "prova aggiunta come attributo";
console.log(userInputElement.prova);

//Possiamo fare casting anche in questo modo:
if (userInputElement) {
  //Verifico che non sia nullo
  (userInputElement as HTMLInputElement).value = "ciao"; //Vado a fare il casting e l'assegnazione
}

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Wrong email",
  username: "Must start with a capital character",
};
