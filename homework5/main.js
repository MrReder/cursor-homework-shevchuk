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
const getModa = (...numbers) => {
    let numbersArray = [...numbers];
    let moda = 1;
    let currentDigitCount = 0;
    let digit;
    for (let i = 0; i < numbersArray.length; i++) {
        for (let j = i; j < numbersArray.length; j++) {
            if (numbersArray[i] == numbersArray[j]) currentDigitCount++;
            if (currentDigitCount > moda) {
                moda = currentDigitCount;
                digit = numbersArray[i];
            }
        }
        currentDigitCount = 0;
    }
    return digit;

}


console.log(`Функция №2`, getModa(2, 5, 7, 8, 5, 9, 12, 13, 5, 0, 23, 5, 69, 33, 5));


//3
const getAverage = (...numbers) => {
    let avg = 0;
    if (numbers.filter(numbers => Number.isInteger(numbers))) {
        let sum = numbers.reduce((firstElement, nextElement) => firstElement + nextElement);
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
    let evenNumbersArr = [];
    evenNumbersArr = numbers.filter((number) => (number % 2 !== 0));
    return evenNumbersArr;
}

console.log(`Функция №5`, filterEvenNumbers(1, 23, 54, 66, 79, 23, 5, 9, 1, 23321, 2336));

//6
const countPositiveNumbers = (...numbers) => {
    let positiveQuantity = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            positiveQuantity++;
        }
    } return positiveQuantity;

}

console.log(`Функция №6`, countPositiveNumbers(1, -23, 54, -66, 79, 23, 5, -9, 1, -23321, 2336));

//7
const getDividedByFive = (...numbers) => {
    let dividedByFiveArr = [];
    dividedByFiveArr = numbers.filter((number) => (number % 5 === 0));
    return dividedByFiveArr;
}

console.log(`Функция №7`, getDividedByFive(100, 32, 48, 79, 85, 21, 235));

//8
const replaceBadWords = (string) => {
    let stringArr = [];
    stringArr = string.split(' ');
    let newArr = []
    const strongLanguage = ['fuck', 'shit'];
    for (let i = 0; i < stringArr.length; i++) {
        newArr.push(
            stringArr[i].split(strongLanguage[0]).join('****').split(strongLanguage[1]).join('****')
        )
    }
    return newArr.join(' ')
}

console.log(`Функция №8`, replaceBadWords(`It's a bullshit! Go fuck yourself!`));

//9
const divideByThree = (word) => {
    let wordArr = [];
    word = word.split(' ').join(' ');
    wordArr = word;
    let dividedWordArr = [];
    for (let i = 0; i < wordArr.length; i += 3) {
        dividedWordArr.push(wordArr.toLowerCase().substring(i, i + 3));
    } return dividedWordArr;
}

console.log(`Функция №9`, divideByThree(`Shepard`));

//10
const generateCombinations = (word) => {
    const replaceChars = (chars, i, j) => {
        let tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp;
    }
    let counter = Array(word.length).fill(0);
    let anagrams = [],
        chars = word.split('');
    anagrams.push(word);
    let i = 0;
    while (i < chars.length) {
        if (counter[i] < i) {
            replaceChars(chars, i % 2 === 1 ? counter[i] : 0, i);
            counter[i]++;
            i = 0;
            anagrams.push(chars.join(''));
        } else {
            counter[i] = 0;
            i++;
        }
    }
    return anagrams;
}

console.log(`Функция №10`, generateCombinations(`Commander`));