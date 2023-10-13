// task#1

/* 
Создайте дату
важность: 5
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert. 
*/

let date = new Date(2012, 1, 20, 3, 12);
alert(date);

// task#2

/* 
Покажите день недели
важность: 5
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ" 
*/

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getWeekDay(date) {
    let weekDay = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    for (let item of weekDay) {
        if (weekDay.indexOf(item) == date.getDay()) return item;
    }
}

console.log( getWeekDay(date) );        // нужно вывести "ВТ"

// task#3

/* 
День недели в европейской нумерации
важность: 5
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2 
*/

function getLocalDay(date) {
    if (date.getDay() == 0) return 7;
    return date.getDay();
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2

// task#4

/* 
Какой день месяца был много дней назад?
важность: 4
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date. 
*/

function getDateAgo(date, days) {
    let daysAgo = new Date(date);
    daysAgo.setDate(date.getDate() - days);
    return daysAgo.getDate();
}

let date = new Date(2015, 0, 2);
let date2 = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
console.log( getDateAgo(date2, 100) ); // 24

// task#5

/* 
Последнее число месяца?
важность: 5
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль). 
*/

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate()
}
console.log(getLastDayOfMonth(2013, 1))

// task#6

/* 
Сколько сегодня прошло секунд?
важность: 5
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. 
*/

function getSecondsToday() {
    let date = new Date();
    return ( date.getHours() * 3600 ) + ( date.getMinutes() * 60 ) + date.getSeconds();
}

console.log(getSecondsToday());

// task#7

/* 
Сколько секунд осталось до завтра?
важность: 5
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. 
*/

function getSecondsToTomorrow() {
    let date = new Date();
    return (24 * 3600) - (( date.getHours() * 3600 ) + ( date.getMinutes() * 60 ) + date.getSeconds());
}

console.log(getSecondsToTomorrow());

// task#8

/* 
Форматирование относительной даты
важность: 4
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) ); 
*/

function formatDate(date) {
    let now = new Date();
    let dateDifference = (now - date) / 1000;
    let year = date.getFullYear().toString().slice(-2);
    let month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
    let dayOfMonth = date.getDate() < 10 ? '0' + (date.getDate() + 1) : date.getDate();
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  
    if (dateDifference <= 1) {
        return `прямо сейчас`;
    } else if (dateDifference <= 60) {
        return `${dateDifference} сек. назад`;
    } else if (dateDifference <= 60 * 60) {
        return `${dateDifference / 60} мин. назад`;
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
    }

}
console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );