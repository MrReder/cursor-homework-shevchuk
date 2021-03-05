'use strict';

//1
const getMaxDigit = (number) => {
    return Math.max(...number.toString().split(''))
}
console.log(getMaxDigit(1236345342657));

//2
const raiseNumberToDegree = (number, degree) => {
    let result = 1;


    for (let i = 1; i <= degree; i++) {
        result *= number;
    } return result;
}
console.log(raiseNumberToDegree(7, 3));

//3

const formatName = (text) => {
    return text[0].toUpperCase() + text.slice(1).toLowerCase() || text[0].toLowerCase() + text.slice(1).toUpperCase();
}

console.log(formatName(`kolya`));

//4

const substractTax = (profit) => {
    const taxOnProfit = 18;
    const militaryTax = 1.5;
    return profit - (profit * ((taxOnProfit + militaryTax) / 100));
}

console.log(`Net profit of our company last month was ${substractTax(15000)} USD`);

//5

const getRandomNumber = (n, m) => {
    return Math.trunc(n + Math.random() * (m + 1 - n));
}

console.log(getRandomNumber(1, 355));

//6 

const countLetter = (letter, text) => {
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === letter) {
            counter++;
        }
    } return counter;

}
console.log(countLetter('s', 'success'));



//7 

const convertCurrency = (money) => {
    const arr = money.split(' , ').join(' , ');
    const usa = arr.includes('$');
    const ua = arr.includes('uah') || arr.includes('UAH');
    const for1buck = 28;
    if (usa) {
        return (parseInt(arr) * for1buck).toFixed(2);
    } else if (ua) {
        return (parseInt(arr) / for1buck).toFixed(2);
    } else {
        console.log(`Input correct currency!`);
    }
}
console.log(convertCurrency('547$'));

//8 

const getRandomPwd = (digitsQuantity = 8) => {
    let pwd = ' ';
    const digits = '0123456789';
    for (let i = 0; i < digitsQuantity; i++) {
        pwd += digits.charAt(Math.floor(Math.random() * digits.length));
    } return pwd;
}
console.log(getRandomPwd(9));

//9 
const deleteLetters = (letter, text) => text.split(letter).join("");
console.log(deleteLetters('a', 'abbababgalamaga'));

//10 

const checkIfWordIsPalindrom = (text) => {
    let reverse = function (textToReverse) {
        return text.split('').reverse().join('')
    }
    return text === reverse(text)
}
console.log(checkIfWordIsPalindrom('tenet'));

//11
const deleteDuplicateLetter = (text) => {
    let splittedText = text.split("");
    let arrWithoutDuplicate = [];
    for (let i = 0; i < text.length; i++) {
        if (splittedText.indexOf(splittedText[i]) === splittedText.lastIndexOf(splittedText[i])) {
            arrWithoutDuplicate.push(splittedText[i]);
        }
    }
    return arrWithoutDuplicate.join("");
}
console.log(deleteDuplicateLetter('barbarian'));

document.writeln(`Функция №1 ${getMaxDigit(1236345342657)} <br> `);
document.writeln(`Функция №2 ${raiseNumberToDegree(7, 3)} <br> `);
document.writeln(`Функция №3 ${formatName(`kolya`)} <br> `);
document.writeln(`Функция №4 ${substractTax(15000)} <br> `);
document.writeln(`Функция №5 ${getRandomNumber(1, 355)} <br> `);
document.writeln(`Функция №6 ${countLetter('s', 'success')}<br> `);
document.writeln(`Функция №7 ${convertCurrency('3600uah')}. <br> `);
document.writeln(`Функция №8 ${getRandomPwd(9)} <br> `);
document.writeln(`Функция №9 ${deleteLetters('a', 'abbababgalamaga')} <br> `);
document.writeln(`Функция №10 ${checkIfWordIsPalindrom('tenet')}<br> `);
document.writeln(`Функция №11 ${deleteDuplicateLetter('barbarian')}<br> `);
