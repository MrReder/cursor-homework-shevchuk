"use strict";

const btnQ = document.querySelector('#buttonQ');
const btnW = document.querySelector('#buttonW');
const btnE = document.querySelector('#buttonE');
const btnR = document.querySelector('#buttonR');
const btnT = document.querySelector('#buttonT');
const btnY = document.querySelector('#buttonY');
const btnA = document.querySelector('#buttonA');
const btnS = document.querySelector('#buttonS');
const btnD = document.querySelector('#buttonD');
const btnF = document.querySelector('#buttonF');
const btnG = document.querySelector('#buttonG');
const btnH = document.querySelector('#buttonH');

const soundQ = document.querySelector('#soundQ');
const soundW = document.querySelector('#soundW');
const soundE = document.querySelector('#soundE');
const soundR = document.querySelector('#soundR');
const soundT = document.querySelector('#soundT');
const soundY = document.querySelector('#soundY');
const soundA = document.querySelector('#soundA');
const soundS = document.querySelector('#soundS');
const soundD = document.querySelector('#soundD');
const soundF = document.querySelector('#soundF');
const soundG = document.querySelector('#soundG');
const soundH = document.querySelector('#soundH');

// function getSound() {
//     document.body.addEventListener('keydown', function (e) {
//         const equalty = e.keyCode === e.which;
//         switch (equalty) {
//             case e.which === 81: btnQ.style.backgroundColor = 'crimson';
//                 soundQ.play();
//                 break;
//             case e.which === 87: btnW.style.backgroundColor = 'crimson';
//                 soundW.play();
//                 break;
//             case e.which === 69: btnE.style.backgroundColor = 'crimson';
//                 soundE.play();
//                 break;
//             case e.which === 82: btnR.style.backgroundColor = 'crimson';
//                 soundR.play();
//                 break;
//             case e.which === 84: btnT.style.backgroundColor = 'crimson';
//                 soundT.play();
//                 break;
//             case e.which === 89: btnY.style.backgroundColor = 'crimson';
//                 soundY.play();
//                 break;
//             case e.which === 65: btnA.style.backgroundColor = 'crimson';
//                 soundA.play();
//                 break;
//             case e.which === 83: btnS.style.backgroundColor = 'crimson';
//                 soundS.play();
//                 break;
//             case e.which === 68: btnD.style.backgroundColor = 'crimson';
//                 soundD.play();
//                 break;
//             case e.which === 70: btnF.style.backgroundColor = 'crimson';
//                 soundF.play();
//                 break;
//             case e.which === 71: btnG.style.backgroundColor = 'crimson';
//                 soundG.play();
//                 break;
//             case e.which === 72: btnH.style.backgroundColor = 'crimson';
//                 soundH.play();
//                 break;
//         }
//     });
//     document.body.addEventListener('keyup', function (e) {
//         const equalty = e.keyCode === e.which;
//         switch (equalty) {
//             case e.which === 81: btnQ.style.backgroundColor = 'transparent';
//                 break;
//             case e.which === 87: btnW.style.backgroundColor = 'transparent';
//                 break;
//             case e.which === 69: btnE.style.backgroundColor = 'transparent';
//                 break;
//             case e.which === 82: btnR.style.backgroundColor = 'transparent';
//                 break;
//             case e.which === 84: btnT.style.backgroundColor = 'transparent';
//                 break;
//             case e.which === 89: btnY.style.backgroundColor = 'transparent';
//                 break;
//             case e.which === 65: btnA.style.backgroundColor = 'transparent';
//                 break;
//             case e.which === 83: btnS.style.backgroundColor = 'transparent';
//                 break;
//             case e.which === 68: btnD.style.backgroundColor = 'transparent';
//                 break;
//             case e.which === 70: btnF.style.backgroundColor = 'transparent';
//                 break;
//             case e.which === 71: btnG.style.backgroundColor = 'transparent';
//                 break;
//             case e.which === 72: btnH.style.backgroundColor = 'transparent';
//                 break;
//         }
//     })
// }
// getSound();

