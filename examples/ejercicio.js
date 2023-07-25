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

// while (true) {
//     let userOption = "";
//     const options = ["piedra", "papel", "tijera", "salir"];

//     if (!options.includes(userOption)) {
//         userOption = prompt("Elija opción correcta: 'piedra', 'papel' o 'tijera'. ");
//     }
//     else continue;

//     if (userOption === "salir") break;
//     else if (userOption === "piedra") console.log("Empatamos!");
//     else if (userOption === "papel") console.log("Tú ganas!");
//     else if (userOption === "tijera") console.log("Yo gano!"); //  solo queda tijerapiedr
// }


// const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
// const oddNumbers = numbers.filter((elem) => elem % 2 !== 0);
// console.log(oddNumbers);


// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   if (number % 2 !== 0) {
//     // oddNumbers[oddNumbers.length] = number
//     oddNumbers.push(number);
//     // oddNumbers = oddNumbers.concat(number);
//   }
// }

/*
Ejercicio: Filtrar y transformar un array de objetos

Enunciado: Dado un array de objetos que representan libros, utiliza filter para filtrar los libros cuyo año de publicación sea posterior a 2000 y luego utiliza map para crear un nuevo array con los títulos de esos libros.
*/

const books = [
    {
        title: "El gran Gatsby",
        author: "F. Scott Fitzgerald",
        year: "1925",
    },
    {
        title: "1984",
        author: "George Orwell",
        year: "1949",
    },
    {
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        year: "1967",
    },
    {
        title: "Harry Potter y la piedra filosofal",
        author: "J.K. Rowling",
        year: "1997",
    },
    {
        title: "El código Da Vinci",
        author: "Dan Brown",
        year: "2003",
    },
    {
        title: "Crepúsculo",
        author: "Stephenie Meyer",
        year: "2005",
    },
    {
        title: "Los juegos del hambre",
        author: "Suzanne Collins",
        year: "2008",
    },
]
 
const booksAfter2000 = books.filter((book) => book.year > 2000);

const booksAfter2000Titles = booksAfter2000.map((book) => book.title);

console.log(booksAfter2000);
console.log(booksAfter2000Titles);
