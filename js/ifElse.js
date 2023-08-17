// task#1

/* 
    if (строка с нулём)
    важность: 5
    Выведется ли alert?

    if ("0") {
    alert( 'Привет' );
    } 
*/

if ("0") {
    alert( 'Привет' );
} 

// task #2

/* 
Название JavaScript
важность: 2
Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» 
*/

let question = prompt("Какое «официальное» название JavaScript?");

if (question == "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}

// task#3

/* 
Покажите знак числа
важность: 2
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа. 
*/

let value = +prompt("Number", 0);

if (value > 0) {
    alert("1");
} else if (value < 0){
    alert("-1");
} else {
    alert("0");
}

// task#4

/* 
Перепишите 'if' в '?'
важность: 5
Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
} 
*/

let result = (a + b < 4) ? 'Мало' : 'Много';

// task#5

/* 
Перепишите 'if..else' в '?'
важность: 5
Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
} 
*/

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' : 
    '';