'use strict';

//1
const maxDigit = function (number) {
    const str = number + ""; //converting choosen number to String
    const divided = str.split(""); //creating String array
    const toDigit = divided.map(string => +string); //converting String array to digital
    const result = Math.max(...toDigit); //looking for max number of digital array
    return result;
}
console.log(maxDigit(1236345342657));

//2
const degreeOf = function (number, degree) {
    let result = 1;
    for (let i = 1; i <= degree; i++) {
        result *= number;
    } return result;
}
console.log(degreeOf(7, 3));

//3

const toUpper = function (text) {
    let result;
    result = text[0].toUpperCase() + text.slice(1);
    return result
}

console.log(toUpper(`kolya`));

//4

const taxSubtraction = function (profit) {
    const taxOnProfit = 18;
    const militaryTax = 1.5;
    let netProfit = profit - (profit * ((taxOnProfit + militaryTax) / 100));
    return netProfit;
}

console.log(`Net profit of our company last month was ${taxSubtraction(15000)} USD`);

//5

const getRandomNumber = function (n, m) {
    let result = Math.trunc(n + Math.random() * (m + 1 - n));
    return result;
}

console.log(getRandomNumber(1, 355));

//6 I don`t know why it`s not work! :((

const countLetter = function (letter, text) {

    let counter = 0;

    for (let i = 0; i < text.lengh; i++) {

        if (text[i] === letter) {
            counter++;
        }
    } return counter;

}
console.log(countLetter('s', 'success'));



//7 I don`t know why it`s not work

const convertCurrency = function (money) {
    let arr = Array(money);
    const usa = arr.includes('$');
    const ua = arr.includes('uah') || arr.includes('UAH');
    const for1buck = 28;
    let converted = 0;
    if (usa) {
        converted = parseInt(arr) * for1buck;
        return converted;
    } else if (ua) {
        converted = parseInt(arr) / for1buck;
        return converted;
    } else {
        console.log(`Input correct currency!`);
    }
}
console.log(convertCurrency('3600uah'));

//8 

const getRandomPwd = function (digitsQuantity) {
    let pwd = ' ';
    const digits = '0123456789';

    for (let i = 0; i < digitsQuantity; i++) {
        if (digitsQuantity === ' ') {
            digitsQuantity === '8';
            pwd += digits.charAt(Math.floor(Math.random() * digitsQuantity.length));
            return pwd;
        }
        pwd += digits.charAt(Math.floor(Math.random() * digits.length));
    } return pwd;
}
console.log(getRandomPwd(9));

//9 I don`t understand why I can`t split arrText to parts and delete arrPt...
const deleteLetters = function (letter, text) {

    let counter = 0;
    let arrText = Array(text);

    for (let i = 0; i < arrText.lengh; i++) {
        let arrPt = charAt(i);
        if (arrPt[i] === letter) {
            counter++;
        } arrText = arrPt[i].replace(counter++, '');
    } return arrText;


}
console.log(deleteLetters('a', 'abbababgalamaga'));

//10 Again I don`t undersatnd why it`s not work! :((((((
const isPalyndrom = function (text) {
    let reverse = function (text) {
        reverseString(text);
    }
    if (text === reverse) {
        true;
    } else {
        false;
    }
}
console.log(isPalyndrom('tenet'));

//11 The same reason like function #9 I can`t build right function #11

document.writeln(`Функция №1 ${maxDigit(1236345342657)} <br> `);
document.writeln(`Функция №2 ${degreeOf(7, 3)} <br> `);
document.writeln(`Функция №3 ${toUpper(`kolya`)} <br> `);
document.writeln(`Функция №4 ${taxSubtraction(15000)}`);
document.writeln(`Функция №5 ${getRandomNumber(1, 355)}`);
document.writeln(`Функция №6 ${countLetter('s', 'success')}. К сожалению не работает.`);
document.writeln(`Функция №7 ${convertCurrency('3600uah')}. К сожалению не работает.`);
document.writeln(`Функция №8 ${getRandomPwd(9)}`);
document.writeln(`Функция №9 ${deleteLetters('a', 'abbababgalamaga')}. К соажлению, не работает :(`);
document.writeln(`Функция №10 ${isPalyndrom('tenet')}. К сожалению, не работает :(`);
document.writeln(`Функция №11. Даже не знаю с чего начать так как функция 9 не работает.`);
