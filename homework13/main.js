"use strict";

const getNFOBtn = document.querySelector('.get-info-btn');
getNFOBtn.addEventListener('click', getNFO);


async function getNFO() {
    const episode5Data = await axios.get('https://swapi.dev/api/films/2/')
        .then((res) => {
            return res.data
        });
    const charactersUrls = episode5Data.characters;
    const charactersArr = [];
    charactersArr.push(charactersUrls);
    console.log(charactersArr);
    for (let i = 0; i < charactersArr; i++) {
        const names = await axios.get(`${charactersArr[i]}`)
            .then((res) => {
                res.map((e) => {
                    return console.log(e.name)
                })
            })
        console.log(names);

    }
    //     const infoObj = {
    //         name: await axios.get(`https${charactersArr[i]}`)
    //             .then((res) => {
    //                 return res.data.name
    //             }),
    //         birthYear: await axios.get(`https${charactersArr[i]}`)
    //             .then((res) => {
    //                 return res.data.birth_year
    //             }),
    //         gender: await axios.get(`https${charactersArr[i]}`)
    //             .then((res) => {
    //                 return res.data.gender
    //             }),
    //     }
    // }

    // charactersArr.push({
    //     name: charactersUrls.name,
    //     birthYear: charactersUrls.birth_year,
    //     gender: charactersUrls.gender
    // })
    // console.log(charactersArr)

}

getNFO();
