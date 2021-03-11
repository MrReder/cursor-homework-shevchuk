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
const getSubjectsMyDecision = (name) => {
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
console.log(`(My variant, for more - look at the code)Subjects of choosen student is:`, getSubjectsMyDecision('Tanya'));

const getSubjects = (student) => {
    return Object.keys(student.subjects).map(subject => subject.replace('_', ' ')).map(subject => subject[0].toUpperCase() + subject.slice(1, subject.length));
}
console.log(`Subjects of choosen student is:`, getSubjects(students[0]));

//2
const getAverageMarkMyDecision = (student) => {
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
console.log(`(My variant, for more - look at the code)Average mark of choosen student is:`, getAverageMarkMyDecision('Anton'));

const getAverageMark = (student) => {
    let marksArr;
    marksArr = marksArr.push(Object.values(student.subjects).flat(2));
    let totalSum = marksArr.reduce((total, marks) => {
        return total + marks;
    });
    return +(totalSum / marksArr.length).toFixed(2);
}
console.log(`Average mark of choosen student is:`, getAverageMark(students[1]));

//3 
const getStudentInfoMyDecison = (student) => {
    for (let i = 0; i < students.length; i++) {
        if (student === students[i].name) {
            let studentNFO = {
                course: students[i].course,
                name: students[i].name,
                averageMark: getAverageMarkMyDecision(student)
            };
            return studentNFO;
        }
    }
}

console.log(`(My variant, for more - look at the code)Main information about choosen student:`, getStudentInfoMyDecison('Victor'));

//4 
const getStudentsNamesMyDecison = () => {
    let namesArr = [];
    namesArr = students.map((student) => {
        return student.name;
    });
    return namesArr.sort();

}
console.log(`(My variant, for more - look at the code)Students' names by alphabet order:`, getStudentsNamesMyDecison());

//5 Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
const getBestStudent = () => {
    let bestMark;
    let avgMark = getAverageMark(student);
    students.map((student) => {
        if (bestMark < avgMark) {
            bestMark = avgMark;

        }
    })

}

console.log(getBestStudent());

