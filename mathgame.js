function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperator() {
    const operators = ["+", "-", "*", "/"];
    return operators[Math.floor(Math.random() * operators.length)];
}

function generateQuestion() {
    let num1 = getRandomNumber(1, 20);
    let num2 = getRandomNumber(1, 20);
    let operator = getRandomOperator();

    
    if (operator === "/") {
        num1 = num1 * num2; 
    }

    return {
        question: `${num1} ${operator} ${num2}`,
        correctAnswer: eval(`${num1} ${operator} ${num2}`)
    };
}

function mathGame() {
    const { question, correctAnswer } = generateQuestion();
    let userAnswer = prompt(`Решите задачу: ${question}`);

    if (userAnswer === null) {
        alert("Игра завершена.");
        return;
    }

    userAnswer = Number(userAnswer);

    if (isNaN(userAnswer)) {
        alert("Ошибка: введите числовое значение!");
    } else if (userAnswer === correctAnswer) {
        alert("Верно! Отличная работа!");
    } else {
        alert(`Неверно! Правильный ответ: ${correctAnswer}`);
    }
}

