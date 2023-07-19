// ejemplos de if, else if, else, switch

let edad = 18;

console.log(`La edad es ${edad}`); 

console.log('Inicio');

if (edad >= 18) {
    let edad = 1;
    let legalAge = 18;
    console.log(`Eres mayor de edad con ${edad} años`);
} else if (14 < edad){
    console.log('Eres adolescente');
} else {
    console.log("no eres 'mayor' de edad");
}

console.log('Final', edad);

// ternario

const resultado = edad === 30; // true o un false
const message = resultado ? 'Tienes mi edad' : 'No tienes mi edad';

console.log(message);

console.log('<---example--->');

//valores "falsos" : '', Undefined, Null, NaN, 0
let value = 0;

if (value) {
    console.log(`value: ${value}`);
} else {
    console.log('Else');
}

// switch

let day = 'Sunday';

if (day === 'Monday') {
    console.log(`it's ${day}`)
} else if (day === 'Tuesday') {
    console.log(`it's ${day}`)
} else if (day === 'Wednesday') {
     console.log(`it's ${day}`)
} else if (day === 'Thursday') {
    console.log(`it's ${day}`)
} else if (day === 'Friday') {
    console.log(`it's ${day}`)
}

switch (day) {
    case "Monday":
        console.log(`Switch: It's ${day}`);
        break;
    case "Tuesday":
        console.log(`Switch: It's ${day}`);
        break;
    case "Wedenesday":
        console.log(`Switch: It's ${day}`);
        break;
    case "Thursday":
        console.log(`Switch: It's ${day}`);
        break;
    case "Friday":
        console.log(`Switch: It's ${day}`);
        break;
    default:
        console.log("It's neither Monday, Tuesday, Wednesday, Thursday nor Friday")
}