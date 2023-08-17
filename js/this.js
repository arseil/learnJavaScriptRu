// task#1

/* 
Использование "this" в литерале объекта
важность: 5
Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат? 
*/

function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
let user = makeUser();
  
// alert( user.ref.name ); // Каким будет результат? // ошибка

// task#2

/*
 Создайте калькулятор
важность: 5
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); 
*/

let calculator = {
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// task#3

/* 
Цепь вызовов
важность: 2
У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};
Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
Такой подход широко используется в библиотеках JavaScript. 
*/

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() { // показывает текущую ступеньку
      console.log( this.step );
      return this;
    }
  };

  ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0