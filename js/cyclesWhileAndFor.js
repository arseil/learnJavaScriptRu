// task#1

/* 
Последнее значение цикла
важность: 3
Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
  alert( i-- );
}
*/

/* let i = 3;

while (i) {
  alert( i-- ); // 1
} */

// task#2


/*
 Какие значения выведет цикл while?
важность: 4
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Оба цикла выводят alert с одинаковыми значениями или нет?

Префиксный вариант ++i:

let i = 0;
while (++i < 5) alert( i );
Постфиксный вариант i++

let i = 0;
while (i++ < 5) alert( i ); 
*/


// Префиксный вариант ++i:

/* let i = 0;
while (++i < 5) alert( i ); //4 */

// Постфиксный вариант i++

/* let i = 0;
while (i++ < 5) alert( i ); //5 */



// task#3

/* 
Какие значения выведет цикл for?
важность: 4
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Оба цикла выведут alert с одинаковыми значениями или нет?

Постфиксная форма:

for (let i = 0; i < 5; i++) alert( i );
Префиксная форма:

for (let i = 0; i < 5; ++i) alert( i ); 
*/


// Постфиксная форма:
/* for (let i = 0; i < 5; i++) alert( i ); //4

// Префиксная форма:
for (let i = 0; i < 5; ++i) alert( i ); //4 */



// task#4

/* 
Выведите чётные числа
важность: 5
При помощи цикла for выведите чётные числа от 2 до 10. 
*/

/* for (i = 2; i <= 10; i++) {
  if (i % 2 == 0) console.log(i);
} */


// task#5

/* 
Замените for на while
важность: 5
Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
} 
*/

/* for (let i = 0; i < 3; i++) {
  console.log( `number ${i}!` );
} 

let i = 0;
while (i < 3) {
	console.log(	`number ${i}!` );
	i++;
} */


// task#6

/* 
Повторять цикл, пока ввод неверен
важность: 5
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно. 
*/

let question;
do {
	question = prompt("ввудите число больше 100", 0);
} while (question && question <= 100);



// task#7

/* 
Вывести простые числа
важность: 3
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов. 
*/
let n;
for (let n = 10; n > 1; n--) {
	if (n % n == 0 && n % 1 == n) continue;
	result = n;
}
console.log(typeof n)
console.log(result);

let n = 10;

nextPrime: 
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log( i ); // простое число
}

for (let i = 0; i <= 100; i++) {
	if (i % 2 !== 0) console.log(i);
}

for (let i = 1; i < 10; i++) {
	if (i % 2 == 0) continue;
	console.log(i)
}

let str = '';
for (let i = 0; i <= 10; i++) {
	for (let j = 10; j > i; j--) {
		let n = j - i;
		str += " ".repeat(n);
		console.log(n);
	}
	for (let k = 0; k < i; k++) {
		str += "1".repeat(k);
	}
	str += "\n";
}

console.log(str);

let str = '';
for (let i = 1; i < 7; i++) {
	for (let j = 0; j < i; j++) {
		str += "*";
	}
	str += "\n"
}
console.log(str);


loop: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) break loop;
			console.log(`Third level: ${k}`);
		}
	}
}

let i = 2;

while (i <= 16) {
	if (i % 2 === 0) {
		i++;
		continue;
	} else {
		console.log(i);
	}
	i++;
}

function fifthTask() {
	const arrayOfNumbers = [];

	// Пишем решение вот тут
	for (let i = 5; i <= 10; i++) {
		arrayOfNumbers[i - 5] = i;
	}
	
	// Не трогаем
	return arrayOfNumbers;
}
console.log(fifthTask());


function firstTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];

	// Пишем решение вот тут
	for (let i = 0; i <= arr.length; i++) {
		result[i] = arr[i];
	}
	
	// Не трогаем
	console.log(arr);
}


function secondTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const data = [5, 10, 'Shopping', 20, 'Homework'];

	// Пишем решение вот тут
	for (let i = 0; i < data.length; i++) {
		if (typeof (data[i]) === "string") {
			data[i] += " - done";
		} else {
			data[i] = data[i] * 2;
		}
		}	
	
	// Не трогаем
	console.log(data);
}

function thirdTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];

	// Пишем решение вот тут
	for (let i = 1; i <= arr.length; i++) {
		result[i - 1] = arr[arr.length - i];
	}
	console.log(result);
}


const lines = 10;
let result = '';
for (let i = 0; i <= lines; i++) {
	for (let j = lines - i; j >= 1; j--) {
		result += " ";
	}
	for (let k = 0; k <= i; k++) {
		result += "*";
		for (let l = 1; l <= k; l++) {
			if (l === 2) break;
			result += "*";
		}
	}
	result += "\n";
}
console.log(result);