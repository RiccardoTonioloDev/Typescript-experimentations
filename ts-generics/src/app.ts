const names: Array<string> = []; //Esattamente come definire string[]

names[0].split(' ');

const promise = new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        resolve('This is done');
    },2000);
    reject('Rejection');
});

promise.then(data=>{
    data.split(' ');
});