function reverseTextGame() {
    let userInput = prompt("Введите текст для переворота:");
    
    if (userInput !== null && userInput.trim() !== "") {
        let reversedText = userInput.split("").reverse().join("");
        alert("Перевернутый текст: " + reversedText);
    } else {
        alert("Вы не ввели текст!");
    }
}