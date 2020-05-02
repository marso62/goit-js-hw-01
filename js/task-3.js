'use strict';

console.log('Задание 1-3!');

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const password = prompt('Please enter a password');

if (password === null) {
  message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === password) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
