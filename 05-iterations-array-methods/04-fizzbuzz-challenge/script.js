function isMultipleOf3(num) {
    return num % 3 === 0;
}

function isMultipleOf5(num) {
    return num % 5 === 0;
}

function fizzBuzz(num) {
    if (isMultipleOf3(num) && isMultipleOf5(num)) {
        console.log('FizzBuzz');
    } else if(isMultipleOf3(num)) {
        console.log('Fizz');
    } else if (isMultipleOf5(num)) {
        console.log('Buzz');
    } else {
        console.log(num);
    }
}

for (let i = 0; i <= 100; i++) {
    fizzBuzz(i);
}