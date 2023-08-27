// task#1

/* 
Сумма пользовательских чисел
важность: 5
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму. 
*/

function sum (a, b) {
    a = +prompt('Введите первое число', 0);
    b = +prompt('Введите второе число', 0);
    return +(a + b).toFixed(2);
}
// alert(sum());

// task#2

/* 
Почему 6.35.toFixed(1) == 6.3?
важность: 4
Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

Например:

alert( 1.35.toFixed(1) ); // 1.4
Но почему в примере ниже 6.35 округляется до 6.3?

alert( 6.35.toFixed(1) ); // 6.3
Как правильно округлить 6.35? 
*/

console.log( Math.round(6.35 * 10) / 10 );

// task#3

/* 
Ввод числового значения
важность: 5
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null. 
*/

function readNumber() {
    let value;
    
    do {
        value = prompt('Введите число', 0);
    } while (!isFinite(value));

    if (value === null || value === '') return value = null;
    return +value;
}
alert(`Число: ${readNumber()}`);

// task#4

/* 
Бесконечный цикл по ошибке
важность: 4
Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2;
}
*/

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log( i );
}


// task#5

/* 
Случайное число от min до max
важность: 2
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525 
*/

// function random(min, max) {
//     min = +prompt('min?', 0);
//     max = +prompt('max?', 0);
//     return Math.random() * (max - min) + min;
// }
// alert(random())

function random(min, max) {
    min = +prompt('min?', 0);
    max = +prompt('max?', 0);
    for (let i = Math.random() * (max - min); i < max; i++) {
        return i;
    }
}
// alert(random());

// task#6

/* 
Случайное целое число от min до max
важность: 2
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
Можно использовать решение из предыдущей задачи. 
*/

function randomInteger(min, max) {
    // min = +prompt('min?', 0);
    // max = +prompt('max?', 0);
    return Math.floor(min + Math.random() * (max + 1 - min));

}
console.log(randomInteger(1,3));