"use strict";

const getNFOBtn = document.querySelector('#get-info-btn');
getNFOBtn.addEventListener('click', getNFO);

const getPlanetsBtn = document.querySelector('#get-planets-btn');
getPlanetsBtn.addEventListener('click', getPlanets);



async function getNFO() {
    const backgroundSound = document.querySelector('audio');
    backgroundSound.play();
    getNFOBtn.remove();
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

        const persons = document.querySelector('.people-wrapper');
        persons.style.cssText = `display: grid;
        justify-content: center;
        grid-template-columns: 450px 450px 450px 450px;
        grid-template-rows: 220px 220px 220px 220px;
        padding-left: 120px;
        position: relative;
        z-index: 3`;

        function generatePersonsDivs() {
            const person = document.createElement('div');
            person.style.cssText = `height: 200px;
            width: 300px;
            border: solid 2px;
            border-color: rgb(172, 104, 3);
            text-align: right;
            font-size: 20px;
            font-weight: bolder;
            margin-right: 15px;
            align-items: space-around;
            background: linear-gradient(to bottom right, rgb(172, 104, 3), rgb(252, 252, 208))`;
            persons.appendChild(person);
            person.insertAdjacentHTML('beforeend', `
                <img class="person-photo" src="./img/persons/${(personsObj.name).replace(' ', '_', '-').toLowerCase()}.jpg" alt="character photo">
                     <div class="info-container">
                    <p class="person-name"> ${personsObj.name}</p>
                    <p class="person-birth-year"> ${personsObj.birthYear}</p>
                    <p class="person-gender"> ${personsObj.gender}</p>
                    </div>`);
            const male = document.createElement('img');
            male.src = "./img/gender/male.png";
            male.classList.add('gender-icon');

            const female = document.createElement('img');
            female.src = "./img/gender/female.png";
            female.classList.add('gender-icon');
            female.classList.add('female-icon');

            const other = document.createElement('img');
            other.src = "./img/gender/other.png";
            other.classList.add('gender-icon');

            if (personsObj.gender === 'male') {
                person.appendChild(male);
            } else if (personsObj.gender === 'female') {
                person.appendChild(female);
            } else {
                person.appendChild(other);
            }

        }
        generatePersonsDivs();
    }

};


async function getPlanets() {
    const previousBackgroundSound = document.querySelector('.info-sound');
    previousBackgroundSound.remove();
    const backgroundSound = document.querySelector('.planets-sound');
    backgroundSound.play();
    const previousInfo = document.querySelector('.people-wrapper');
    previousInfo.remove();
    getPlanetsBtn.remove();
    for (let i = 0; i < 10; i++) {
        const episode5DataPlanets = await axios.get('https://swapi.dev/api/planets/')
            .then((res) => {
                return res.data.results;
            });
        const planets = document.querySelector('.planets-wrapper');
        const planet = document.createElement('p');
        planet.classList.add('single-planet');
        planets.appendChild(planet);
        planet.innerText = episode5DataPlanets;

    }


    // const nextBtn = null;
    // nextBtn.innerHTML = `<button>Next</button>`;



}


