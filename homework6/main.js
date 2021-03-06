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
            subjectsArr = Object.keys(students[i].subjects).map(subject => subject.replace('_', ' ')).map(subject => subject[0].toUpperCase() + subject.slice(1, subject.length));
        }
    }
    return subjectsArr;
}
console.log(`#1 (My variant, for more - look at the code)Subjects of choosen student is:`, getSubjectsMyDecision('Anton'));

const getSubjects = (student) => {
    return Object.keys(student.subjects).map(subject => subject.replace('_', ' ')).map(subject => subject[0].toUpperCase() + subject.slice(1, subject.length));
}
console.log(`#1 Subjects of choosen student is:`, getSubjects(students[0]));

//2
const getAverageMarkMyDecision = (student) => {
    for (let i = 0; i < students.length; i++) {
        if (student === students[i].name) {
            let marksArr = Object.values(students[i].subjects);
            marksArr = marksArr.flat(2);
            const totalSum = marksArr.reduce((total, marks) => {
                return total + marks;
            }); let result;
            return result = +(totalSum / marksArr.length).toFixed(2);
        }

    }
}
console.log(`#2 (My variant, for more - look at the code)Average mark of choosen student is:`, getAverageMarkMyDecision('Anton'));

const getAverageMark = (student) => {
    Object.values(student.subjects).flat(2);
    const totalSum = Object.values(student.subjects).flat(2).reduce((total, marks) => {
        return total + marks;
    });
    const result = totalSum / (Object.values(student.subjects).flat(2)).length;
    return +result.toFixed(2);
}
console.log(`#2 Average mark of choosen student is:`, getAverageMark(students[2]));

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

console.log(`#3 (My variant, for more - look at the code)Main information about choosen student:`, getStudentInfoMyDecison('Victor'));

const getStudentInfo = (student) => {
    return {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    }
}
console.log(`#3 Main information about choosen student:`, getStudentInfo(students[1]));


//4 
const getStudentsNames = () => {
    return students.map(student => student.name).sort()
}
console.log(`#4 (My variant and which is done by the tasks condition are equal)
Students' names by alphabet order:`, getStudentsNames());

//5 Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
//let avgMark = getAverageMark(student[0, 1, 2]);
const getBestStudent = (students) => {
    let bestMark = 0;
    let bestStudent;
    students.forEach((student) => {
        let avgMark = getAverageMarkMyDecision(student.name);
        if (bestMark < avgMark) {
            bestMark = avgMark;
            bestStudent = student.name;
        }
    })
    return bestStudent;
}

console.log(`#5 And the best student is: ${getBestStudent(students)}! 
${getBestStudent(students)}, please accept our congratulations!!!`);

//6 Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
const calculateWordLetters = (word) => {
    let wordArr;
    wordArr = word.toLowerCase().split('');
    return wordArr.reduce((letters, wordArr) => {
        let counter;
        if (letters[wordArr] === undefined) {
            counter = 1;
        } else {
            counter = letters[wordArr] + 1;
        }
        letters[wordArr] = counter;
        return letters;
    }, {})
}

console.log(`#6`, calculateWordLetters('The Subways'));
