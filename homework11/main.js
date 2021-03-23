"use strict";

/*
const buttons = document.querySelector('.keys-wrapper');

buttons.style.cssText = `display: grid;
justify-content: center;
grid-template-columns: 100px 100px 100px 100px 100px 10px;
grid-template-rows: 100px 100px 100px 100px 100px 100px;`;

function generateBlocksKeys() {
    for (let i = 0; i < 12; i++) {
        const button = document.createElement('div');
        button.className = 'singleBtn';
        button.style.cssText = `height: 100px;
        width: 100px;
        border: solid 2px;
        background-color: red;
        margin: 20px 20px;`;
        buttons.appendChild(button);
        const key = document.createElement('kbd');
        button.appendChild(key)
        function displayKbds(...values) {
            return key.textContent = values;
        }
        displayKbds('q', 'w', 'e', 'r', 't', 'y', 'a', 's', 'd', 'f', 'g', 'h');
    }

}
generateBlocksKeys();
*/

const btnQ = document.querySelector('#buttonQ');
const soundQ = document.querySelector('#soundQ');
btnQ.addEventListener('click', function () {
    btnQ.style.backgroundColor = 'crimson';
    soundQ.play();
});
btnQ.addEventListener('keydown', function () {
    btnQ.style.backgroundColor = 'transition';
});
