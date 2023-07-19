// ejemplos string

let username = 'Keepcoding_user'

console.log(username.length);

let number = '12';

console.log(parseFloat(number));

console.log(username.toLowerCase());

console.log(username.toUpperCase());

const includesKeep = username.toLowerCase().includes('keep');

console.log(includesKeep);

let textWithSpaces = `   Hello ${username}       `;
console.log(textWithSpaces.trim());


let temp = parseFloat(prompt("Ingresa la temperatura").trim());
let scale = prompt(`Ingresa la escala a la que quieres cambiar esos ${temp} grados (C ó K)`).trim().toUpperCase();
let result = 0;
// if (scale === 'K') {
//     result = temp + 273.15;
// } else if (scale === 'C') {
//     result = temp - 273.15;
// } else {
//     console.log('Algo ha salido mal...')
// }

result = scale === "K" ? temp + 273.15 : temp -273.15; 
console.log(`${temp}º${scale === "K" ? "C" : "K"} son equivalentes a ${result}º${scale}`)