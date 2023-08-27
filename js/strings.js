// task#1

/* 
Сделать первый символ заглавным
важность: 5
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася"; 
*/

function ucFirst(str) {
    if (str == '') return str;
    let pos = str.at(0);
    return pos.toUpperCase() + str.slice(1, );
  }
console.log(ucFirst('вася'));

// task#2

/* 
Проверка на спам
важность: 5
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false 
*/

function checkSpam(str) {
    if (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')) {
        return true;
    } else {
        return false;
    }
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));


// task#3

/* 
Усечение строки
важность: 5
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!" 
*/

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return `${str.slice(0, maxlength - 1)}…`;
    } else {
        return str;
    }
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

// task#4

/* 
Выделить число
важность: 4
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:

alert( extractCurrencyValue('$120') === 120 ); // true 
*/

function extractCurrencyValue(str) {
    return parseInt(str.slice(1));
}

console.log(extractCurrencyValue('$120'))