// Kerjakan kode kalian di bawah ini

console.log('```');
console.log('PERULANGAN FOR PERTAMA');
console.log('======================');

for (let x = 1; x <= 20; x++) {
    console.log(x + ' - ' + 'Coding asyik banget, Cuy!');
}

// pengulangan for kedua

console.log('```');
console.log('PERULANGAN FOR KEDUA');
console.log('======================');

for (let y = 20; y >= 1; y--) {
    console.log(y + ' - ' + 'Coding itu harus latihan setiap hari!');
}

// pengulangan while pertama

console.log('```');
console.log('PERULANGAN WHILE PERTAMA');
console.log('======================');

// tanpa if
// let w = 2;
// while (w <= 20) {
//     console.log(w + ' - ' + 'Coding asyik banget, Cuy!');
//     w += 2;
// }

let w = 2;
while (w <= 20) {
    if (w % 2 === 0) {
        console.log(w + ' - ' + 'Coding asyik banget, Cuy!');
    }
    w++;
}

// pengulangan while kedua

console.log('```');
console.log('PERULANGAN WHILE KEDUA');
console.log('======================');

// tanpa if
// let v = 20;
// while (v >= 2) {
//     console.log(v + ' - ' + 'Coding itu harus latihan setiap hari!');
//     v -= 2;
// }

let v = 20;
while (v >= 2) {
    if (v % 2 === 0) {
        console.log(v + ' - ' + 'Coding itu harus latihan setiap hari!');
    } v--;
}