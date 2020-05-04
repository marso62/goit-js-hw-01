'use strict';

console.log('Задание 1-6!');

let input;
let total = 0;
// let stop = true;

// while (stop) {
while (input !== null) {
  input = prompt('Ввести число: ', '');
  const inputNumb = +input;

  if (Number.isNaN(inputNumb)) {
    alert('Было введено не число, попробуйте еще раз!');
    continue;
  }

  if (input === null) {
    alert(`Общая сумма чисел равна ${total}!`);
    break;
  }

  total += inputNumb;
}

// setTimeout(()=>stop = false, 1000);
