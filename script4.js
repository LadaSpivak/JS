// # Модуль 2. Заняття 4. Функції
//
// ## Example 1 - Індекс маси тіла
//
// Напиши функцію `calcBMI(weight, height)` яка розраховує та повертає
// індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на
// квадрат висоти людини в метрах.
//
//   Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді
//   `24.7` або `24,7`, тобто як роздільник дробової частини
// може бути кома.
//
//   Індекс маси тіла необхідно округлити до однієї цифри після коми;

// function calcBMI(weight, height) {
//   const newWeight = Number(weight.replace(",", "."));
//   const newHeight = Number(height.replace(",", "."));

//   return (newWeight / Math.pow(newHeight, 2)).toFixed(1);
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

// ## Example 2 - Найменше з чисел
//
// Напиши функцію `min(a,b)`, яка повертає найменше з чисел `a` та `b`.
//
// function min(a, b) {
//   return Math.min(a, b);
// }
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// ## Example 3 - Площа прямокутника
//
// Напиши функцію `getRectArea(dimensions)` для обчислення площі прямокутника
// зі сторонами, значення яких будуть передані до параметра `dimensions` у вигляді
// рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//   const valuesArr = dimensions.split(" ");
//   const width = Number(valuesArr[0]);
//   const height = Number(valuesArr[1]);
//   return width * height;
// }
// console.log(getRectArea("8 11"));

// function getRectArea(dimensions) {
//   if (!dimensions) {
//     return "Error";
//   }

//   const valuesArr = dimensions.split(" ");
//   const width = Number(valuesArr[0]);
//   const height = Number(valuesArr[1]);

//   return width * height;
// }
// console.log(getRectArea("8 11"));
