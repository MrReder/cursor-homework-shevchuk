"use strict";
//1
class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.getInfo = function () {
            return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
        };
        this.marks = marks;
    }
    //3
    get getMarks() {
        return this.marks;
    }
}
//2
const ostap = new Student('Вища школа психотерапіїї м. Одеса', 1, 'Остап Бендер');
console.log(ostap.getInfo());

//3

