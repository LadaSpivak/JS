// ## Example 1 - Коллбек функції

// Напишіть наступні функції:

//   - `createProduct(obj, callback)` - приймає об'єкт товару без id, а також
// коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у
// властивість `id` та викликає коллбек передаючи йому створений об'єкт.
// - `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в
// консоль
// - `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює загальну
// вартість товару в консоль

// console.log(Date.now());
// function createProduct(product, callback) {
//   const newProductObj = {
//     id: Date.now(),
//     ...product,
//   };

//   callback(newProductObj);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(`Total price: ${product.price * product.quantity}`);
// }

// createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
// createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);
// ## Example 2 - Коллбек функції
//
// Додайте в об'єкт `account` методи `withdraw(amount, onSuccess, onError)` та
//   `deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а
// другий та третій - коллбеки.
//
//   Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або
// this.balance, і onSuccess в іншому випадку.
//
//   Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше
// або дорівнює нулю, і onSuccess в іншому випадку.
//
// const TRANSACTION_LIMIT = 1000;
//
// function handleError(message) {
//   console.log(`Error! ${message}`);
// }
//
// function handleSuccess(message) {
//   console.log(`Success! ${message}`);
// }
//
// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Amount balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more then 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Amount balance: ${this.balance}`);
//     }
//   }
// }
// //
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
//
// ## Example 3 - Коллбек функції
//
// Напишіть функцію `each(array, callback)`, яка першим параметром очікує
// масив, а другим - функцію, яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами якого будуть результати
// виклику коллбека.

// function each(numbersArr, callback) {
//   let newArr = [];
//   for (const number of numbersArr) {
//     newArr.push(callback(number));
//   }
//   return newArr;
// }
// function sqrtNumber(numberValue) {
//   return Math.sqrt(numberValue);
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (number) {
//     return number * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (numberValue) {
//     return Math.sqrt(numberValue);
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], sqrtNumber)
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );
//
// ## Example 4 - Стрілочні функції
//
// Виконайте рефакторинг коду першої задачі за допомогою стрілочних функцій.
//

// const createProduct = (product, callback) => {
//   const newProductObj = {
//     id: Date.now(),
//     ...product
//   }
//
//   callback(newProductObj);
// }
//
// const logProduct = product => {
//   console.log(product);
// }
//
// const logTotalPrice = product => {
//   console.log(`Total price: ${product.price * product.quantity}`);
// }
//
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
//
// ## Example 5 - Стрілочні функції
//
// Виконайте рефакторинг коду задачі 2 за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000;
//
// const handleError = (message) => {
//   console.log(`Error! ${message}`);
// }
//
// const handleSuccess = (message) => {
//   console.log(`Success! ${message}`);
// }
//
// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw: (amount, onSuccess, onError) => {
//     // cтрілкова функція не має свого this, тому для методів обʼєкту,
//     // де використовується this стрілкові функції писати не можна
//     // вся суть this в методах обʼєкту, мати контекст цього обʼєкту
//     // тому, якщо потрібен контекст this, стрілкові функції не використовуємо в методах обʼєкту
//     console.log(this)
//     // для отримання балансу, в даному випадку нам потрібно явно звертатися до обʼєкту account
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > account.balance) {
//       onError(`Amount can't exceed ${account.balance} credits`);
//     } else {
//       account.balance -= amount;
//       onSuccess(`Amount balance: ${account.balance}`);
//     }
//   },
//   deposit: (amount, onSuccess, onError) => {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more then 0 credits`);
//     } else {
//       account.balance += amount;
//       onSuccess(`Amount balance: ${account.balance}`);
//     }
//   }
// }
// //
// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//
//
// ## Example 6 - Інлайн стрілочні функції
//
// Виконайте рефакторинг коду задачі 3 за допомогою стрілочних функцій.

// const each = (numbersArr, callback) => {
//   let newArr = [];
//   for (const number of numbersArr) {
//     newArr.push(callback(number));
//   }
//   return newArr;
// }

// console.log(
//   each(
//     [64, 49, 36, 25, 16],
//     (number) => number * 2
//   ));
//
// console.log(
//   each(
//     [64, 49, 36, 25, 16],
//     (value) => value - 10,
// ));

// console.log(
//   each(
//     [64, 49, 36, 25, 16],
//     (numberValue) => Math.sqrt(numberValue)
//   ),
// );
// console.log(
//   each(
//     [1.5, 2.1, 16.4, 9.7, 11.3],
//     (value) => Math.ceil(value)
//   ),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3],
//     (value) => Math.floor(value)
//   ),
// );

//
//
// ## Example 7 - Метод forEach
//
// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
//
// const logItems = (items) => {
//   items.forEach((item, index) => {
//     console.log(`${index + 1} - ${item}`);
//   })
// }
//
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
//
// ## Example 8 - Метод forEach
//
// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
//
// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//
//   nameList.forEach((name, index) => {
//     console.log(`${name}: ${phoneList[index]}`);
//   })
// }
//
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
//
// ## Example 9 - Метод forEach
//
// Виконайте рефакторинг коду за допомогою методу `forEach` та стрілочні функції.
//
// const calсulateAverage = (...args) => {
//   let total = 0;

//   args.forEach((numberItem) => {
//     total += numberItem;
//   })

//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log(listWithId);

const listWithClass = document.querySelector('.menu');
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass);

