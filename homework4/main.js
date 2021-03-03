'use strict';

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1

const getPairs = () => {
    const arr = [
        [students.slice(0, 2).join(" та ")],
        [students.slice(2, 4).join(" та ")],
        [students.slice(4, 6).join(" та ")]
    ];
    return arr;
}
console.log(`Пари студентів`, getPairs());

//2 Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 
//Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

const getPairsProjects = () => {


    let pairArr =
        [[students.slice(0, 2).join(" та ")],
        [students.slice(2, 4).join(" та ")],
        [students.slice(4, 6).join(" та ")]];

    let i = 0;
    let pairsProjects = [];
    for (let i = 0; i < themes.length; i++) {
        pairsProjects.push(pairArr[i].concat(themes[i]));
    } return pairsProjects;

}

console.log(`Теми проектів для пар`, getPairsProjects());

//3 Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

const compareStudentsMarks = () => {

    const studentsMarks = [];

    let i = 0;

    for (let i = 0; i < students.length; i++) {
        studentsMarks.push([students[i], marks[i]]);
    } return studentsMarks;
}
console.log('Студенти та оцінки', compareStudentsMarks());

//4 Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
//(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

const getRandomMark = function () {
    let randomMarksArr = [];

    let getRandomMarks = (min, max) => {
        let randomMark = Math.ceil(min + Math.random() * (max + 1 - min));
        return randomMark;
    };

    for (let i = 0; i < getPairsProjects().length; i++) {
        getRandomMarks(1, 5);
        let pairsProjectsMarks = [getPairsProjects(i).concat(getRandomMarks(1, 5))];
        return pairsProjectsMarks;
    }
    return randomMarksArr.push(pairsProjectsMarks);
}

console.log(getRandomMark());

