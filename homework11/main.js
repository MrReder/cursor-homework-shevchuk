"use strict";
//It works!
// const btnQ = document.querySelector('#buttonQ');
// const soundQ = document.querySelector('#soundQ');
// btnQ.addEventListener('mousedown', function () {
//     btnQ.style.backgroundColor = 'crimson';
//     soundQ.play();
// });
// btnQ.addEventListener('mouseup', function () {
//     btnQ.style.backgroundColor = 'transparent';
// });

// document.body.addEventListener('keydown', function () {
//     btnQ.style.backgroundColor = 'crimson';
//     soundQ.play();
// });
// document.body.addEventListener('keyup', function () {
//     btnQ.style.backgroundColor = 'transparent';
// });

//It`s not work
function getSound() {
    const btns = document.querySelectorAll('.single-button');
    const btnsArr = [];
    btnsArr.push(btns);
    const sounds = document.querySelectorAll('audio');
    const soundsArr = [];
    soundsArr.push(sounds);
    for (let i = 0; i < btnsArr.length; i++) {
        for (let j = 0; j < soundsArr.length; j++) {
            document.body.addEventListener('keydown', function () {
                btnsArr[i].style.backgroundColor = 'crimson';
                soundsArr[j].play();
            });
            document.body.addEventListener('keyup', function () {
                btnsArr[i].style.backgroundColor = 'transparent';
            });

        }

    }
}
getSound();

// document.body.addEventListener('keydown', function (e) {
//     let soundOgg = new Audio(`./sound/sound${e.key.toUpperCase()}.ogg`);
//     soundOgg.play();
// })
