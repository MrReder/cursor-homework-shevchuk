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
        personsObj[i] = {
            name: peopleData.name,
            birthYear: peopleData.birth_year,
            gender: peopleData.gender
        }
        console.log(personsObj[i]);

        // const persons = docuemnt.querySelector('.people-wrapper');

        // persons.style.cssText = `display: grid;
        // justify-content: center;
        // grid-template-columns: 50px 50px 50px 50px;
        // grid-template-rows: 50px 50px 50px 50px;
        // margin-top: 50px;
        // margin-bottom: 50px}`;
        // function generatePersonsList() {
        //     for (let i = 0; i < 16; i++) {
        //         const person = document.createElement('div');
        //         person.style.cssText = `height: 50px;
        //         width: 50px;
        //         border: solid 2px`;
        //         persons.appendChild(person);
        //     }
        // }
        // generatePersonsList();
        // firstBtn.addEventListener('click', function () {
        //     generateBlocks();
        //     const container = document.querySelector('.buttons-container');
        //     container.removeChild(firstBtn);
        // });
    }


}

getNFO();
