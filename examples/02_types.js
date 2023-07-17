let resultado = 10;

// typeof

console.log(typeof(resultado));

//  boolean: true of false

resultado = true;

console.log(typeof(resultado));

let precio = 19000.99;

let cantidad = Infinity;

console.log(typeof precio);
console.log(typeof cantidad);

// null y undefined
let variableNula = null;
let variableUndefined;

let portal = '5A';
// let direccion = 'Calle Mayor, 1D';

// template string

let direccion = `Calle Mayor, ${portal}`;

console.log("--direccion--");
console.log(typeof direccion);
console.log(direccion);

// Bigint
let numeroGrande = 12345678912345567891234567891234569789123456987n;

console.log(typeof numeroGrande);
console.log(numeroGrande);


let edad = 35;
let player = "Jordan";
let dorsal = 23;
let salgonFama = true;
let equipoActual = "ninguno"

console.log(`Hola, soy ${player} de ${edad} años, mi equipo actual es: ${equipoActual}`);


