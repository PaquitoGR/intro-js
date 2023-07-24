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
console.log(typeof(crearSaludo("Pepis")));