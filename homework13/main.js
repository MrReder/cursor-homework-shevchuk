"use strict";

const getNFOBtn = document.querySelector('.get-info-btn');
getNFOBtn.addEventListener('click', getNFO);


async function getNFO() {
    const episode5Data = await axios.get('https://swapi.dev/api/films/2/')
        .then((res) => {
            return res.data
        });
    const charactersUrls = episode5Data.characters;
    // const firstPerson = await axios.get('http://swapi.dev/api/people/1/')
    //     .then((res) => {
    //         return res.data.name
    //     })
    // console.log(firstPerson);
    for (let i = 0; i < charactersUrls; i++) {
        const names = await axios.get(`https${charactersUrls[i].substring(4)}`)
            .then((res) => {
                res.charactersUrls.map((e) => {
                    return console.log(e.data.name);
                })
            })

        console.log(names);
    }

    // for (let i = 0; i < charactersUrls; i++) {
    //     const names = await axios.get(`https${charactersUrls[i].substring(4)}`)
    //         .then((res) => {
    //             console.log(res.data.names)
    //         })
    // }


}

getNFO();
