/*
//Задание 1
let str = 'js';
let upperStr = str.toUpperCase();

console.log(upperStr);

//Задание 2
function filterByPrefix(arr, prefix) {
    return arr.filter(word => word.toLowerCase().startsWith(prefix.toLowerCase()));
}


let words = ["Apple", "apricot", "banana", "Avocado", "berry"];
let prefix = "ap";
let result = filterByPrefix(words, prefix);

console.log(result);

//Задание 3
let num = 32.58884;

console.log(Math.floor(num)); 
console.log(Math.ceil(num));  
console.log(Math.round(num)); 

//Задание 4
let numbers = [52, 53, 49, 77, 21, 32];

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Минимальное значение:", min);
console.log("Максимальное значение:", max);

//Задание 5
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}

//Задание 6
function getRandomArray(num) {
    let length = Math.floor(num / 2); 
    let randomArray = [];

    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * (num + 1))); 
    }

    return randomArray;
}

console.log(getRandomArray(10)); 
console.log(getRandomArray(7));  

//Задание 7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(5, 10)); 
console.log(getRandomInRange(1, 100)); 

//Задание 8
console.log(new Date());

//Задание 9
let currentDate = new Date(); 
let futureDate = new Date(currentDate); 
futureDate.setDate(futureDate.getDate() + 73); 

console.log("Текущая дата:", currentDate.toLocaleDateString());
console.log("Дата через 73 дня:", futureDate.toLocaleDateString());

//Задание 10
function formatDate(date) {
    const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let weekDay = daysOfWeek[date.getDay()];
    
    let hours = String(date.getHours()).padStart(2, "0");
    let minutes = String(date.getMinutes()).padStart(2, "0");
    let seconds = String(date.getSeconds()).padStart(2, "0");

    return `Дата: ${day} ${month} ${year} — это ${weekDay}.
Время: ${hours}:${minutes}:${seconds}`;
}

let presentDate = new Date();
console.log(formatDate(presentDate));
*/