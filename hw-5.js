//Задание 1
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
    if (arr[i] === 10) { 
        break; 
    }
}


//Задание 2
const arrB = [1, 5, 4, 10, 0, 3];
const index = arrB.indexOf(4); 

console.log(index); 

//Задание 3
const arrC = [1, 3, 5, 10, 20];
const result = arrC.join(' ');

console.log(result); 

//Задание 4
const size = 3; 
const multiArray = []; 


for (let i = 0; i < size; i++) {
    const row = []; 
    
    for (let j = 0; j < size; j++) {
        row.push(1); 
    }

    multiArray.push(row); 
}

console.log(multiArray); 

//Задание 5
let arrD = [1, 1, 1];
arrD.push(2, 2, 2);

console.log(arrD); 

//Задание 6
let arrF = [9, 8, 7, 'a', 6, 5];


arrF = arrF.filter(item => typeof item === 'number').sort((a, b) => a - b);

console.log(arrF); 

//Задание 7
let arrE = [9, 8, 7, 6, 5];

let userInput = prompt("Угадайте число из массива:");
let userNumber = Number(userInput); 

if (arrE.includes(userNumber)) {
    alert("Угадал!");
} else {
    alert("Не угадал!");
}

//Задание 8
let str = 'abcdef';

let reversedStr = str.split('').reverse().join('');

console.log(reversedStr);

//Задание 9
let arrJ = [[1, 2, 3], [4, 5, 6]];

let flatArr = arrJ.flat();

console.log(flatArr); 

//Задание 10
let arrK = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 1); 

for (let i = 0; i < arrK.length - 1; i++) {
    console.log(arrK[i] + arrK[i + 1]); 
}

console.log("Массив:", arrK); 

//Задание 11
function squareArray(arr) {
    return arr.map(num => num ** 2);
}


let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = squareArray(numbers);

console.log(squaredNumbers); 

//Задание 12
function getWordsLengths(arr) {
    return arr.map(word => word.length);
}

let words = ["apple", "banana", "cherry", "date"];
let wordLengths = getWordsLengths(words);

console.log(wordLengths); 

//Задание 13
function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}

let numbersA = [3, -1, 7, -4, 0, -9, 2];
let negativeNumbers = getNegativeNumbers(numbersA);

console.log(negativeNumbers);

//Задание 14
let arrL = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));


let evenNumbers = arrL.filter(num => num % 2 === 0);

console.log("Исходный массив:", arrL); 
console.log("Четные значения:", evenNumbers); 

//Задание 15
let arrM = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);


let average = arrM.reduce((sum, num) => sum + num, 0) / arrM.length;

console.log("Массив:", arrM); 
console.log("Среднее арифметическое:", average); 
