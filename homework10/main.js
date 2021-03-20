"use strict";

const blocks = document.querySelector('.cubics-wrapper');

blocks.style.cssText = `display: grid;
justify-content: center;
grid-template-columns: 50px 50px 50px 50px 50px;
grid-template-rows: 50px 50px 50px 50px;
margin-top: 50px;
margin-bottom: 50px}`;

function getBackgroundColor() {
    let red = Math.ceil(0 + Math.random() * (255 + 1 - 0));
    let green = Math.ceil(0 + Math.random() * (255 + 1 - 0));
    let blue = Math.ceil(0 + Math.random() * (255 + 1 - 0));
    return `rgb(${red},${green},${blue})`;
}
getBackgroundColor();

function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        const block = document.createElement('div');
        block.className = 'single-block';
        block.style.cssText = `height: 50px;
        width: 50px;
        border: solid 2px`;
        block.style.backgroundColor = getBackgroundColor();
        blocks.appendChild(block);
    }
}
generateBlocks();

//Advanced
const blocksInterval = document.querySelector('.interval-cubics-wrapper');

blocksInterval.style.cssText = `display: grid;
justify-content: center;
grid-template-columns: 50px 50px 50px 50px 50px;
grid-template-rows: 50px 50px 50px 50px;
margin-top: 50px;
margin-bottom: 50px}`;

function generateBlocksInterval() {
    for (let i = 0; i < 25; i++) {
        const block = document.createElement('div');
        block.className = 'interval-single-block';
        block.style.cssText = `height: 50px;
        width: 50px;
        border: solid 2px`;
        block.style.backgroundColor = getBackgroundColor()
        blocksInterval.appendChild(block);
        let blocksArray = [];
        blocksArray = document.querySelectorAll('.interval-single-block');
        setInterval(() => {
            blocksArray.forEach(block => {
                block.style.backgroundColor = getBackgroundColor();
            });
        }, 1000);
    }

}
generateBlocksInterval();


