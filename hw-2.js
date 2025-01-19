//Задание 1
let password = 'пароль';
let userInput = prompt('Введите пароль:');


if (userInput === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//Задание 2
let c = 2; 


if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 3
let d = 120; 
let e = 80;  

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Задание 4
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//Задание 5
let monthNumber = 12; 


if (monthNumber < 1 || monthNumber > 12) {
    console.log('Некорректный номер месяца');
} else {
    
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
        default:
            console.log('Некорректный номер месяца');
    }
}

//Доп Задание 1
let input = prompt('Пожалуйста, введите любое число:');
let number = Number(input);


if (isNaN(number)) {
    alert('Вы ввели некорректное значение. Пожалуйста, введите число.');
} else {
    
    if (number % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}

//Доп Задание 2
let clientOS = 0; 

if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Неизвестная операционная система');
}

//Доп Задание 3
let clientOp = 0; 
let clientDeviceYear = 2015; 
let isLightVersion = clientDeviceYear < 2015;

if (clientOp === 0) {
    if (isLightVersion) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        console.log('Установите версию приложения для iOS по ссылке');
    }
} else if (clientOp === 1) {
    if (isLightVersion) {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    } else {
        console.log('Установите версию приложения для Android по ссылке');
    }
} else {
    console.log('Неизвестная операционная система');
}