// task#1

/* 
Обязателен ли "else"?
важность: 4
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Родители разрешили?');
  }
}
Будет ли эта функция работать как-то иначе, если убрать else?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}
Есть ли хоть одно отличие в поведении этого варианта? 
*/

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      console.log('Родители разрешили?');
    }
}
  
function checkAge(age) {
    if (age > 18) {
        return true;
    }
// ...
    console.log('Родители разрешили?');
}

// Оба варианта функций работают одинаково, отличий нет.

// task#2

/* 
Перепишите функцию, используя оператор '?' или '||'
важность: 4
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор || 
*/

function checkAge(age) {
    return (age > 18) ? true : console.log('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || console.log('Родители разрешили?');
}

// task#3

/* 
Функция min(a, b)
важность: 1
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1 
*/

function min(a, b) {
    return (a < b) ? console.log(a) : console.log(b);
}

min(2, 5);
min(3, -1);
min(1, 1);


// task#4

/* 
Функция pow(x,n)
важность: 4
Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

Запустить демо

P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше. 
*/

/* function pow(x, n) {
    return alert(x ** n);
}

pow(+prompt("x"), +prompt('n')); */

function calc(a, b) {
  if (a !== null && b !== "string") return alert('Ошибка');
  let action = prompt('Действие', '');
  if (action === "+") alert(a + b);
  if (action === "-") alert(a - b);
  if (action === "*") alert(a * b);
  if (action === "/") alert(a / b);
  if (action !== null && action !== "string") alert('Ошибка');
}
calc(+prompt('a', ''), +prompt('b', ''));



// З А М Ы К А Н И Е

let a = 3
function addTwo(x) {
  let ret = x + 2
  return ret
}
let b = addTwo(a)
console.log(b)


let val1 = 2
function multiplyThis(n) {
  let ret = n * val1
  return ret
}
let multiplied = multiplyThis(6)
console.log('example of scope:', multiplied)


let val = 7
function createAdder() {
  function addNumbers(a, b) {
    let ret = a + b
    return ret
  }
  return addNumbers
}
let adder = createAdder()
let sum = adder(val, 8)
console.log('example of function returning a function: ', sum)


function createCounter() {  // !!!
let counter = 0
const myFunction = function() {
    counter = counter + 1
    return counter
  }
  return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3) // !!!


let c = 4
function addX(x) {
  return function(n) {
     return n + x
  }
}
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d)