// # Модуль 1. Заняття 1. Змінні, типи та оператори

// ## Example 1 - Математичні оператори

// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 300;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// ## Example 2 - Комбіновані оператори

// Заміни вираз перевизначення комбінованим оператором `+=`.

// let students = 100;
// // students = students + 50;
// students += 50;
// console.log(students);

// ## Example 3 - Пріоритет операторів

// Розбери пріоритет операторів в інструкції привласнення значення змінної `result`.

// const result = 10 + 20 - 2 * 5;
// console.log(result);//20

//## Example 4 - Клас Math

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення
// змінної `value`. Використовуй методи `Math.floor()`, `Math.ceil()` та
//   `Math.round()`. Перевір що буде в консолі при значеннях `27.3` та `27.9`.

// const value = 27.3;
// console.log(Math.floor(value)); //27
// console.log(Math.ceil(value)); //28
// console.log(Math.round(value)); //27

// const count = 27.9;
// console.log(Math.floor(count)); //27
// console.log(Math.ceil(count)); //28
// console.log(Math.round(count)); //28

// ## Example 5 - Шаблонні рядки

// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// //const message = `${companyName} has ${repairBots + defenceBots} bots in stock `; - інтерполяція
// const message =
//   companyName + " has " + (repairBots + defenceBots) + " bots in stock"; - конкатенація
// console.log(message);

//Example 6 - Методи рядків та чейнінг(одні методи вставляємо в інші методи)

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього
// необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
//
//   Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в
// вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді
//   `24.7` або `24,7`, тобто як роздільник дробової частини може бути
// кома.
//
//   Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = "88,3";
// let height = "1.75";
// const newWeight = Number(weight.replace(",", "."));
// const newHeight = Math.pow(height, 2);
// console.log(newHeight);
// console.log(newWeight);
// const bmi = newWeight / newHeight;
// console.log(bmi.toFixed(1));

// ## Example 7 - Оператори порівняння та приведення типів
//
// Яким буде результат виразів?

// console.log(5 > 4); //t

// console.log(10 >= "7"); // t

// console.log("2" > "12"); //t

// console.log("2".charCodeAt(0))
// console.log('12'.charCodeAt(0))

// console.log("2" < "12"); //f

// console.log("4" == 4); //t

// console.log("6" === 6); //f

// console.log("false" === false); // f;

// console.log(1 == true); //t

// console.log(1 === true); //f

// console.log("0" == false); //t

// console.log("0" === false); //f різний тип даних

// console.log("Papaya" < "papaya"); //t маленька літера завжди буде більша за велику

// console.log("Papaya" === "papaya"); //f

// console.log(undefined == null); //t

// console.log(undefined === null); //f тому що різні типи даних

// ## Example 8 - Логічні оператори

// Яким буде результат виразів?

// console.log(true && 3); //3

// console.log(false && 3); //false

// console.log(true && 4 && "kiwi"); //kiwi
// console.log(true && 0 && "kiwi"); //0

// console.log(true || 3); //true

// console.log(true || 3 || 4); //true

// console.log(true || false || 7); //true

// console.log(null || 2 || undefined); //2

// console.log((1 && null && 2) > 0); // false

// console.log(null || (2 && 3) || 4); //3

// ## Example 9 - Значення за замовчуванням та оператор нульового злиття

// Отрефактори код так, щоб у змінну `value` присвоювалося значення
// змінної `incomingValue`, якщо воно не рівне `undefined` або `null`. В
// іншому випадку має присвоюватися значення `defaultValue`. Перевір роботу
// скрипта для наступних значень змінної `incomingValue`: null, undefined, 0,
//   false. Використовуй оператор `??` (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// ## Example 10 - Оператор % та методи рядків
//
// Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в
// рядок у форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// const totalMinutes = 70;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);
// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
