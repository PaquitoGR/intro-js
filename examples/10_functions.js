console.log('Funciones!');
// Definir función
function sayHi () {
  const saludo = 'Hola!';
  console.log(saludo);
}

console.log('vamos a llamar a sayHi');
// Invocar función
sayHi();

function esMayorDeEdad(age, legalAge) {
  if (age < 1 || age > 150) {
    console.log("Valor incorrecto");
  } else {
    if (age >= legalAge) {
      console.log("Eres mayor de edad", age);
    } else {
      console.log("Eres menor de edad", age);
    }
  }
}
esMayorDeEdad(50, 18);
esMayorDeEdad(16, 18);
esMayorDeEdad(25, 21);
esMayorDeEdad(-100, 21);

function sum (num1 = 0, num2 = 0) {
  return num1 + num2;
}

const variable = sum(2, 2); // 4
console.log(variable);

function crearSaludo(nombre) {
  return `Hola ${nombre}!`;
}

console.log(crearSaludo("Pepitilla"));

const saludoPersona = crearSaludo;

console.log(saludoPersona("Pepitilla"));

console.log(typeof(crearSaludo)); // function
console.log(typeof(crearSaludo("Pepis"))); //  String

const nums = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101];
function oddNumers(numbers) {
  let oddNums = [];
  for (let num of numbers) {
    if (num % 2 !== 0) oddNums.push(num);     
  }
  return oddNums;
}

console.log(oddNumers(nums))

// arrow functions

/*
const restar = (num1 = 0, num2 = 0) => {
  return num1 - num2;
}
*/

const restar = (num1 = 0, num2 = 0) => num1 - num2;

console.log(restar(10, 80));

const activateAccount = (name) => {
  return {
    // name: name,
    name, // <-- si la key y la variable tienen el mismo nombre.
    active: true
  };
}


const activateAccount2 = name => (
  {
  name,
  active: true
  }
)


const user1 = activateAccount('Kevin');
console.log(user1);

console.log(activateAccount("Pepito"));