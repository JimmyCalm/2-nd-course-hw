const guessNumberGame = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guess;

    while (guess !== randomNumber) {
        guess = parseInt(prompt("Угадай число от 1 до 100:"), 10);

        if (isNaN(guess)) {
            alert("Пожалуйста, введите число.");
        } else if (guess < randomNumber) {
            alert("Загаданное число больше.");
        } else if (guess > randomNumber) {
            alert("Загаданное число меньше.");
        } else {
            alert("Поздравляю! Вы угадали число.");
        }
    }
};

document.getElementById("guess-number").addEventListener("click", guessNumberGame);
