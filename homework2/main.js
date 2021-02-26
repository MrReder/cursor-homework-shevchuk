'use strict';

let valueN = +prompt('Enter value N. It should be integer number');
while (!Number.isInteger(valueN) || valueN === 0) {
    valueN = +prompt('Enter an integer start number, please');
}

let valueM = +prompt('Enter value M. It should be integer number too');
while (!Number.isInteger(valueM) || valueN >= valueM || valueM === 0) {
    if (valueN >= valueM) {
        valueM = +prompt('Enter a valueM greater that a N value');
    } else {
        valueM = +prompt('Enter an integer valueM');
    }
}

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



