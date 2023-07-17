





















/*

// asignación de adición
// x = x + 15;
x += 15;
console.log(x);
x++;
// x = x + 1;
console.log(x);
y -= 5; // y = y - 5;
console.log(y);

*/
// opearodes de comparación
let a = 5;
let b = 8;

console.log(a == b); // false
console.log(a != b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false

// === vs ==
console.log('=== vs ==');

console.log('1' === 1); // false
console.log(true === 1); // false
console.log(null === undefined); // false
console.log(NaN === NaN); // false
console.log(0 === ""); // false

let isFalse = 0 === ""; // false
console.log(isFalse);

// operadores lógicos
let w = 5;
let z = 10;
// || of
// && and

console.log(w > 3 && z < 20); // true
console.log(w > 3 && z < 8); // false
console.log(w > 3 || z < 8); // true

let operadorLogico = w > 3 || z < 20;
console.log(operadorLogico); // true

const isGreaterThan3 = w > 3; // true
console.log(!isGreaterThan3); // false

let numero = 23, numero2 = 34;

/* EJERCICIO
const numero1 = 20;
const numero2 = 5; 
const valorFinal = 120;

console.log(numero1 * numero2 === valorFinal);
*/