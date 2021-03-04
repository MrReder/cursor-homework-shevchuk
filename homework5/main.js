"use strict";

//1

const getRandomArray = (length, min, max) => {

    let randomArr = [];

    for (let i = 0; i < length; i++) {

        let getRandomNumber = (minNum, maxNum) => {
            let randomNum = Math.ceil(Math.random() * (maxNum + 1 - minNum));
            return randomNum;
        };

        randomArr.push(getRandomNumber(min, max));

    } return randomArr;
}

console.log(`Функция №1`, getRandomArray(22, 5, 97));

//2

const getModa = (...numbers) => {
    let modaArr = [];

    if (parseInt(...numbers)) {

        for (let i = 0; i < numbers.length; i++) {
            if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
                modaArr.push();
            }
        }
        return modaArr;


    } else {
        console.log(`Input valid numbers!`);
    }

}

console.log(`Функция №2`, getModa(2, 5, 7, 8, 5, 9, 12, 13, 5, 0, 23, 5, 69, 33, 5));


