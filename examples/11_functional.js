
/*
La programación funcional es un paradigma de
programación que se centra en el uso de 
funciones como bloques de construcción fundamentales.
En el contexto de JavaScript, la
programación funcional implica escribir códiugo
que se basa en funciones puras, evitando el uso
de estado mutable y efectos secundarios.
*/

/*
Funciones puras: las funciones puras son 
aquellas que siempre producen el mismo resultado
para los mismos argumentos y no tienen efectos
secundarios observables. No modifican variables
fuera de su ámbito y no alteran el estado global.
*/

// Función pura
/*
const numero = 0;
const sumar = (a, b) => a + b;

sumar (2, 2) //4
sumar (2, 2) //4

// Función no pura
let num = 0;
const sumarImpure = (num2) => {
    num = num + num2;
}

sumarImpure(2); // 2
sumarImpure(2); // 4


const datos = [];

const addElement = (arr, newElement) => {
    arr.push(newElement);
    return arr;
};

console.log(addElement(datos, "Elemento")); // ['Elemento']
console.log(addElement(datos, "Elemento")); // ['Elemento'] <- esto debería ser, si fuera pura
console.log(datos); // []

*/
console.log("******** inmutabilidad ********");
/*
Inmutabilidad: La inmutabilidad implica que los datos no deben ser modifciados una vez
que se crean. En JavaScript, se alienta el uso de estructuras de datos inmutables, lo que
significa que se crean nuevas instancias en lugar de modificar las existentes.
*/


const shoppingCart1 = ['food', 'TV', 'PC'];
const shoppingCart2 = shoppingCart1;

shoppingCart2.pop();

console.log(shoppingCart1);
console.log(shoppingCart2);

/// Solución

// const shoppingCart3 = [].concat(shoppingCart1);
const shoppingCart3 = [...shoppingCart1];

shoppingCart3.push("nuevo");

console.log("shoppingCart3", shoppingCart3);
console.log("shoppingCart2", shoppingCart2);

/// Objects

const user1 = {
    education: 'Keepcoding',
    name: 'Kevin',
    age: null,
    city: {
        name: 'Madrid',
    },
    sayHi: () => 'hola',
};

// const user2 = Object.assign({}, user1);
// const user2 = {...user1}; // <-- solo valdría para el primer nivel
// const user2 = structuredClone(user1); // <-- solución. pero no copia elementos complejos como funciones
const user2 = JSON.parse(JSON.stringify(user1));
user2.name = 'Matt';
user2.city.name = "London";

console.log(user1);
console.log(user2);

// Arreglar este código

const datos = [];

// no pura :(
// solucion 1
// const addElement = ([...arr], newElement) => {
//   arr.push(newElement);
//   return arr;
// };

// solucion 2
const addElement = (arr, newElement) => [...arr, newElement];

console.log(addElement(datos, 'Elemento')); /// ['Elemento']
console.log(addElement(datos, 'Elemento')); /// ['Elemento']
console.log(addElement(datos, 'Keepcoding')); /// ['Keepcoding']
console.log(addElement(datos, 'Keepcoding')); /// ['Keepcoding']
console.log(datos); // []

console.log("******** Composición de funciones ********");
/*
Composición de funciones: Se refiere a la combinación de múltiples funciones más pequeñas
para crear funciones mas complejas. Esto se logra mediante la combinación de las salidas
de una función con las entradas de otra.
*/

const house1 = {
    address: 'Madrid',
    rooms: 5,
}

const house2 = {
    address: 'Barcelona',
    rooms: 4,
    parking: true,
}

const newHouse = {
    ...house2,
    ...house1,
    country: 'Spain',
}

console.log(newHouse);


// map, filter, foreach

// map

// const numbers = [1, 2, 3, 4, 5, 6, 7];
const numbers = [10, 20, 33, 48, 54, 61];

const double = (number) => number * 2;

// const newArray = numbers.map(function (item) {
//     return double(item);
// });

// ArrowFunction
// const newArray = numbers.map((item) => double(item));

const newArray = numbers.map(double);

console.log(newArray);

// filter

// const filterArray = numbers.filter((elem) => {
//     if (elem <= 33) return true;
//     return false;
// });

// const filterArray = numbers.filter((elem) => {
//     return elem <= 33;
// });

const filterArray = numbers.filter((elem) => elem <= 33).map(double);

console.log(filterArray)

// foreach
const doubleArray = [];
/*
libros.forEach(libro => {
    if (libreo.year > 2000) arr1.push(libro);
    else arr2.push(libro);
    
});
*/
/*
console.log('reduce, find, findIndex')
// reduce, find, findIndex

const numbersReduceExample = [1, 2, 4, 5];
console.log('Reduce example')
// array -> number
const resultado = numbersReduceExample.reduce((acum, item) => {
    console.log('Iteration');
    console.log('acum: ', acum);
    console.log('item: ', item);
    const resultado = acum + item;
    return resultado;
}, 0);

console.log(resultado);
*/
const transactions = [
    { id: 'trx001', amount: 100, description: 'Purchase 1' },
    { id: 'trx002', amount: 50, description: 'Purchase 2' },
    { id: 'trx003', amount: 200, description: 'Purchase 3' },
];
  
  // usando reduce
  
  /*
  const resultado = {
    trx001: { id: 'trx001', amount: 100, description: 'Purchase 1' },
    trx002: { id: 'trx002', amount: 50, description: 'Purchase 2' },
    trx003: { id: 'trx003', amount: 200, description: 'Purchase 3' }
  }
  */
const resultado = transactions.reduce((accum, item) => {
    accum[item.id] = item;
    return accum;
}, {});

console.log(resultado.trx001);

// find, findIndex
const trx002 = transactions.find((transaction) => {
    return transaction.id === 'trx002';
});

console.log(trx002);


// var a = { dato: 1};
// var b = { dato: 3};
// var c = { ...a, ...b};

// console.log(c)