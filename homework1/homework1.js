'use strict';

const mouse = 15.678;
const pcDisplay = 123.965;
const wifiRouter = 90.2345;

const maxValue = Math.max(mouse, pcDisplay, wifiRouter);

const minValue = Math.min(mouse, pcDisplay, wifiRouter);

const sum = mouse + pcDisplay + wifiRouter;
console.log(sum);

const roundedSum = Math.floor(mouse) + Math.floor(pcDisplay) + Math.floor(wifiRouter);
console.log(roundedSum);

const roundedSumHundred = function (roundedSum) {
    return Math.ceil(roundedSum / 100) * 100;
};
console.log(roundedSumHundred(roundedSum));

console.log(Boolean.apply(roundedSum)); //I`m not sure if it`s a right answer
const ifWhichDigit = roundedSum % 2 ? 'Сумма являеться парным числом' : 'Сумма являеться непарным числом';

const rest = 500 - sum;
console.log(rest);

const avgPrices = sum / 3;
console.log(avgPrices.toFixed(2));

const bill = sum + (sum * Math.random());
console.log(bill.toFixed(2));

const netProfit = (sum / 2) - Math.random() * sum;
console.log(netProfit.toFixed(2));

//Advanced

console.log(`Максимальная цена: ${maxValue};
Минимальная цена: ${minValue};
Стоимость всех товаров: ${sum};
Стоимость всех товаров по минимальной цене: ${roundedSum};
Стоимость всех товаров округленная до сотен: ${roundedSumHundred(roundedSum)};
Являеться ли сума всех товаров парным числом - ${ifWhichDigit};
Сдача ${rest};
Среднее значение цен: ${Number(avgPrices.toFixed(2))};
Cчет после скидки: ${Number(bill.toFixed(2))};
Чистая прибыль предприятия: ${Number(netProfit.toFixed(2))}.
`)
