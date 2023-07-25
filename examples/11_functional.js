
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