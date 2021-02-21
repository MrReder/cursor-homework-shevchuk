'use strict';

const mousePrice = 15.678;
const pcDisplayPrice = 123.965;
const wifiRouterPrice = 90.2345;

const maxValue = Math.max(mousePrice, pcDisplayPrice, wifiRouterPrice);

const minValue = Math.min(mousePrice, pcDisplayPrice, wifiRouterPrice);

const sumPrices = mousePrice + pcDisplayPrice + wifiRouterPrice;
console.log(sumPrices);

const roundedSumPrices = Math.floor(mousePrice) + Math.floor(pcDisplayPrice) + Math.floor(wifiRouterPrice);
console.log(roundedSumPrices);

const roundedSumHundred = function (roundedSumPrices) {
    return Math.ceil(roundedSumPrices / 100) * 100;
};
console.log(roundedSumHundred(roundedSumPrices));

console.log(Boolean.apply(roundedSumPrices)); //I`m not sure if it`s a right answer
const ifWhichDigit = roundedSumPrices % 2 ? 'Сумма являеться парным числом' : 'Сумма являеться непарным числом';

const clientsMoney = 500;
const rest = clientsMoney - sumPrices;
console.log(rest);

const avgPrices = sumPrices / 3;
console.log(avgPrices.toFixed(2));
const discount = sumPrices * Math.random();
const bill = sumPrices - discount;
console.log(bill.toFixed(2));

const netProfit = (sumPrices / 2) - discount;
console.log(netProfit.toFixed(2));

//Advanced

console.log(`Максимальная цена: ${maxValue};
Минимальная цена: ${minValue};
Стоимость всех товаров: ${sumPrices};
Стоимость всех товаров по минимальной цене: ${roundedSumPrices};
Стоимость всех товаров округленная до сотен: ${roundedSumHundred(roundedSumPrices)};
Являеться ли сума всех товаров парным числом - ${ifWhichDigit};
Сдача ${rest};
Среднее значение цен: ${Number(avgPrices.toFixed(2))};
Cчет после скидки: ${Number(bill.toFixed(2))};
Чистая прибыль предприятия: ${Number(netProfit.toFixed(2))}.
`)
