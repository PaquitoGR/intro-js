/// destructuring

const arr = [
    'message1',
    'message2',
    'message3'
];

arr[0]; // message1
arr[1]; // message2
arr[4]; // undefined

const user = { name: 'Matt', age: 30};

user.name; // Matt
user.age; // 30


const [position1, position2] = arr;
// const [,,position3] = arr;

console.log(position1); // message1
console.log(position2); // message2
//console.log(position3);

const { age, name: firstName } = user;

console.log(firstName);
console.log(age); //30
console.log(user);


const libros = [
    {title: "El gran Gatsby", author: "F. Scott Fitzgerald", year: "1925" },
    {title: "1984", author: "George Orwell", year: "1949" },
    {title: "Cien años de soledad", author: "Gabriel García Márquez", year: "1967" },
    {title: "Harry Potter y la piedra filosofal", author: "J.K. Rowling", year: "1997" },
    {title: "El código Da Vinci", author: "Dan Brown", year: "2003" },
    {title: "Crepúsculo", author: "Stephenie Meyer", year: "2005" },
    {title: "Los juegos del hambre", author: "Suzanne Collins", year: "2008" },
];

const post2kTitles = libros
    .filter(({ año }) => año > 2000)
    .map(({ titulo }) => titulo);


const useProfile = () => {
    const data = 0;
    const setData = (value) => data = value;
    return [data, setData];
};

const [data, setData] = useProfile();

profile[0]
profile[1](123)