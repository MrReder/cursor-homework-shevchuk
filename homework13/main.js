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
    // const firstPerson = await axios.get('http://swapi.dev/api/people/1/')
    //     .then((res) => {
    //         return res.data.name
    //     })
    // console.log(firstPerson);
    for (let i = 0; i < charactersArr; i++) {
        const names = await axios.get(`${charactersArr[i]}`)
            .then((res) => {
                return res.data.names
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

}

getNFO();
