const CANVAS = document.querySelector(".canvas");
const BUTTONS = document.querySelectorAll('button');
let sizeContainer = document.querySelector("#size-container");

let gridSize = 50;
let color = 'black';

sizeContainer.textContent = gridSize;

function populateCanvas(gridSize) {
    let pixels = CANVAS.querySelectorAll(".pixel");
    pixels.forEach((pixel) => pixel.remove());

    for( let i = 0; i < gridSize ** 2; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mouseover', colorPixel);
        pixel.style.backgroundColor = 'white';
        CANVAS.appendChild(pixel);
    }

    CANVAS.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    CANVAS.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
}

function modifySize() {

    gridSize = prompt('please enter a new grid size of not more than 100', 50);
    if(gridSize > 100 || gridSize === null) {
        gridSize = 50;
    }
    sizeContainer.textContent = gridSize;
    populateCanvas(gridSize);

}

function colorPixel() {
    if(color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;//special color math stackoverflow
    } else {
        this.style.backgroundColor = color; //every time a new pixel (this) is created
    }
}

function resetCanvas() {
    console.log('hi');
    let pixels = CANVAS.querySelectorAll('.pixel');
    pixels.forEach((pixel) => pixel.style.backgroundColor = 'white');
}


populateCanvas(gridSize);


BUTTONS.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id === 'random') {
            color = button.id;
        } else if (button.id === 'grey') {
            color = button.id;
        } else if (button.id === 'white') {
            color = button.id;
        } else if (button.id === 'black') {
            color = button.id;
        } else if (button.id === 'reset') {
            resetCanvas();
        } else if (button.id === 'resize') {
            modifySize();
        }
    })
})
