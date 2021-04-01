"use strict";

const getNFOBtn = document.querySelector('.get-info-btn');
getNFOBtn.addEventListener('click', getNFO());


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
        const personsContainer = document.getElementsByClassName('.people-wrapper');
        for (let i = 0; i < 16; i++) {
            const eachPerson = personsContainer.appendChild('div');
            eachPerson.innerHTML = `<p class="person">${personsObj.name}</p><br>
        <p class="person">${personsObj.birthYear}</p><br>
        <p class="person">${personsObj.gender}</p><br>`
        }

        //document.p.innerHTML = `<p class="person">${personsObj.name}</p>`;

    }


}

getNFO();
