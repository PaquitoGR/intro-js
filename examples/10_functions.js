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

// si es solo un parametro, no se escriben los paréntesis.
// al devolver un objeto (mas de una línea), la arrow function devuelve con paréntesis
const activateAccount2 = name => (
  {
  name,
  active: true
  }
)


const user1 = activateAccount('Kevin');
console.log(user1);

console.log(activateAccount2("Pepito"));

// rest params

const foo = (...params) => console.log(params);

foo(1, 2, 3, 4, 'prueba', false);


const sumar = (...params) => {
  let sum = 0;
  for (let num of params){
    sum += num;
  }
  return sum;
}

console.log(sumar(1, 2, 3, 4))


// closures
console.log("******** CLOSURES *******");

 const counter = () => {
  let count = 0;
  
  const increment = () => {
    count++;
  }

  const resetCount = () => {
    count = 0;
  }

  const getCount = () => count;

  return {
    // increment: increment, 
    increment,
    resetCount,
    count: getCount,
  };
}


const contador1 = counter();
const contador2 = counter();
console.log(contador1);
contador1.increment();
contador1.increment();
contador2.increment();
// contador1.increment();
console.log(contador1.count());
console.log(contador2.count());
// console.log(contador2.count());


console.log("******** CLOSURES 2 EL REGRESO *******");

const miContador = (function() {
  let _contador = 0;

  function incrementar() {
    return _contador++; 
  }

  function decrementar() {
    return _contador--;
  }

  function valor() {
    return _contador;
  }

  return {
    incrementar,
    decrementar,
    valor,
  }
})();


console.log(miContador.valor());
miContador.decrementar();
console.log(miContador.valor());


/* Crear un closure de una calculadora que pueda hacer las si¡guientes operaciones guardando el resultado
*/
const calculadora = () => {
  let operando = 0;

  const sumar = (num) => operando += num;  
  const restar = (num) => operando -= num;
  const multiplicar = (num) => operando *= num;
  const dividir = (num) => operando /= num;

  /* Lo mismo: 
  return {
    sumar: (num) => operando += num,
    restar: (num) => operando -= num,
    multiplicar: (num) => operando *= num,
    dividir: (num) => operando /= num,
  }
  */

  return {
    sumar,
    restar,
    multiplicar,
    dividir,
  }
}



const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5));
console.log(miCalculadora.restar(2));
console.log(miCalculadora.multiplicar(4));
console.log(miCalculadora.dividir(2));
console.log(miCalculadora.sumar(10));

// pasar una función como parámetro

const realizarOperación = (num1, num2, operacion) => {
  
};

let resultadoSuma = realizarOperación(1, 2, suma); // 3