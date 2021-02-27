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
        document.writeln(`Input correct currency!`);
    }
}
console.log(convertCurrency('3600uah'));



