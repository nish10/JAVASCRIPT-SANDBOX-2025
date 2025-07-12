// let i = 0;

// while (i <= 20) {
//     console.log('Number ' + i);
//     i++;
// }

const arr = [10, 20, 30, 40]

let j = 0;

while (j < arr.length) {
    console.log('Array Element: ' + arr[j]);
    j++;
}

let i = 0;
// Nesting While loops
while (i <= 5) {
    console.log('Number ' + i);

    let j = 1;
    while(j <= 5) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
}


// Do While Loop
let k = 0;
do {
    console.log('Number ' + k);
    k++;
} while (k <= 10);
