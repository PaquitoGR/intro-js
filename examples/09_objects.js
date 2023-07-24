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
]

console.log(students[1].courses[1].score);
console.log('students[1]', students[1]);
console.log('students[1].courses', students[1].courses);
console.log('students[1].courses[1]', students[1].courses[1]);
console.log('students[1].courses[1].score', students[1].courses[1].score);

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const courses = student.courses;
    for (let j = 0; j < courses.length; j++) {
        const course = courses[j];
        if (course.score >70) {
            console.log(student.name, course.name);
        }
    }
    
}

const randomValue = Math.random() * 3;
const options = ['piedra', 'papel', 'tijera'];
const randomIndex = Math.floor(randomValue);
console.log(options[randomIndex]);

let user2 = {
    name: 'Matt',
    age: 25,
    city: 'Madrid',
    hobbies: ['futbol', 'basket'],
}

const keys = Object.keys(user2);
const values = Object.values(user2);

console.log(keys, values)

/* for-in for-of */
console.log("for-in");
for(let u in user2) {
    console.log(u);
}