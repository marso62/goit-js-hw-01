'use strict';

console.log('Задание 1-4!');

const credits = 23580;
const pricePerDroid = 3000;

const quantityOfGoods = prompt('Какое количество товара хотите преобрести?');

const num = Number(quantityOfGoods);
const totalPrice = pricePerDroid * num;

if (quantityOfGoods === null) {
  alert('Отменено пользователем!');
} else if (credits < totalPrice) {
  alert('Недостаточно средств на счету!');
} else {
  alert(
    `Вы купили ${num} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`,
  );
}
