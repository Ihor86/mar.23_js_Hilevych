// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr1 = [123, 234, `tree`, false, `Klinton`, `Yulya`, `Dynamo`, `Shakhta`, 1961, 1991];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: `History of Ukraine`,
    pageCount: 235,
    genre: 'scientific monograph'
}
console.log(book1);
let book2 = {
    title: `Kaydash family`,
    pageCount: 456,
    genre: `novel`
}
console.log(book2);
let book3 = {
    title: `Сто років самотності`,
    pageCount: 321,
    genre: `novel`
}
console.log(book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: `History of Ukraine`,
    pageCount: 235,
    genre: 'scientific monograph',
    outhers: [{
        name: `Andriy Karpenko`,
        age: 32
    }, {
        name: `Petro Bilyakovskyy`,
        age: 36
    }]
}
console.log(book4);
let book5 = {
    title: `Theory of migrathion proceses`,
    pageCount: 234,
    genre: `scientific monography`,
    outhers: [{name: `Petro Chorniy`, age: 38}, {name: `Tamara Patsay`, age: 40}]
}
console.log(book5);
let book6 = {
    title: `Smert moskalyam`,
    pageCount: 132,
    genre: `scientific monography`,
    outhers: [{name:`Petro Chornobay`, age: 32}, {name: `Onufriy Lopata`, age: 43}]
}
console.log(book6);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: `Petro`,
        username: `Hutsul`,
        password: `1678Rakhiv`
    },
    {
        name: `Mykola`,
        username: `Boyko`,
        password: `1811Ignat`
    },
    {
        name: `Markiyan`,
        username: `Shashkevych`,
        password: `18111843`
    },
    {
        name: `Mykola`,
        username: `Kostomar`,
        password: `1847`
    },
    {
        name: `Taras`,
        username: `Sheva`,
        password: `18141861`
    },
    {
        name: `Mykola`,
        username: `Mikhnovskyy`,
        password: `Samoctiyna1900`
    },
    {
        name: `Taras`,
        username: `Chuprynka`,
        password: `19091950`
    },
    {
        name:`Levko`,
        username: `Chernihivskyy`,
        password: `1961URSS`
    },
    {
        name: `Vasyl`,
        username: `Kravchenko`,
        password: `TDV`
    },
    {
        name: `Ivan`,
        username: `Binkovskyy`,
        password: `KS1907`
    }
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
//
//
//
//
