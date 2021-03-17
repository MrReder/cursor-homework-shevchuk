"use strict";

let blocks = document.querySelector('.cubics-wrapper');

blocks.style.cssText = `display: grid;
justify-content: center;
grid-template-columns: 50px 50px 50px 50px 50px;
grid-template-rows: 50px 50px 50px 50px 50px;
margin-top: 50px}`;

blocks.innerHTML;

let block = document.querySelector('.single-cubic');
block.style.cssText = `height: 50px;
width: 50px;
border: solid 2px;`;
block.style.backgroundColor = function backgroundColor() {
    let red = Math.ceil(0 + Math.random() * (255 + 1 - 0));
    let green = Math.ceil(0 + Math.random() * (255 + 1 - 0));
    let blue = Math.ceil(0 + Math.random() * (255 + 1 - 0));
    return `rgb(${red},${green},${blue})`;
};

//block.innerHTML;

function generateBlocks(element) {
    for (let i = 0; i < 25; i++) {
        return blocks.appendChild(element++);
    }
}





