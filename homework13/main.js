"use strict";



axios.get('https://swapi.dev/api/films/2/')
    .then((res) => {
        res.data.characters.map((person) => {
            let charactersArr = [];
            charactersArr = axios.get(person);
            console.log(charactersArr);
        })

    }).then((res) => {
        axios.get(person)
    })

