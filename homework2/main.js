'use strict';

/*
const valueN = parseInt(prompt('Enter value N. It should be integer number'));
Number.isInteger(valueN) === true ? alert(`Number N is ${valueN}.`) : alert(`Wrong input of number N. Try again!`);

const valueM = parseInt(prompt('Enter value M. It should be integer number too'));
Number.isInteger(valueM) === true ? alert(`Number M is ${valueM}.`) : alert(`Wrong input of number M. Try again!`);

let isPair = confirm('Would we do miss even numbers?') ? true : false;

const wrongInput = valueN >= valueM ? alert(`Number M must be more than number N. Press F5 and try again!`) : isPair;

let numbersSum = 0;

if (isPair === true) {
    for (let i = valueN; i <= valueM; i++) {
        if (i % 2 != 0) {
            numbersSum += i;
        }
    }
} else {
    for (let i = valueN; i <= valueM; i++) {
        numbersSum += i;
    }
}
document.writeln(`Amount of numbers from ${valueN} to ${valueM} (included) is ${numbersSum}.`);
*/

let valueN = +prompt('Enter value N. It should be integer number');
//Number.isInteger(valueN) === true ? alert(`Number N is ${valueN}.`) : alert(`Wrong input of number N. Try again!`);
while (!Number.isInteger(valueN)) {
    valueN = prompt('Number must be integer');
}

let valueM = +prompt('Enter value M. It should be integer number too');
//Number.isInteger(valueM) === true ? alert(`Number M is ${valueM}.`) : alert(`Wrong input of number M. Try again!`);
while (!Number.isInteger(valueM)) {
    valueM = prompt('Number must be integer');
}
const wrongInput = valueN >= valueM ? prompt(`Number M must be more than number N. Press F5 and try again!`) : isPair;

let isPair = confirm('Would we do miss even numbers?');



let numbersSum = 0;

if (isPair) {
    for (let i = valueN; i <= valueM; i++) {
        if (i % 2 != 0) {
            numbersSum += i;
        }
    }
} else {
    for (let i = valueN; i <= valueM; i++) {
        numbersSum += i;
    }
}
document.writeln(`Amount of numbers from ${valueN} to ${valueM} (included) is ${numbersSum}.`);



