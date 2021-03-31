"use strict";

function getRandomChinese(length) {
    return new Promise((resolve) => {
        const sign = String.fromCharCode(Date.now().toString().substr(8, 12));
        setTimeout(() => {
            resolve(sign);
        }, length * 50)
    })
}

async function getWholeWord(length) {
    let word = '';
    let i = 0;
    while (i < length) {
        await getRandomChinese(length).then((resolve) => {
            word += resolve;
        })
        i++
    }
    console.log(word)
}

getWholeWord(4);





