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