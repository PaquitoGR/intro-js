// importar
import calculadora, { sumScores as sumaScores, suma } from "./utils.js";


console.log('index');

let students = [
    {
        name:'juan',
        age: 20,
        courses: [
            {
                name: 'Mates',
                score: 95
            },
            {
                name: 'History',
                score: 85
            }
        ]
    },
    {
        name: 'María',
        age: 22,
        courses: [
            {
                name: 'Mates',
                score: 100
            },
            {
                name: 'History',
                score: 70
            }
        ]
    }
];
/*
const newList = students.map(({ courses, name, age}) => {
    const courseScore = sumaScores(courses);
    return {
        name,
        age,
        courseScore
    };
    
});

console.log(suma(1,2));

console.log(newList);

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5));
console.log(miCalculadora.restar(2));
console.log(miCalculadora.multiplicar(4));
console.log(miCalculadora.dividir(2));
console.log(miCalculadora.sumar(10));
*/

/// dates
const currentDate = new Date();
console.log('getDate() ->', currentDate.getDate());
console.log('getFullYear() ->', currentDate.getFullYear());
console.log('getDay() ->', currentDate.getDay());
console.log('getTime ->', currentDate.getTime());
console.log('getHours() ->', currentDate.getHours());


/// regex

const texto = "Hola, mi telefono es 123-456-7890 y 654-456-9887";
let pattern = /\d{3}-\d{3}-(\d{4})/g; //REGEX (g -> global, comprueba no solo la primera ocurrencia)

console.log(pattern.test(texto));
console.log(texto.match(pattern));
console.log(texto.replace(pattern, '***-***-****'));