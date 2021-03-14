"use strict";

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1
function getMyTaxes(salary) {
    return +(this.tax * salary).toFixed(2);
}
console.log(`Amount of taxes in Ukraine is:`, getMyTaxes.call(ukraine, 1789));

//2 
function getMiddleTaxes(country) {
    return +(this.tax * this.middleSalary).toFixed(2);
}

console.log(`Amount of taxes in choosen country is:`, getMiddleTaxes.call(latvia));

//3 Створіть функцію getTotalTaxes.call(country) -> number; 
//– яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. 
//(tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
function getTotalTaxes(country) {
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}
console.log(`Amount of taxes of all specialists in choosen country is:`, getTotalTaxes.call(litva));


