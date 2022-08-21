// const names: Array<string> = []; //Esattamente come definire string[]
//
// names[0].split(' ');
//
// const promise = new Promise<string>((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('This is done');
//     },2000);
//     reject('Rejection');
// });
//
// promise.then(data=>{
//     data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA,objB);
}

// console.log(merge({name: 'Riccardo'},{age: '20'}));
const mergedObj = merge({name: 'Riccardo'},{age: '20'});
console.log(mergedObj.age);

interface Lengthy{
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T,string ]{
    let descriptionText = 'Got no value.';
    if(element.length > 0){
        descriptionText = 'Got ' + element.length + ' elements.';
    }
   return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return obj[key];
}

console.log(extractAndConvert({name: 'Riccardo'},'name'));

class DataStorage<T extends  string|number|boolean> {
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
           return;
        }
        this.data.splice(this.data.indexOf(item),1);
    }
    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Ricky');
textStorage.addItem('Ricky');
textStorage.addItem('Ricky');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(3);
numberStorage.addItem(3);
numberStorage.addItem(3);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'Ricky'});
// objStorage.addItem({name: 'Max'});
// objStorage.removeItem({name: 'Ricky'});
//
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
    let courseGoal: Partial <CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
   return courseGoal as CourseGoal;
}

const names : Readonly<string[]> = ['Max', 'Anna'];