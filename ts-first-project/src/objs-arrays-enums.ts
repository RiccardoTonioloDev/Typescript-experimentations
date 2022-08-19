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
enum Role {
	ADMIN = 5, //In questo modo si specifica che la enumerazione parte da 5
	AUTHOR,
	READ_ONLY,
}

const person = {
	name: 'Riccardo',
	age: 30,
	hobbies: ['Sports', 'Cooking'],
	role: Role.AUTHOR,
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.age);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}
