/*
const numbers = [1, 2, 23, 41, 5, 60, 74, 87, 90, 101];
let result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        // result.push(numbers[i])
        // result[result.length] = numbers[i];
        result = result.concat(numbers[i]);
    }
}

console.log(result);
*/

// piedra papel tijera
// vamos a preguntar al usuario su jugada, que tiene que ser piedra papel o tijera
// si no es ninguna mostrar un mensaje de "opcion incorrecta"
// si el usuario quiere salir que escirba "salir"
// el rival siempre va a tener piedra

//const computerOption = "piedra";

while (true) {
    let userOption = "";
    const options = ["piedra", "papel", "tijera", "salir"];

    if (!options.includes(userOption)) {
        userOption = prompt("Elija opción correcta: 'piedra', 'papel' o 'tijera'. ");
    }
    else continue;

    if (userOption === "salir") break;
    else if (userOption === "piedra") console.log("Empatamos!");
    else if (userOption === "papel") console.log("Tú ganas!");
    else if (userOption === "tijera") console.log("Yo gano!"); //  solo queda tijerapiedr
}
