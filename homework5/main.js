"use strict";

//1

const getRandomArray = (length, min, max) => {
    let randomArr = [];
    for (let i = 0; i < length; i++) {
        let getRandomNumber = (minNum, maxNum) => {
            return Math.ceil(Math.random() * (maxNum + 1 - minNum));
        };
        randomArr.push(getRandomNumber(min, max));
    } return randomArr;
}

console.log(`Функция №1`, getRandomArray(22, 5, 97));

//2 instead of delete reapiting numbers we used if els estatement and displayed moda!)

/*
    let modaArr = [];
    if (numbers.every(item => Number.isInteger(item))) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {

            } else {
                modaArr.push(numbers[i]);
            }
        }
        return modaArr;
    } else {
        console.log(`Input valid numbers!`);
    }
    */

const getModa = (...numbers) => {
    let currentDigitCount = 0;
    let moda = 0;
    let digit = null;
    if (numbers.every(item => Number.isInteger(item))) {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[i] === numbers[j]) {
                    currentDigitCount++;
                }
            }
            if (currentDigitCount > moda) {
                digit = numbers[i];
                moda = currentDigitCount;
                currentDigitCount = 0;
            }
        }
        return digit;
    } else {
        console.log(`Input valid numbers!`);
    }
}

console.log(`Функция №2`, getModa(2, 5, 7, 8, 5, 9, 12, 13, 5, 0, 23, 5, 69, 33, 5));


//3
const getAverage = (...numbers) => {
    let avg = 0;
    if (parseInt(numbers)) {
        let sum = numbers.reduce((firstElement, nextElement) => {
            return firstElement + nextElement;
        }, 0);

        return avg = sum / numbers.length;
    } else {
        console.log(`Input valid numbers!`)
    }

}

console.log(`Функция №3`, getAverage(2, 5, 7, 888, 98, 4, 7, 2, 1, 453));

//4 else if doesn`t work. I don`t know why :(((((

const getMedian = (...numbers) => {
    let median;
    if ((parseInt(numbers.length) && numbers.length % 2 !== 0)) {
        let midIndex = ((numbers.length - 1) / 2);
        median = numbers[midIndex];
        return median;
    } else if ((parseInt(numbers.length) && numbers.length % 2 === 0)) {
        median = (+numbers[(numbers.length / 2)] + +numbers[((numbers.length / 2) - 1)]) / 2;
        return median;
    } else {
        console.log(`Input valid numbers!`);
    }
}


console.log(`Функция №4`, getMedian(4, 5, 8, 23, 1, 57, 98, 34, 9));

//5
const filterEvenNumbers = (...numbers) => {

}
