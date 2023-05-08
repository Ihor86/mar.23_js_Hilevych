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
console.log(arr1);
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
    outhers: [{name: `Petro Chornobay`, age: 32}, {name: `Onufriy Lopata`, age: 43}]
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
        name: `Levko`,
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
console.log(users[9][`password`]);
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = +prompt(`Введіть довільне число!`);
// if (x !== 0) {
//     console.log(`Вірно!!`);
// } else {
//     console.log('Невірно!');
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt(`Введіть число від 0 до 59`);
console.log(time);
if (time >= 0 && time<15) {
    console.log(`1 чверть`);
} else if ( time >= 15 && time < 30) {
    console.log(`2 чверть`);
} else if (time >= 30 && time < 45) {
    console.log(`3 чверть`);
} else if (time >= 45 && time < 60) {
    console.log(`4 чверть`);
} else {
    console.log(`введено некоректне число`);
}
//це саме можна писати без фігурних дужок:
let time2 = 34;
if (time2 >= 0 && time2<15) console.log(`1 чверть`)
else if ( time2 >= 15 && time2 < 30) console.log(`2 чверть`)
else if (time2 >= 30 && time2 < 45)  console.log(`3 чверть`)
else if (time2 >= 45 && time2 < 60)  console.log(`4 чверть`)
else console.log(`введено некоректне число`);


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 31;
if (day >= 1 && day <= 10) {
    console.log(day);
    console.log(`1 декада`);
} else if (day > 10 && day <=20) {
    console.log(`2 декада`);
} else if (day > 20 && day <=31) {
    console.log(`3 декада`);
} else {
    console.log(`некоректне число`);
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let day1 = +prompt(`введіть номер дня тижня!`);
switch (day1) {
    case 1:
        console.log(`sport`);
        break;
    case 2:
        console.log(`practise_20.00`);
        break;
    case 3:
        console.log(`kafe_18.00`);
        break;
    case 4:
        console.log(`meeting_20.30`);
        break;
    case 5:
        console.log(`visit parents`);
        break;
    case 6:
        console.log(`read book`);
        break;
    case 7:
        console.log(`meeting with friends`);
        break;
    default:
        console.log(`некоректне число`);
        // console.error("ERROR");
}



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//

let num1 = +prompt(`Введіть перше число`);
let num2 = +prompt(`Введіть друге число`);
if (num1===num2) {
    console.log(`числа рівні`);
} else if (num1 > num2) {
    console.log(`num1`);
} else {
    console.log(num2);
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x8;
if ( x8===0 || x8 === null ||  x8 === `` || x8 === undefined) { //!!x === false
x8 = "default";
}
    console.log(x8);
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title, `Супер!!!`);
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title, `Супер!!!`);
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title, `Супер!!!`);
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title, `Супер!!!`);
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title, `Супер!!!`);
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title, `Супер!!!`);
}



//
//
//
//
