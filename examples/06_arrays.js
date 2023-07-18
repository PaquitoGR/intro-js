// ejemplo de arrays
// -----------   0         1       2
let fruits = ['apple', 'banana', 'kiwi'];

console.log(fruits);
console.log(typeof fruits);

console.log(fruits[0]);
console.log(fruits[2]);

fruits[1] = 'orange';

fruits.push('watermelon');
console.log(fruits);

let pepito = fruits.pop();
console.log(fruits);
console.log(pepito);

fruits.unshift('mango ', 'pineapple');
console.log(fruits);

console.log(fruits.includes('kiwi'));

const newArray = fruits.concat('banana');
console.log(newArray);

const index = fruits.indexOf('kiwi');
console.log(index);

fruits.splice(index, 1);

console.log(fruits);



// Ejercicio
let numeros = [];
numeros.push(1);
numeros.push(2);
numeros.push(3);
numeros.push("keepcoding");
numeros.push(4);
numeros.push(5);

if (numeros.includes('keepcoding')) {
    console.log("Este array no solo tiene números");
}

numeros.unshift(10);
console.log(numeros);
let indice = numeros.indexOf("keepcoding");

numeros.splice(indice, 1);

console.log(numeros);

console.log(numeros.length);