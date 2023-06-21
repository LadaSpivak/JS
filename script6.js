// # Модуль 3 Заняття 6. Деструктуризація та rest/spread
//
// ## Example 1 - Деструктуризація
//
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.
//
// const params = {
//   weight: 10,
//   height: 20,
// };

// calcBMI(params);
// function calcBMI({ weight, height }) {
//   // console.log(params);
//   // const { weight, height } = params;
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// ## Example 2 - Деструктуризація
//
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.
//
// function printContactsInfo(props) {
//   const { names, phones } = props;
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ## Example 3 - Глибока деструктуризація
//
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.
//
// function getBotReport(props) {
//   const { companyName, bots: { repair: repairBots, defence: defenceBots }} = props;
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }
// //
// // Раніше було так
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));
//
// // Очікується
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"

// ## Example 4 - Деструктуризація
//
// Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями
//   `companyName` та `stock` та виводила репорт про кількість товарів на складі будь-якої
// компанії.
//

// function getStockReport(props) {
//   const { companyName, stock } = props;
//   let sum = 0;
//   for (const stockValue of Object.values(stock)) { // масив чисел
//     sum += stockValue;
//   }
//   return `${companyName} has ${sum} items in stock!`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"
// ## Example 5 - Операція spread
//
// Доповни функцію `createContact(partialContact)` так, щоб вона повертала новий
// об'єкт контакту з доданими властивостями `id` та `createdAt`, а також `list` зі
// значенням "default" якщо в `partialContact` немає такої властивості.
//

// let contactId = 0;
// function createContact(props) {
//   contactId += 1;
//
//   return {
//     list: 'default',
//     ...props,
//     id: contactId,
//     createdAt: Date.now(),
//   }
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );
//
