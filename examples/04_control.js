// ejemplos de if, else if, else, switch

let edad = 18;

console.log(`La edad es ${edad}`); 

console.log('Inicio');

if (edad >= 18) {
    let edad = 1;
    let legalAge = 18;
    console.log(`Eres mayor de edad con ${edad} años`);
} else if (14 < edad){
    console.log('Eres adolescente');
} else {
    console.log("no eres 'mayor' de edad");
}

console.log('Final', edad);

// ternario

const resultado = edad === 30; // true o un false
const message = resultado ? 'Tienes mi edad' : 'No tienes mi edad';

console.log(message);

console.log('<---example--->');

//valores "falsos" : '', Undefined, Null, NaN, 0
let value = 0;

if (value) {
    console.log(`value: ${value}`);
} else {
    console.log('Else');
}

// switch

let day = prompt('Please, gSive me a day of the week');

if (day === 'Monday') {
    console.log(`it's ${day}`)
} else if (day === 'Tuesday') {
    console.log(`it's ${day}`)
} else if (day === 'Wednesday') {
     console.log(`it's ${day}`)
} else if (day === 'Thursday') {
    console.log(`it's ${day}`)
} else if (day === 'Friday') {
    console.log(`it's ${day}`)
} else {
    console.log("It's neither Monday, Tuesday, Wednesday, Thursday nor Friday")
}

switch (day) {
    case "Monday":
        console.log(`Switch: It's ${day}`);
        break;
    case "Tuesday":
        console.log(`Switch: It's ${day}`);
        break;
    case "Wedenesday":
        console.log(`Switch: It's ${day}`);
        break;
    case "Thursday":
        console.log(`Switch: It's ${day}`);
        break;
    case "Friday":
        console.log(`Switch: It's ${day}`);
        break;
    default:
        console.log("Switch: PepIt's neither Monday, Tuesday, Wednesday, Thursday nor Friday")
}

/*
Ejercicio: Conversor de temperaturas

Escribe un programa que solicite al usuario una temperatura y una escala de temperatura
(Delsius o Kelvin) a la que quiera cambiar esa temperatura.

El programa hace 2 preguntas:
"Ingresa la temperatura"
"Ingresa la escala a la que quieres cambiar tu temperatura (C o K):"

Casos para probar:
0 Cº son 273.15ºK
10 Cº son 283.15K
-10 Cº son 263.15L
*/

let temp = parseFloat(prompt("Ingresa la temperatura"));
let scale = prompt(`Ingresa la escala a la que quieres cambiar esos ${temp} grados (C ó K)`);
let result = 0;
// if (scale === 'K') {
//     result = temp + 273.15;
// } else if (scale === 'C') {
//     result = temp - 273.15;
// } else {
//     console.log('Algo ha salido mal...')
// }

result = scale === "K" ? temp + 273.15 : temp -273.15; 
console.log(`${temp}º son equivalentes a ${result}º${scale}`)



