/*
let car = {};

console.log(typeof car);
console.log(car);

car.brand = 'Ford';
car.year = 1969;
car.model = 'Mustang';
car.firstOwner = 'Keepcoding';

car.country = {};

console.log(car);

car.country.code = 'US';
car.country.name = 'United States';
*/

let car = {
    brand: 'Ford',
    year: 1969,
    model: 'Mustang',
    firstOwner: 'Keepcoding',   
    country: {
        code: 'us',
        name: 'United States',
    }
}

console.log(car.year);
console.log(car.country.code);
console.log(car['firstOwner']);
console.log(car.noExiste); //undefined

let user = {
    name: 'Matt',
    age: 25,
    city: 'Madrid',
    hobbies: ['futbol', 'basket'],
}

console.log(user.hobbies.join(', '));

delete user.age;

console.log(user)

let estudiantes = [
    {
        name:'juan',
        age: 20,
        cursos: [
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
        cursos: [
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
]

console.log(estudiantes[1].cursos[1].score);

for (let i = 0; i < estudiantes.length; i++) {
    const student = estudiantes[i];
    const courses =  student.cursos;
    for (let j = 0; j < courses.length; j++) {
        const course = courses[j];
        if (course.score >70) {
            console.log(student.name, course.name);
        }
    }
    
}