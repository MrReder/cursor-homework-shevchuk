"use strict";

const getNFOBtn = document.querySelector('.get-info-btn');
getNFOBtn.addEventListener('click', getNFO);

async function getNFO() {
    const backgroundSound = document.querySelector('audio');
    backgroundSound.play();
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
            gender: peopleData.gender,
            genderImg: () => {

            }
        }
        console.log(personsObj);

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
            // if (personsObj.gender === 'male') {
            //     personsObj.gender.insertAdjacentHTML('beforeend', `
            //     <img src="./img/gender/male.png class="gender-img">`);
            // } else if (personsObj.gender === 'female') {
            //     personsObj.gender.insertAdjacentHTML('beforeend', `
            //     <img src="./img/gender/female.png class="gender-img">`);
            // } else {
            //     personsObj.gender.insertAdjacentHTML('beforeend', `
            //     <img src="./img/gender/other.png class="gender-img">`);
            // }
        }
        generatePersonsDivs();
    }
}


// const getNFOBtn = document.querySelector('.get-info-btn');
// getNFOBtn.addEventListener('click', getNFO);

// async function getNFO() {
//     const backgroundSound = document.querySelector('audio');
//     backgroundSound.play();
//     const episode5Data = await axios.get('https://swapi.dev/api/films/2/')
//         .then((res) => {
//             return res.data
//         });
//     const charactersUrls = episode5Data.characters;
//     let personsObj = {};

//     for (let i = 0; i < charactersUrls.length; i++) {
//         const peopleData = await axios.get(charactersUrls[i])
//             .then((res) => {
//                 return res.data
//             })
//         personsObj = {
//             name: peopleData.name,
//             birthYear: peopleData.birth_year,
//             gender: peopleData.gender
//         }

//         const persons = document.querySelector('.people-wrapper');
//         persons.style.cssText = `display: grid;
//         justify-content: center;
//         grid-template-columns: 450px 450px 450px 450px;
//         grid-template-rows: 220px 220px 220px 220px;
//         padding-left: 120px;
//         position: relative;
//         -webkit-user-modify: read-write-plaintext-only;
//         z-index: 3`;

//         function generatePersonsDivs() {
//             const person = document.createElement('div');
//             person.style.cssText = `height: 200px;
//             width: 300px;
//             border: solid 2px;
//             border-color: rgb(172, 104, 3);
//             text-align: right;
//             font-size: 24px;
//             font-weight: bolder;
//             margin-right: 15px;
//             align-items: space-around;
//             background: linear-gradient(to bottom right, rgb(172, 104, 3), rgb(252, 252, 208))`;
//             persons.appendChild(person);
//             person.innerHTML = `${personsObj.name} <br>
//             ${personsObj.birthYear} <br>
//             ${personsObj.gender}`;
//         }
//         generatePersonsDivs();
//     }
// }


