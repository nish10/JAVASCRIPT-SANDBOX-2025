for (let i = 0; i <= 10; i++) {
    // console.log(i);
    console.log('Number ' + i);
    if (i === 7) {
        console.log('7 is my lucky number')
    } else {
        console.log(i + ' is not my lucky number')
    }
}

// use let in for loop not var other wise it will not be in for loop scope

// console.log(i)

// Nested loops 
for (let i = 1; i <= 5; i++) {
    console.log('Number' + i);
    for (let j = 1; j<= 10; j++) {
        console.log(`${i} * ${j} = ${i *j}`)
    }
}

// loop through an array

const names = ['Nish', 'Sand', 'John', 'Sara', 'Alice']

for (let i = 0; i< names.length; i++) {
    if (names[i] === 'Sand') {
        console.log('Sand is the best');
    } else{
        console.log(names[i]);
    }
}



