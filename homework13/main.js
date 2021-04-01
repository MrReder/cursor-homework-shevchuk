"use strict";

const getNFOBtn = document.querySelector('.get-info-btn');
getNFOBtn.addEventListener('click', getNFO);


async function getNFO() {
    const episode5Data = await axios.get('https://swapi.dev/api/films/2/')
        .then((res) => {
            return res.data
        });
    const charactersUrls = episode5Data.characters;

    let personsObj = {};

    for (let i = 0; i < charactersUrls.length; i++) {
        const peopleData = await axios.get(charactersUrls[i])
            .then((res) => {
                return res.data
            })
        personsObj = {
            name: peopleData.name,
            birthYear: peopleData.birth_year,
            gender: peopleData.gender
        }
        const person = document.createElement('div');
        person.innerHTML = personsObj;



    }


}

getNFO();
