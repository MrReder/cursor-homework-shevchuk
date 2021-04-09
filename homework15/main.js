"use strict";

function* createIdGenerator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}
const idGenerator = createIdGenerator(1, Infinity, 1);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


const btnUp = document.querySelector('#up-btn');
const btnDown = document.querySelector('#down-btn');
const h1 = document.querySelector('h1');

function* changeFontSize(font) {
    let size;
    while (true) {
        size = yield font
        if (size === 'up') {
            ++font
        }
        if (size === 'down') {
            --font;
        }
    }
}

const initialFontSize = 32;

const changeTextFontSize = changeFontSize(initialFontSize)
changeTextFontSize.next()
btnUp.addEventListener('click', () => {
    h1.style.fontSize = changeTextFontSize.next('up').value + 'px';
})
btnDown.addEventListener('click', () => {
    h1.style.fontSize = changeTextFontSize.next('down').value + 'px';
})








