function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const colorButton = document.getElementById('colorButton');


if (colorButton) {
    
    const mainElement = document.querySelector('main');

    
    colorButton.addEventListener('click', () => {
        
        const randomColor = getRandomColor();
        
        mainElement.style.backgroundColor = randomColor;
    });
} else {
    console.error('Кнопка colorButton не найдена!');
}
