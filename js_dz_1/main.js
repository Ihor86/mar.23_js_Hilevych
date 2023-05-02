// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let a1 = 'hello';
let b1 = 'owu';
let c1 = 'com';
let d = 'ua';
let x = 1;
let y = 10;
let xx = -999;
let yy = 123;
const PI = 3.14;
let zz = 2.7;
 let zzz = 16;
 let bool1 = true;
 let bool2 = false;

console.log(a1);
console.log(b1);
console.log(c1);
console.log(d);
console.log(x);
console.log(y);
console.log(xx);
console.log(yy);
console.log(PI);
console.log(zz);
console.log(zzz);
console.log(bool1);
console.log(bool2);

// task 2
let firstName = `Ihor`;
let middleName = `Yaroslavovych`;
let lastName = `Hilevych`;
let person = firstName + ` ` + middleName + ` ` + lastName;
console.log(person);

// task 3
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Task 4

let firstName1 = prompt(`Як тебе звати?`);
let lastNam1 = prompt(`Вкажи своє прізвище`);
let age = +prompt(`Твій вік?`);
console.log('Мене звати ' + firstName1 + " " + lastNam1 + ", мені " + age + ` рр.`);
