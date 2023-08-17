// task#1

/* 
Что выведет alert (ИЛИ)?
важность: 5
Что выведет код ниже?

alert( null || 2 || undefined ); 
*/

alert( null || 2 || undefined ); // true

// task#2

/* 
Что выведет alert (ИЛИ)?
важность: 3
Что выведет код ниже?

alert( alert(1) || 2 || alert(3) ); 
*/

alert( alert(1) || 2 || alert(3) ); // 1,2

// task#3

/* 
Что выведет alert (И)?
важность: 5
Что выведет код ниже?

alert( 1 && null && 2 ); 
*/

alert( 1 && null && 2 ); // null

// task#4


/* 
Что выведет alert (И)?
важность: 3
Что выведет код ниже?

alert( alert(1) && alert(2) ); 
*/

alert( alert(1) && alert(2) ); // undefined

// task#5

/* 
Что выведет этот код?
важность: 5
Что выведет код ниже?

alert( null || 2 && 3 || 4 ); 
*/

alert( null || 2 && 3 || 4 ); // 3

// task#6


/* 
Проверка значения из диапазона
важность: 3
Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

«Включительно» означает, что значение переменной age может быть равно 14 или 90. 
*/

let age;

if (age >= 14 && age <= 90) {
    alert(age);
}

// task#7


/* 
Проверка значения вне диапазона
важность: 3
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора. 
*/

if (!(age >= 14 && age <= 90));
if (age <= 14 || age >= 90);


// task#8


/* 
Вопрос об "if"
важность: 5
Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); 
*/

if (-1 || 0) alert( 'first' ); //выполнится
if (-1 && 0) alert( 'second' ); // нет
if (null || -1 && 1) alert( 'third' ); // да


// task#9


let question = prompt("Кто там?", "");

if (question == "Админ") {

    let password = prompt("Пароль?", "");
    
    if (password == "Я Главный") {
        alert("Здравствуйте!");
    } else if (password == null || password == "") {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
} else if (question == null || question == "") {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}


// задачи из лекции тимофея хорьянова: алгебра логики

/* 
n > 0 = a
5 < n > 0 = b
10 < n > 5 = c
n > 10 = d 
*/

let n = +prompt("n?", "");

if (n < 0) {
    alert('a');
} else if (n > 0 && n < 5) {
    alert('b');
} else if (n > 5 && n < 10) {
    alert("c");
} else if (n >= 10) {
    alert("d");
} else {
    alert("error");
}



let m = +prompt("m?", "");

if (m < 0) {
    alert('a');
} else if (m < 5) { // m > 0
    alert('b');
} else if (m < 10) { // m > 5
    alert("c");
} else if (m >= 10) {
    alert("d");
} else {
    alert("error");
}



// определить четверьть оси координат

let x;
let y;

if (y > 0) {
    if (x > 0) {
        alert('I');
    } else {
        alert('II');
    }
} else {
    if (x < 0) {
        alert('III');
    } else {
        alert('IV');
    }
}


let a;
let b;

if (b > 0 && a > 0) alert('I');
if (b > 0 && a < 0) alert('II');
if (b < 0 && a < 0) alert('III');
if (b < 0 && a > 0) alert('IV');




console.log( NaN || 2 || undefined ); // 2


console.log( NaN && 2 && undefined ); // NaN


console.log( 1 && 2 && 3 ); // 3


console.log( !1 && 2 || !3 ); // false


console.log( 25 || null && !3 ); // 25


console.log( NaN || null || !3 || undefined || 5); // 5


console.log( NaN || null && !3 && undefined || 5); // 5


console.log( 5 === 5 && 3 > 1 || 5); // true



const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}
