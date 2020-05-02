'use strict';

console.log('Задание 1-5!');

let enterCountry = prompt('Подскажите страну для доставки!');
let country;
let cost;
let message;

if (enterCountry === null) {
  message = 'Отменено пользователем!';
} else {
  country =
    enterCountry[0].toLocaleUpperCase() + enterCountry.slice(1).toLowerCase();

  switch (country) {
    case 'Китай':
      cost = 100;
      break;
    case 'Чили':
      cost = 250;
      break;
    case 'Австралия':
      cost = 170;
      break;
    case 'Индия':
      cost = 80;
      break;
    case 'Ямайка':
      cost = 120;
      break;
    default:
      message = 'В вашей стране доставка не доступна!';
      break;
  }
}

if (cost > 0) message = `Доставка в ${country} будет стоить ${cost} кредитов!`;

alert(message);
