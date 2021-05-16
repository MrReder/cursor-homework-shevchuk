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

//3 
function getTotalTaxes(country) {
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}
console.log(`Amount of taxes of all specialists in choosen country is:`, getTotalTaxes.call(litva));

//4 
function getMySalary(country) {
    const minSalary = 1500;
    const maxSalary = 2000;
    const salary = Math.ceil(minSalary + Math.random() * (maxSalary + 1 - minSalary));
    const taxes = this.tax * salary;
    const profit = salary - taxes;
    setInterval(() => {
        console.log('If I would live in choosen country my salary, taxes and Net profit could be:', { salary, taxes, profit });
    }, 10000)
}
getMySalary.call(latvia);

