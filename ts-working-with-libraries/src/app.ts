import 'reflect-metadata';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import _ from 'lodash';
import { Product } from './product.model';

const products = [
    { title: 'Prova', price: 40 },
    { title: 'Prova', price: 40 },
];

const newProd = new Product('', 40);
validate(newProd).then((result) => {
    console.log(result);
});

const loadedProducts = plainToInstance(Product, products);

console.log(_.shuffle([1, 2, 3]));
const prod = new Product('prova', 50);
console.log(prod);
console.log(loadedProducts);
