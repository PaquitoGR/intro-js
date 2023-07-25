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

console.log(addElement(datos, "Elemento")); // ['Elemento'] <- debería ser si fuera pura

console.log(datos); // []