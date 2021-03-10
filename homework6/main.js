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
const getSubjects = (name) => {
    let subjectsArr;
    for (let i = 0; i < students.length; i++) {
        if (name === students[i].name) {
            subjectsArr = Object.keys(students[i].subjects);
        } subjectsArr = subjectsArr.map((subject) => {
            return (subject.charAt(0).toUpperCase() + subject.slice(1)).replace('_', ' ');
        });
        return subjectsArr;
    }
}

console.log(`Subjects of choosen student is:`, getSubjects('Tanya'));

//2
const getAverageMark = (student) => {
    for (let i = 0; i < students.length; i++) {
        if (student === students[i].name) {
            let marksArr = Object.values(students[i].subjects);
            marksArr = marksArr.flat(2);
            let totalSum = marksArr.reduce((total, marks) => {
                return total + marks;
            }); let result;
            return result = +(totalSum / marksArr.length).toFixed(2);
        }

    }
}

console.log(`Average mark of choosen student is:`, getAverageMark('Anton'));

//3 
const getStudentInfo = (student) => {
    for (let i = 0; i < students.length; i++) {
        if (student === students[i].name) {
            let studentNFO = {
                course: students[i].course,
                name: students[i].name,
                averageMark: getAverageMark(student)
            };
            return studentNFO;
        }
    }
}

console.log(`Main information about choosen student:`, getStudentInfo('Victor'));

//4 
const getStudentsNames = () => {
    let namesArr = [];
    namesArr = students.map((student) => {
        return student.name;
    });
    return namesArr.sort();

}
console.log(`Students' names by alphabet order:`, getStudentsNames());

//5 Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
const getBestStudent = (students) => {

}



