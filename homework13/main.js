"use strict";

const getNFOBtn = document.querySelector('#get-info-btn');
getNFOBtn.addEventListener('click', getNFO);

const getPlanetsBtn = document.querySelector('#get-planets-btn');
getPlanetsBtn.addEventListener('click', getPlanets);

const nextBtn = document.querySelector('#next-btn');
let currentPlanetsPage = 1;

const persons = document.querySelector('.people-wrapper');
const planets = document.querySelector('.planets-wrapper');

async function getNFO() {
    const backgroundSound = document.querySelector('audio');
    backgroundSound.play();
    getNFOBtn.style.display = 'none';
    getPlanetsBtn.style.display = 'block';
    persons.style.display = 'grid';
    planets.style.display = 'none';
    const nextBtn = document.querySelector('#next-btn');
    nextBtn.style.display = 'none';
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

        function generatePersonsDivs() {
            const person = document.createElement('div');
            person.classList.add('person-container');
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
    const previousBackgroundSound = document.querySelector(".info-sound");
    previousBackgroundSound.remove();
    const backgroundSound = document.querySelector(".planets-sound");
    backgroundSound.play();
    persons.style.display = "none";
    getPlanetsBtn.style.display = "none";
    getNFOBtn.style.display = "block";
    axios.get("https://swapi.dev/api/planets/").then((res) => {
        renderPlanets(res.data.results);
    });
    planets.style.display = "block";
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", getNextPlanets);
async function getNextPlanets() {
    if (currentPlanetsPage == 5) {
        nextBtn.style.display = "none";
    }
    currentPlanetsPage += 1;
    planets.innerHTML = "";
    await getPlanetsFromServer(currentPlanetsPage).then(renderPlanets);
}
function renderPlanets(allPlanets) {
    planets.innerHTML = "";
    allPlanets.forEach((el) => {
        const planet = document.createElement("p");
        planet.classList.add("single-planet");
        planets.append(planet);
        planet.innerText = el.name;
    });
}
async function getPlanetsFromServer(currentPage) {
    const res = await axios.get(
        `https://swapi.dev/api/planets/?page=${currentPage}`
    );
    return res.data.results;
}

// async function getPlanets() {
//     const previousBackgroundSound = document.querySelector('.info-sound');
//     previousBackgroundSound.remove();
//     const backgroundSound = document.querySelector('.planets-sound');
//     backgroundSound.play();
//     persons.style.display = 'none';
//     getPlanetsBtn.style.display = 'none';
//     getNFOBtn.style.display = 'block';
//     const episode5DataPlanets = await axios.get('https://swapi.dev/api/planets/')
//         .then((res) => {
//             return res.data.results;
//         });

//     planets.style.display = 'block';
//     episode5DataPlanets.forEach((e) => {
//         for (let i = 0; i < episode5DataPlanets.length; i++) {
//             const planet = document.createElement('p');
//             planet.classList.add('single-planet');
//             planets.append(planet);
//             return planet.innerText = e.name;
//         }
//     })

//     nextBtn.style.display = 'block';
//     nextBtn.addEventListener('click', getNextPlanets);

//     async function getNextPlanets() {
//         if (currentPlanetsPage < 6) {
//             currentPlanetsPage++
//             planets.innerHTML = " ";
//             const res = await axios.get(`https://swapi.dev/api/planets/?page=${currentPlanetsPage}`);
//             return res.data.results.forEach((e) => {
//                 for (let i = 0; i < res.data.results.length; i++) {
//                     const planet = document.createElement('p');
//                     planet.classList.add('single-planet');
//                     planets.append(planet);
//                     return planet.innerText = e.name;
//                 }
//             })
//         } else {
//             nextBtn.style.display = 'none';
//         }
//         console.log(currentPlanetsPage);
//     }
// }