// function getSoundByMouse() {
//     btnQ.addEventListener('mousedown', function () {
//         btnQ.style.backgroundColor = 'crimson';
//         soundQ.play();
//     });
//     btnQ.addEventListener('mouseup', function () {
//         btnQ.style.backgroundColor = 'transparent';
//     });

//     btnW.addEventListener('mousedown', function () {
//         btnW.style.backgroundColor = 'crimson';
//         soundW.play();
//     });
//     btnW.addEventListener('mouseup', function () {
//         btnW.style.backgroundColor = 'transparent';
//     });

//     btnE.addEventListener('mousedown', function () {
//         btnE.style.backgroundColor = 'crimson';
//         soundE.play();
//     });
//     btnE.addEventListener('mouseup', function () {
//         btnE.style.backgroundColor = 'transparent';
//     });

//     btnR.addEventListener('mousedown', function () {
//         btnR.style.backgroundColor = 'crimson';
//         soundR.play();
//     });
//     btnR.addEventListener('mouseup', function () {
//         btnR.style.backgroundColor = 'transparent';
//     });

//     btnT.addEventListener('mousedown', function () {
//         btnT.style.backgroundColor = 'crimson';
//         soundT.play();
//     });
//     btnT.addEventListener('mouseup', function () {
//         btnT.style.backgroundColor = 'transparent';
//     });

//     btnY.addEventListener('mousedown', function () {
//         btnY.style.backgroundColor = 'crimson';
//         soundY.play();
//     });
//     btnY.addEventListener('mouseup', function () {
//         btnY.style.backgroundColor = 'transparent';
//     });

//     btnA.addEventListener('mousedown', function () {
//         btnA.style.backgroundColor = 'crimson';
//         soundA.play();
//     });
//     btnA.addEventListener('mouseup', function () {
//         btnA.style.backgroundColor = 'transparent';
//     });

//     btnS.addEventListener('mousedown', function () {
//         btnS.style.backgroundColor = 'crimson';
//         soundS.play();
//     });
//     btnS.addEventListener('mouseup', function () {
//         btnS.style.backgroundColor = 'transparent';
//     });

//     btnD.addEventListener('mousedown', function () {
//         btnD.style.backgroundColor = 'crimson';
//         soundD.play();
//     });
//     btnD.addEventListener('mouseup', function () {
//         btnD.style.backgroundColor = 'transparent';
//     });

//     btnF.addEventListener('mousedown', function () {
//         btnF.style.backgroundColor = 'crimson';
//         soundF.play();
//     });
//     btnF.addEventListener('mouseup', function () {
//         btnF.style.backgroundColor = 'transparent';
//     });

//     btnG.addEventListener('mousedown', function () {
//         btnG.style.backgroundColor = 'crimson';
//         soundG.play();
//     });
//     btnG.addEventListener('mouseup', function () {
//         btnG.style.backgroundColor = 'transparent';
//     });

//     btnH.addEventListener('mousedown', function () {
//         btnH.style.backgroundColor = 'crimson';
//         soundH.play();
//     });
//     btnH.addEventListener('mouseup', function () {
//         btnH.style.backgroundColor = 'transparent';
//     });
// }
// getSoundByMouse();

function getSoundShortly() {
    document.addEventListener('keydown', function (e) {
        const btn = document.querySelector(`.single-button[data-key="${e.keyCode}"]`);
        btn.classList.add('btn-down');
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return;
        audio.play();
    })
    document.addEventListener('keyup', function (e) {
        const btn = document.querySelector(`.single-button[data-key="${e.keyCode}"]`);
        btn.classList.remove('btn-down');
    })
    // document.addEventListener('mousedown', function (e) {
    //     const click = document.querySelector(`.single-button[data-key="${e.target}"]`);
    //     click.classList.add('mouse-down');
    //     const audio = document.querySelector(`.audio[data-key="${e.target}"]`);
    //     if (!audio) return;
    //     audio.play();
    // })
    // document.addEventListener('mouseup', function (e) {
    //     const click = document.querySelector(`.single-button[data-key="${e.target}"]`);
    //     click.classList.add('mouse-up');
    // })
}
getSoundShortly();

