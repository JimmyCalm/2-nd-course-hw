function startQuiz() {
    
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0; 

    
    for (let i = 0; i < quiz.length; i++) {
        let userAnswer = prompt(quiz[i].question + "\n" + quiz[i].options.join("\n"));

        
        if (userAnswer !== null && parseInt(userAnswer) === quiz[i].correctAnswer) {
            score++;
        }
    }

    
    alert(`Игра окончена! Вы правильно ответили на ${score} из ${quiz.length} вопросов.`);
}