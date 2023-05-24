// 1. Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
console.log(`Task 1`);
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, `Albatros`, `Bayden`, `bayden.a@gmail.com`, 380960567234);
let user2 = new User(12, `Alf`, `Bayden`, `bayden.alf@gmail.com`, 380960723564);
let user3 = new User(33, `Alfred`, `Bayden-Old`, `bayden-old.a@gmail.com`, 380926056734);
let user4 = new User(14, `Alfons`, `Bayden-Shramko`, `bayden-shramko.a@gmail.com`, 380966723054);
let user5 = new User(52, `Albion`, `Bay-Bay`, `baybay.a@gmail.com`, 380960345672);
let user6 = new User(26, `Albakerka`, `Baydensito`, `baydensito.a@gmail.com`, 380960523467);
let user7 = new User(37, `Albatros Junior`, `Baydenko`, `baydenko.a@gmail.com`, 380960723564);
let user8 = new User(18, `Alba`, `Baydun`, `baydun.a@gmail.com`, 380960562347);
let user9 = new User(9, `Albatrosito`, `Bayburezhma`, `bayburezhma.a@gmail.com`, 380960567234);
let user10 = new User(13, `Albatrosohly`, `Baybur`, `baybur.a@gmail.com`, 380956723460);
let userArr = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(userArr);

// 2. Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(`Task 2`);
let filter = userArr.filter(user => user.id % 2 === 0);
console.log(filter);

// 3. Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(`Task 3`);
let sortUsers = userArr.sort((a, b) => a.id - b.id);
console.log(sortUsers);
// 4. створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
console.log(`Task 4`);
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientArr = [];
clientArr[0] = new Client(1, `Petro`, `Kuk`, `kuk@gmail.com`, 380960650987, [`bred`, `cola`, `salt`]);
clientArr[1] = new Client(2, `Max`, `Otor`, `otor@gmail.com`, 380987654334, [`milk`]);
clientArr[2] = new Client(3, `Stakh`, `Panko`, `panro@gmail.com`, 380976584334, [`butter`, `sugar`]);
clientArr[3] = new Client(4, `Leon`, `Killer`, `killer@gmail.com`, 380986666666, [`desk`, `pepsi`, `coffee`]);
clientArr[4] = new Client(5, `Misko`, `Barbara`, `barbara@gmail.com`, 380986235666, [`trousers`, `shirt`, `pen`, `pencil`]);
clientArr[5] = new Client(6, `Petruchio`, `Makron`, `makron@gmail.com`, 380960650987, [`bred`, `cola`, `salt`]);
clientArr[6] = new Client(7, `Max`, `Otor`, `otor@gmail.com`, 380987654334, [`pen`, `pencil`]);
clientArr[7] = new Client(8, `Stakh`, `Panko`, `pan@gmail.com`, 380976245534, [`butter`, `sugar`]);
clientArr[8] = new Client(9, `Levko`, `Kil`, `kil@gmail.com`, 380986662346, [`sugar`, `pepsi`]);
clientArr[9] = new Client(10, `Marusyna`, `Barby`, `barby@gmail.com`, 380986235546, [`hat`, `shirt`, `cola`, `salt`]);
console.log(clientArr);
// 5. Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(`Task 5`);
let clientArrSort = clientArr.sort((a, b) => a.order.length - b.order.length);
console.log(clientArrSort);




// 6. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

console.log(`Task 6`);

function Car(model, developer, year, speed, power) {
    this.model = model;
    this.developer = developer;
    this.year = year;
    this.speed = speed;
    this.power = power;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${speed} на годину`);
    };
    this.info = function () {
        console.log(`model - ${this.model}, developer - ${this.developer}, year - ${this.year}, speed - ${this.speed}, power - ${this.power}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.speed = newSpeed;
        console.log(this.speed);
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(this.year);
    };
    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(this.driver);
    }
}

let car1 = new Car(`A 6`, `Mazda`, 2015, 220, 2000);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(300);
car1.changeYear(2019);
car1.addDriver({name: `Mykola`, age: 38, experience: 10});

// 7. (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log(`Task 7`);
class BigCar {
    constructor(model, developer, year, speed, power) {
        this.model = model;
        this.developer = developer;
        this.year = year;
        this.speed = speed;
        this.power = power;
    };
    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    };
    info() {
        console.log(`model - ${this.model}, developer - ${this.developer}, year - ${this.year}, speed - ${this.speed}, power - ${this.power}`);
    };
    increaseMaxSpeed(newSpeed) {
        this.speed = newSpeed;
        console.log(this.speed);
    };
    changeYear(newValue) {
        this.year = newValue;
        console.log(this.year);
    };
    addDriver(driver) {
        this.driver = driver;
        console.log(this.driver);
    }
}

let car21 = new BigCar(`X5`, `BMW`, 2019, 200, 2000);
car21.drive();
car21.info();
car21.increaseMaxSpeed(300);
car21.changeYear(2021);
car21.addDriver({name: `Tolyan`, age: 35, experience: 15});

// 8. створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
console.log(`Task 8`);
class Popelyushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let popelyushka1 = new Popelyushka(`Marya`, 17, 35);
let popelyushka2 = new Popelyushka(`Marusyna`, 15, 37);
let popelyushka3 = new Popelyushka(`Olya`, 18, 39);
let popelyushka4 = new Popelyushka(`Natalya`, 17, 38);
let popelyushka5 = new Popelyushka(`Olexanda`, 18, 36);
let popelyushka6 = new Popelyushka(`Nelya`, 16, 35);
let popelyushka7 = new Popelyushka(`Tanya`, 20, 37);
let popelyushka8 = new Popelyushka(`Bella`, 18, 38);
let popelyushka9 = new Popelyushka(`Beatrix`, 19, 37);
let popelyushka10 = new Popelyushka(`Sasha`, 17, 40);
let popelyushkyArr = [popelyushka1, popelyushka2, popelyushka3, popelyushka4, popelyushka5, popelyushka6, popelyushka7, popelyushka8, popelyushka9, popelyushka10];
console.log(popelyushkyArr);
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Prince {
    constructor(name, age, findShose) {
        this.name = name;
        this.age = age;
        this.findShose = findShose;
    }
}

let prince = new Prince(`Petruchio`, 29, 36);
console.log(prince);

let para = (popelyushkyArr, prince) => {
    for (let person of popelyushkyArr) {
        if (person.footSize === prince.findShose) {
            return `Нарешті ми знайшли попелюшку!! Це - ${person.name}`;
        }
    }
};
let ourPara = para(popelyushkyArr,prince);
console.log(ourPara);

let findPopelyushka = popelyushkyArr.find((person) => person.footSize === prince.findShose);
console.log(findPopelyushka);
