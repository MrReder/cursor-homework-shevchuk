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



// window.addEventListener('keydown', function* (e) {
//     const btnUp = document.querySelector(`#up-btn[data-key="${e.keyCode}"]`);
//     const btnDown = document.querySelector(`#down-btn[data-key="${e.keyCode}"]`);
//     const increaseFontSize = function* (start = 14, end = 18, step = 2) {
//         let fontSize = start;
//         if (btnUp) {
//             fontSize += step;
//             yield document.body.h2.style.fontSize = `${fontSize}px`;
//         } else if (btnDown) {
//             fontSize -= step;
//             yield document.body.h2.style.fontSize = `${fontSize}px`;
//         }
//         increaseFontSize()

//     }
// })

const btnUp = document.querySelector('#up-btn');
const btnDown = document.querySelector('#down-btn');
function* newFontGenerator(start = 14, end = 30, step = 2) {
    for (let fontSizeUp = start; fontSizeUp < end; fontSizeUp += step) {
        yield fontSizeUp;
    }
    for (let fontSizeDown = start; fontSizeDown < end && fontSizeDown > 10; fontSizeDown -= step) {
        yield fontSizeDown;
    }

}

const fontGenerator = newFontGenerator();


console.log(fontGenerator.next().value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next().value);




