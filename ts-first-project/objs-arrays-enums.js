"use strict";
// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string]; //Specifica gli elementi delle celle di che tipo devono essere.
// } = {
// 	name: 'Riccardo',
// 	age: 30,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: [2, 'author'],
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["AUTHOR"] = 6] = "AUTHOR";
    Role[Role["READ_ONLY"] = 7] = "READ_ONLY";
})(Role || (Role = {}));
const person = {
    name: 'Riccardo',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR,
};
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.age);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
