// console.log('Hola!');

// setTimeout(() => {
//     console.log('mundo');
// }, 3000);

// console.log('Fin!');
/*
const cargarDatos = () => {
    setTimeout(() =>{
        console.log('Datos cargados');
        return 'Datos cargados';
    }, 2000); 
};

let loading = true;

const datos = cargarDatos();
console.log(datos);

loading = false;
console.log(loading);
*/
// controlar la espera
// acceder al valor

/*
1. callback
2. promises
3. Async/await
*/

// Callback

const cargarDatosCb = (cb) => {
    setTimeout(() =>{
        cb('Datos cargadis');
    }, 2000);
};

let loading = true;
console.log(loading);
cargarDatosCb((data) => {
    console.log(data);
    loading = false;
    console.log()
});