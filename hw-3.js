//Задание 1
/*for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

//Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


//Задание 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание 4
let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов`);
}

//Задание 5
let n = 1000; 
let num = 0;  


while (n >= 50) {
    n = n / 2; 
    num++;     
}

console.log(`Итоговое число: ${n}`);
console.log(`Количество итераций: ${num}`);

//Задание 6
let firstFriday = 5; 

let currentFriday = firstFriday;

while (currentFriday <= 31) {
    console.log(`Сегодня пятница, ${currentFriday}-е число. Необходимо подготовить отчет.`);
    currentFriday += 7; 
}

//Доп задание 1
let k = 100; 
let iterations = 0; 


while (k >= 0) {
    k -= 7; 
    iterations++; 
}

console.log(`Итоговое число: ${k}`);
console.log(`Количество итераций: ${iterations}`);

//Доп задание 2

const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

for (let i = 0; i < months.length; i++) {
    console.log(`${i + 1}. ${months[i]}`);
}

//Доп задание 3
const book = {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    genre: "Антиутопия"
};

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

//Доп задание 4
const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));


const minNumber = Math.min(...numbers);

console.log("Массив чисел:", numbers);
console.log("Минимальное число:", minNumber);*/