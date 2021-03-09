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

console.log(students.name);

const getSubjects = (student) => {
    switch (student.toLowerCase().name) {
        case 'Tanya':
            console.log(students.this["Tanya"].subjects);
            break;
        case 'Victor':
            console.log(students.this["Victor"].subjects);
            break;
        case 'Anton':
            console.log(students.this["Anton"].subjects);
            break;
        default:
            console.log(`You haven't input any name`);
    }
};

console.log(getSubjects("Victor"));