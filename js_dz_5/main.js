// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// 1. створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log(`Task 1`);

let rectangleArea = (a, b) => a * b;

let rectangleArea1 = rectangleArea(4, 5);
console.log(rectangleArea1);
// 2. створити функцію яка обчислює та повертає площу кола з радіусом r
console.log(`Task 2`);

let circleArea = (r) => 3.14 * r ** 2;

let circleArea1 = circleArea(3);
console.log(circleArea1);
// 3. створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log(`Task 3`);

let cylinderArea = (r, h) => 2 * 3.14 * r ** 2 + 2 * 3.14 * r * h;

let cylinderArea1 = cylinderArea(8, 12);
console.log(cylinderArea1);
// 4. створити функцію яка приймає масив та виводить кожен його елемент
console.log(`Task 4`);

let arrayIteration = (arr) => {
    for (let temp of arr) {
        console.log(temp);
    }
}

let arr1 = [23, 'ewrewr', true, 2323, {name: 'Vasyl', age: 23, hobby: 'travelling'}, 234];
arrayIteration(arr1);
// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write(`Task 5`);

let someText = (text) => document.write(`<p>${text}</p>`);

someText(`Вечірнє сонце, дякую за день!</br> Вечірнє сонце, дякую за втому.</br> За тих лісів просвітлень Едем</br> і за волошку в житі золотому.`);

// 6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`Task 6`);

let ulFoo=(text)=> {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

ulFoo('Be carefull, please!!!');

// 7. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(`Task 7`);

let ulFoo2 = (text, n) => {
    document.write(`<ul>`);
    for (let i = 0; i <= n; i++) {
        document.write(`<li>${text}</li>`);
        // console.log(text);
    }
    document.write(`<ul>`);
}

ulFoo2('Голос твій, серце твоє...', 12);

// 8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
console.log(`Task 8`);

let fooArr8 = (arr) => {
    for (let temp of arr) {
        console.log(temp);
    }
}

fooArr8([23, 45, true, 'Kolya', false, 34]);

// 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
document.write(`Task 9`);

let person = (id, name, age)=> {
    document.write(`<div style="width: 250px; padding: 5px; border: 1px solid aqua; margin: 5px; box-sizing: border-box; color: red">`);
    document.write(`id: ${id}, name: ${name}, age: ${age}`);
    document.write(`</div>`);
}

person(1, 'Kolya', 45);
person(2, 'Hryak', 22);
person(3, 'Tuzyk', 29);



// - створити функцію яка повертає найменьше число з масиву
console.log(`Task 10`);

let minNum = (arr) => {

    let min = arr[0]

    for (i=1; i<arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    // return(min);
    console.log(min); //зробив, щоб повертало, але додаю  console.log, щоб було видно, що воно коректно працює
}
minNum([23, 43534, 345, 435, 1244]);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
console.log(`Task 11`);

let sumArr = (arr) => {
    let sum = arr[0]
    for (i=1; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    // return(sum);
    console.log(sum);
}
sumArr([23, 4354, 21, 867, 123]);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
console.log(`Task 12`);

let swap = (arr,index1,index2) => {
    let x = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
    console.log(arr);
}

swap([24, 56, 76, 98], 2, 3);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
console.log(`Task 13`);

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    if (currencyValues === "USD" || "EUR") {
        let sum = (sumUAH / exchangeCurrency);
        console.log(sum);
    } else {

        console.log(`валюта не обмінюється`)
    }


}
exchange(5000, `USD`, 40);
exchange(5000, `PlZ`, 40);
