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
        console.log(personsObj);
        const persons = document.querySelector('.people-wrapper');
        persons.style.cssText = `display: grid;
        justify-content: center;
        grid-template-columns: 100px 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        position: relative;
        z-index: 3`;
        function generatePersonsDivs() {
            const person = document.createElement('div');
            person.style.cssText = `height: 200px;
            width: 200px;
            border: solid 2px;
            border-color: rgb(172, 104, 3)`;
            persons.appendChild(person);
        }
        const getNFOBtn = document.querySelector('.get-info-btn');
        getNFOBtn.addEventListener('click', generatePersonsDivs);

    }
}


// const firstBtn = document.querySelector('.firstMagic');
// function generateBlocks() {
//     for (let i = 0; i < 25; i++) {
//         const block = document.createElement('div');
//         block.style.cssText = `height: 50px;
//         width: 50px;
//         border: solid 2px`;
//         block.style.backgroundColor = getBackgroundColor();
//         blocks.appendChild(block);
//     }
// }
// firstBtn.addEventListener('click', function () {
//     generateBlocks();
//     const container = document.querySelector('.buttons-container');
//     container.removeChild(firstBtn);
// });
