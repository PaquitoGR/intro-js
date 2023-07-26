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
*/

// promises

// promise -> envolver una parte de código asíncrono para crear una promesa y controlar la ejecución

const downloadUserData = () => {
    return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('User data downloaded');
            let user = { name: 'test' };
            resolve(user);
        }, 2000);
    });
};

const processUserData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('User data processed');
            resolve();
        }, 1000);
    });
};

const displayUserDashboard = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('User dashboard displayed');
            resolve();
        }, 3000);
    });
};

// console.log("Loading...");
// downloadUserData()
//     .then(() => {
//         processUserData()
//             .then(() => {
//                 displayUserDashboard()
//                     .then(() => {
//                         console.log('Fin ya se ve el usuario por pantalla');
//                     });
//             });
//     });

// Forma mas correcta: 

/*
console.log("Loading...");
downloadUserData()
    .then((user) => {
        console.log(user);
        return processUserData();
    }).then(() => {
        return displayUserDashboard();
    }).then(() => {
        console.log('Fin. Ya se ve el usuario por pantalla')
    }).catch((error) => {
        console.log('Catch??? ', error);
    }).finally(() => {
        console.log('Ejecutar siempre');
    });

*/

// async/await

const main = async () => {
    try {
        console.log('Loading...');
        const user = await downloadUserData();
        console.log(user);
        await processUserData();
        await displayUserDashboard();
        console.log('Fin. Ya se ve el usuario por pantalla');
    } catch (error) {
        console.log('oh no!', error);
    } finally {
        console.log("Ejecutar Siempre");
    }
};

main();

// error
/*
const main = async () => {
    try {
        console.log('Loading...');
        throw new Error('Error cargando la página');
        const user = await downloadUserData();
        console.log(user);
        await processUserData();
        await displayUserDashboard();
        console.log('Fin. Ya se ve el usuario por pantalla');
    } catch (error) {
        console.log('oh no!', error);
    } finally {
        console.log("Ejecutar Siempre");
    }
};

main();
*/