
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

document.write(`Task 1`);
let textArr = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', `Corporis`, `cumque`, 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', `Corporis`, `cumque`, 'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', `Corporis`, `cumque`];
     for (i=0; i<10; i++) {
                document.write(`<div>${textArr[i]}</div>`);
     }
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`Task 2`);
for (i=0; i<10; i++) {
    document.write(`<div>${textArr[i]} - ${i}</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`Task 3`);

i3=0;
while (i3<20) {
    document.write(`<h1>${textArr[i3]}</h1>`);
    i3++;
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`Task 4</br>`);
i4=0;
while (i4<10) {
    document.write(`<h1>${textArr[i4]} - ${i4}</h1>`);
    i4++;
}


//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`Task 5 </br>`)
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
document.write(`</ul>`);
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон




let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
document.write(`Task 6 </br>`);
for (const product of products) {
    document.write(`<div class="product-card">
   <h3 class="product-title">${product.title}. Price - ${product.price}"</h3>
    <img src="${product.image}" alt="" class="product-image" style="width: 200px">
    </div>`);
}
//
// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
document.write(`Task 7 </br>`)
document.write(`Users with status "true"`);
for (let user of users) {
    if (user.status) {
        document.write(`<div>${user.name} ${user.age}</div>`);
    }
}
document.write(`Users with status "false"`);
for (let user of users) {
    if (user.status === false) {
        document.write(`<div>${user.name} ${user.age}</div>`);
    }
}
document.write(`Users older than 30 years`);
for (let user of users) {
    if (user.age > 30) {
        document.write(`<div>${user.name} ${user.age} ${user.status}</div>`);
    }
}

document.write(`Adsitional 1 _окреме </br>`);

// Є масив [2, 17, 13, 6, 22, 31, 45, 66, 100, -18]. Замінити кожне число кратне 3 на слово "okten"
let xxx = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < xxx.length; i++) {
    if (xxx[i] % 3 === 0) {
        xxx[i] = "okten";

    }
    document.write(`<div>${xxx[i]}</div>`)

}
// document.write(xxx);
