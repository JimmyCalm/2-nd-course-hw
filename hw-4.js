//Задание 1
function min(a, b) {
    return a < b ? a : b;
}

console.log(min(8, 4));
console.log(min(6, 6));
console.log(min(10, 15)); 
console.log(min(-5, 3)); 

//Задание 2
function checkEvenOdd(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7)); 
console.log(checkEvenOdd(0)); 
console.log(checkEvenOdd(-3)); 

//Задание 3
function printSquare(n) {
    console.log(n * n);
}

function getSquare(n) {
    return n * n;
}

printSquare(5); 

let result = getSquare(6);
console.log(result); 

//Задание 4
function checkAge() {
    let age = prompt("Сколько вам лет?");
    age = Number(age); 

    if (isNaN(age)) {
        alert("Вы ввели не число!");
    } else if (age < 0) {
        alert("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) {
        alert("Привет, друг!");
    } else {
        alert("Добро пожаловать!");
    }
}

checkAge();

//Задание 5
function multiplyNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    }

    return a * b;
}

//Задание 6
function cubeNumber() {
    let input = prompt("Введите число:");

    if (isNaN(input)) {
        return 'Переданный параметр не является числом';
    }

    let n = Number(input);

    return `${n} в кубе равняется ${Math.pow(n, 3)}`;
}


for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));  
}

//Задание 7

const circle1 = {
    radius: 5,
    
    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },
    
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};


const circle2 = {
    radius: 10,
    
    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },
    
    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(`Площадь круга 1: ${circle1.getArea()}`);
console.log(`Периметр круга 1: ${circle1.getPerimeter()}`);

console.log(`Площадь круга 2: ${circle2.getArea()}`);
console.log(`Периметр круга 2: ${circle2.getPerimeter()}`);
