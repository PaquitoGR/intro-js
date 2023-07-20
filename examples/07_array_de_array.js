const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// console.log(matrix[1][2]);

// let nombre = "pepito";
// nombre = nombre.replace(nombre[0], nombre[0].toUpperCase())

// console.log(nombre)

console.log('---matrix---');
for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);        
    }
}

console.log('---end matrix---');

const tree = [
    ['-', '-','*', '-', '-'],
    ['-', '*','*', '*', '-'],
    ['*', '*','*', '*', '*'],
];


// for (let i = 0; i < tree.length; i++) {
//     let row = "";
//     for (let j = 0; j < tree[i].length; j++) {
//         row += tree[i][j];
//     }
//     console.log(row);
// }


const rows = 10;

for (let i = 0; i < rows; i++){
    let rowChar = "";
    for (let j = 0; j < rows + i; j++){
        rowChar = j + 1 < rows - i ? rowChar + "-" : rowChar + "*";
    }
    console.log(rowChar);
}
