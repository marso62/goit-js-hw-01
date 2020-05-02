'use strict';

console.log('Задание 1-6!');

let input;
let total = 0;

while (true) {
  input = +prompt('Ввести число: ', '');

  if (Number.isNaN(input) === true) {
    alert('Было введено не число, попробуйте еще раз!');
    continue;
  }

  if (!input) {
    alert(`Общая сумма чисел равна ${total}!`);
    break;
  }

  total += input;
}
