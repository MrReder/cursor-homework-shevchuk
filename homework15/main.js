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



//It`s not work
// btnUp.addEventListener('click', function* () {
//     let fontSize = 14;
//     yield fontSize += 2;
//     h1.style.fontSize = `${fontSize}px`;
// });

// btnDown.addEventListener('click', function* () {
//     let fontSize = 14;
//     yield fontSize -= 2;
//     h1.style.fontSize = `${fontSize}px`;
// });

btnUp.addEventListener('click', function* (start = 14, end = 60, step = 2) {
    let fontSizeUp = start;
    if (fontSizeUp < end) {
        fontSizeUp += step;
        yield h1.style.fontSize = `${fontSizeUp}px`;
    }
});

btnDown.addEventListener('click', function* (start = 14, end = 60, step = 2) {
    let fontSizeDown = start;
    if (fontSizeDown < end) {
        fontSizeDown -= step;
        yield h1.style.fontSize = `${fontSizeDown}px`;
    }
});


//It works somehow
// function* newFontGenerator(start = 14, end = 30, step = 2) {
//     for (let fontSizeUp = start; fontSizeUp < end; fontSizeUp += step) {
//         yield setInterval(() => {
//             h1.style.fontSize = `${fontSizeUp}px`;
//         }, 1000);
//     }
//     for (let fontSizeDown = start; fontSizeDown < end && fontSizeDown > 12; fontSizeDown -= step) {
//         yield setInterval(() => {
//             h1.style.fontSize = `${fontSizeDown}px`;
//         }, 1000);
//     }

// }


// const fontGenerator = newFontGenerator();
// console.log(fontGenerator.next().value);
// console.log(fontGenerator.next().value);
// console.log(fontGenerator.next().value);




