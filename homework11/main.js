"use strict";

function getSound() {
    window.addEventListener('keydown', function (e) {
        const btn = document.querySelector(`.single-button[data-key="${e.keyCode}"]`);
        btn.classList.add('btn-down');
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return;
        audio.play();
    })
    window.addEventListener('keyup', function (e) {
        const btn = document.querySelector(`.single-button[data-key="${e.keyCode}"]`);
        btn.classList.remove('btn-down');
    })
    const items = document.querySelectorAll('.single-button')
    items.forEach(item => {
        item.addEventListener('mousedown', () => {
            item.classList.add('btn-down');
            function playList(item) {
                const audio = document.querySelector(`audio[data-key="${item.dataset.key}"]`);
                audio.play();
                audio.currentTime = 0;
            }
            playList(item);
        });
    });
    items.forEach(item => {
        item.addEventListener('mouseup', () => {
            item.classList.remove('btn-down');
        })
    });

    let song = null;
    document.addEventListener('play', e => {
        if (song && song != e.target) {
            song.pause();
        }
        song = e.target;
    },
        true
    );

    items.addEventListener('play', e => {
        if (song && song != e.target) {
            song.pause();
        }
        song = e.target;
    },
        true
    );

}
getSound();

