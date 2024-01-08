"use strict"
// Практика JS коду.

/*
let someVar = 0;
++someVar;

if (someVar) {
  console.log(someVar);
}

const someCourse = 'FreelancerLifeStyle - це найкращі курси з верстки';
for (let i = 0; i < someCourse.length; ++i) {
console.log(someCourse[i]);
}

if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
	console.log('000');
}

const variableNumber = 10;
const checkNumber = 10;
const someArray = ['notebook', 'mouse', 5, false, 'keyboard', variableNumber];

if (someArray.includes(checkNumber)) {
  console.log(`Масив містить елемент ${checkNumber}`)
}
else if (!someArray.includes(checkNumber)) {
  console.log(`Масив не містить елемент ${checkNumber}`)
};


const result = 2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20";
console.log(result)

const result1 = false || false && true || false;
console.log(result1)

Практикував багато властивостей JS, але не всі зберігав.
*/

/*
Home Work #24 

//////////////////////////////////////////////////
Задача №1
Що потрапить в консоль?
  let someVar = 0;
  ++someVar;

  if (someVar) {
    console.log(someVar);
  }

Відповідь:
  У console.log ми побачимо - 1. 
  Крок 1 - створюємо змінну someVar та присвоюємо їй значення 0;
  Крок 2 - виконуємо інкремент, тобто додаємо одиницю змінній someVar;
  Крок 3 - виводимо значення в консоль. Якщо змінна someVar, то покажи в консолі значення someVar.


//////////////////////////////////////////////////
Задача №2
За допомогою циклу FOR виведіть в консоль 10 рядків:
Пункт №1
Пункт №2
і т.д.

Відповідь:
Вивів у консоль значення змінної за допомогою циклу for
  const someCourse = 'FreelancerLifeStyle - це найкращі курси з верстки';
  for (let i = 0; i < someCourse.length; ++i) {
  console.log(someCourse[i]);
}


//////////////////////////////////////////////////
Задача №3
Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
  console.log('000');
}
Відповідь:
Відповідь - false. Значення 000 у консолі не побачимо, оскільки умова не виконується. 
Крок 1 - (40 <= 10 || 15 < 5 && 10 <= "10" || 20 === "20"). Здійснюємо покрокові обрахунки виходячи з умови.
Крок 2 - (false || false && true || false). Здійснюємо покрокові обрахунки виходячи з попереднього обрахунку.
Крок 3 - (false || false || false). Здійснюємо покрокові обрахунки враховуючи, що операція з && має пріоритет і виконується першою.
Крок 4 - false. Оскільки всі 3 false логічне "або" показує загальний результат false.


//////////////////////////////////////////////////
Задача №4
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку

Відповідь: 
Створена функція відповідно до умов та виведено в консоль різні варіанти. 
function getResult(a, b) {
  let firstAction = a / b;
  if (b === 0) {
    return console.log('Error');
  } else if (isNaN(firstAction) || !isFinite(firstAction)) {
    return console.log('Error again');
  } else {
    return console.log(`Your result: ${firstAction}`);
  }
}
console.log(getResult(5, 5));  // Результат ділення: 1
console.log(getResult(5, 0));  // Error
console.log(getResult("abc", 2));  // Error again

Крок 1 - оголошуємо функцію;
Крок 2 - Оголошуємо змінну та здійснюємо обчислення операції;
Крок 3 - перевірка ділення на нуль;
Крок 4 - Перевірка на NaN або Infinity:
Крок 5 - Виведення результату в Console;
Крок 6 - Виклик функції та тестування з різними параметрами з подальшим оголошенням в Console.

//////////////////////////////////////////////////
Задача №5
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

Відповідь:
const variableNumber = 10;
const checkNumber = 10;
const someArray = ['notebook', 'mouse', 5, false, 'keyboard', variableNumber];

if (someArray.includes(checkNumber)) {
  console.log(`Масив містить елемент ${checkNumber}`)
}
else if (!someArray.includes(checkNumber)) {
  console.log(`Масив не містить елемент ${checkNumber}`)
};

Крок 1 - створюємо змінну з числом, як вказано в умові задачі;
Крок 2 - створюємо змінну з числом на яке перевіряємо, оскільки вони можуть бути різні;
Крок 3 - створюємо масив з необхідними елементами;
Крок 4 - робимо перевірку чи масив містить необхідне число (відповідно до змінної)
Крок 5 - відповідний результат виводимо у консоль;

Дякую за перевірку! 
*/

