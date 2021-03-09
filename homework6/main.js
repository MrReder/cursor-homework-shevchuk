"use strict";

const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

//1
/*
const getSubjects = (name) => {
    for (let i = 0; i < students.length; i++) {
        if (name === students[i].name) {
            return Object.keys(students[i].subjects);

        }
    }
}

console.log(getSubjects('Tanya'));
*/
/*
const getSubjects = (name) => {
    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students[i].subjects.length; j++) {
            let splittedSubject = students[i].subjects[j].split(" ");
            console.log(splittedSubject);
            if (name === students[i].name) {
                //return Object.keys(students[i].subjects);
                return students[i].name.subjects;
            }
        }
    }

}

console.log(getSubjects('Victor'));
*/

const getSubjects = (name) => {
    let subjectsArr;
    for (let i = 0; i < students.length; i++) {
        if (name === students[i].name) {
            subjectsArr = Object.keys(students[i].subjects);
            //return subjectsArr[i][0].toUpperCase() + subjectsArr[i].slice(1).toLowerCase();
            for (let j = 0; j < subjectsArr.length; j++) {
                subjectsArr[j].charAt(0).toUpperCase() + subjectsArr[j].slice(1);
            }

            return subjectsArr;
        }
    }
}

console.log(getSubjects('Tanya'));