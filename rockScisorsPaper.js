function rspGame() {
    const choices = ["камень", "ножницы", "бумага"];

    let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();
    
    if (!choices.includes(userChoice)) {
        alert("Некорректный ввод! Пожалуйста, выберите: камень, ножницы или бумага.");
        return;
    }

    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    
    alert(`Ваш выбор: ${userChoice}
Выбор компьютера: ${computerChoice}
Результат: ${result}`);
}