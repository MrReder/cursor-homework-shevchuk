"use strict";

//It works in both ways. But in both ways It is displaying not very correct as for me. What is my mistake?

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

// async function getRandomChinese(length) {
//     await new Promise((resolve) => {
//         let i = 0;
//         while (i < length) {
//             const sign = +(Date.now().toString().substr(8, 12));
//             let glyphs = [];
//             glyphs.push(String.fromCharCode(sign));
//             i++;
//             setTimeout(() => {
//                 resolve(glyphs);
//             }, length * 50)
//             console.log(glyphs.toString());
//         }

//     })

// }

// getRandomChinese(4);
