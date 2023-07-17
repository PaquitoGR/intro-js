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