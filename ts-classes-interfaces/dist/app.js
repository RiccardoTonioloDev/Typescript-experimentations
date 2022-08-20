"use strict";
let add;
add = (a, b) => {
    return a + b;
};
class Person {
    constructor(name) {
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1;
user1 = {
    name: 'Riccardo',
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
let user2 = new Person();
user1.greet('Hi, i am:');
user2.greet('Hi, i am:');
