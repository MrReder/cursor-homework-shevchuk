"use strict";

function getRandomChinese(length) {
    return new Promise((resolve) => {
        for (let i = 0; i < length; i++) {
            const sign = +(Date.now(i).toString().substr(8, 12));
            let glyphs = ' ';
            glyphs += String.fromCharCode(sign);
            setTimeout(() => {
                console.log(glyphs);
            }, length * 50)
            resolve();
        }
    })
}

getRandomChinese(4);

// function getRandomChinese(length) {
//     return new Promise((resolve) => {
//         let i = 0;
//         while (i < length) {
//             const sign = +(Date.now(i).toString().substr(8, 12));
//             let glyphs = ' ';
//             glyphs += String.fromCharCode(sign);
//             setTimeout(() => {
//                 console.log(glyphs);
//             }, length * 50)
//             i++;
//             resolve();
//         }
//     })
// }

// getRandomChinese(4);
