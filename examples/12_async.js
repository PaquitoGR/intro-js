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

/*
const cargarDatosCb = (cb) => {
    setTimeout(() => {
        cb('Datos cargados');
    }, 2000);
};

let loading = true;

console.log(loading);

cargarDatosCb((data) => {
    console.log(data);
    loading = false;
    console.log(loading);
});

*/

const downloadUserData = (cb) => {
    setTimeout(() => {
        console.log('User data downloaded');
        cb();
    }, 2000);
};

const processUserData = (cb) => {
    setTimeout(() => {
        console.log('User data processed');
        cb();
    }, 1000);
};

const displayUserDashboard = (cb) => {
    setTimeout(() => {
        console.log('User dashboard displayed');
        cb();
    }, 3000);
};


downloadUserData(() => {
    processUserData(() => {
        displayUserDashboard(() => {
            console.log('Fin, ya se ve el usuario por pantalla.')
        });
    });
});
