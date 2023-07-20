// for

// let count = [];
// console.log('Inicio');
// for (let i = 0; i < 5; i++) {
//     console.log('Bloque dentro del for');
//     count.push(i);
// }

// console.log('FIN',count);

const fruit = ['apple', 'banana', 'kiwi', 'watermelon', 'orange', 'Kiwi'];

for (let i = 0; i < fruit.lenght; i++) {
    const fruit = fruit[i];
    if (fruit.toLowerCase() !== 'kiwi') {
        console.log(fruit);
    } else {
        console.log("****");
    }
}

console.log('---Continue y break---')

for (let index = 0; index < 10; index ++) {
    // continue
    if (index === 2 || index === 0) {
        continue;
    }
    console.log('index', index)
}

for (let index = 0; index < 10; index ++) {
    // break
    if (index === 2 || index === 0) {
        continue;
    }
    console.log('index', index)
}

// While

