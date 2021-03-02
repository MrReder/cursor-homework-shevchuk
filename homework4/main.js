'use strict';

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1

const getPairs = function () {
    let pairArr =
        [[students.slice(0, 2).join(" та ")],
        [students.slice(2, 4).join(" та ")],
        [students.slice(4, 6).join(" та ")]];
    return pairArr = pairArr.join(", ");
}
console.log(`Пари студентів ${getPairs()}`);

//2 Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 
//Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

const getPairsProjects = function () {

    let pairArr =
        [[students.slice(0, 2).join(" та ")],
        [students.slice(2, 4).join(" та ")],
        [students.slice(4, 6).join(" та ")]];

    let pairProjects =
        [[pairArr[0].concat(themes[0])],
        [pairArr[1].concat(themes[1])],
        [pairArr[2].concat(themes[2])]];
    return pairProjects = pairProjects.join(" , ");

    /*
        let i = 0;
        for (let i = 0; i < themes.length; i++) {
            let pairProjects = [getPairs().concat(themes[i])];
            return pairProjects;
        }
    */

}

console.log(`Теми проектів для пар: ${getPairsProjects()}`);

//3 Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

const compareStudentsMarks = function () {
    let studentsMarks = [[students[0].concat(marks[0])],
    [students[1].concat(marks[1])],
    [students[2].concat(marks[2])],
    [students[3].concat(marks[3])],
    [students[4].concat(marks[4])],
    [students[5].concat(marks[5])]]
    return studentsMarks = studentsMarks.join(", ");

}
console.log(compareStudentsMarks());

//4 Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
//(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

const getRandomMark = function () {
    let randomMarksArr = [];
    const getRandomMarks = function (max) {
        return Math.ceil(Math.random() * max);
    }

    for (let i = 0; i < getPairsProjects().length; i++) {
        let pairsProjectsMarks = [getPairsProjects(i), getRandomMarks(5)];

        return randomMarksArr.push(pairsProjectsMarks);

    }

}

console.log(getRandomMark());
