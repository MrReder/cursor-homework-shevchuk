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

console.log(getRandomArray(22, 5, 97));