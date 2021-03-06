"use strict";
// //1
// class Student {
//     constructor(university, course, fullName, marks) {
//         this.university = university;
//         this.course = course;
//         this.fullName = fullName;
//         this.getInfo = function () {
//             return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
//         };
//         this.marks = marks;
//         this.getAverageMark = function () {
//             return (this.marks.reduce((total, marks) => {
//                 return total + marks;
//             })) / this.marks.length;
//         };
//         this.dismiss = function () {
//             return this.marks = null;
//         };
//         this.recovery = function () {
//             return this.marks = marks;
//         }
//     }
//     //3
//     get getMarks() {
//         return this.marks;
//     }
//     //4
//     set setMarks(mark) {
//         return this.marks.push(mark);
//     }


// }
// //2
// const ostap = new Student('Вища школа психотерапіїї м. Одеса', 1, 'Остап Бендер', [5, 4, 4, 5]);
// console.log(ostap.getInfo());

// //3 
// console.log(`Оцінки студента`, ostap.getMarks);

// //4 Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. 
// //Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
// ostap.setMarks = 5;
// console.log(`Оновленний масив оцінок студента`, ostap.getMarks);

// //5 Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
// console.log(`Середній бал студента`, ostap.getAverageMark());

// //6Створіть метод this.dismiss, який "виключить" студента. 
// //Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. 
// //(Ніяких помилок, просто повертається завжди null замість масиву оцінок)
// console.log(`Студента виключено`, ostap.dismiss());
// console.log(`Загальна інфа про виключеного студента`, ostap);
// console.log(`Масив оцінок не відображається так як студента відрахували`, ostap.getMarks);

// //7 Створіть метод this.recover, який дозволить поновити студента
// ostap.recovery();
// console.log(`Остап реабілітувався, його поновлено!`, ostap.getMarks);

// //Advanced
// class BudgetStudent extends Student {
//     constructor(university, course, fullName, marks, scholarship) {
//         super(university, course, fullName, marks);
//         this.scholarship = scholarship;
//         this.getScholarship = function () {
//             if (this.getAverageMark() >= 4) {
//                 console.log(`Ви отримали ${this.scholarship} грн. стипендії.`);
//             } else if (this.getAverageMark() < 4) {
//                 console.log(`Даний студент не має права на стипендію через занадто низький середній балл.`)
//             } else if (this.dismiss) {
//                 console.log(`Даний студент не має права на стипендію, оскільки його виключено із ВНЗ.`)
//             }
//         }
//     }
// }

// const oleh = new BudgetStudent('КНЕУ м. Київ', 4, 'Олег Винник', [5, 4, 5, 5], 1400);
// console.log(`Наш новий бюджетник`, oleh);
// setInterval("oleh.getScholarship()", 30000);


//1
class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.isActiveStudent = true;
        this.getInfo = function () {
            if (!this.isActiveStudent) {
                return null
            } else {
                return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
            }

        };
        this.marks = marks;
        this.getAverageMark = function () {
            return (this.marks.reduce((total, marks) => {
                return total + marks;
            })) / this.marks.length;
        };
        this.dismiss = function () {
            if (this.isActiveStudent === false) {
                return this.marks = null;
            }

        };
        this.recovery = function () {
            if (this.isActiveStudent === true) {
                return this.marks = marks;
            }
        }
    }
    //3
    get getMarks() {
        if (!this.isActiveStudent) {
            return null
        } else {
            return this.marks;
        }

    }
    //4
    set setMarks(mark) {
        if (!this.isActiveStudent) {
            return null
        } else {
            return this.marks.push(mark);
        }
    }


}
//2
const ostap = new Student('Вища школа психотерапіїї м. Одеса', 1, 'Остап Бендер', [5, 4, 4, 5]);
console.log(ostap.getInfo());

//3 
console.log(`Оцінки студента`, ostap.getMarks);

//4 Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. 
//Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
ostap.setMarks = 5;
console.log(`Оновленний масив оцінок студента`, ostap.getMarks);

//5 Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
console.log(`Середній бал студента`, ostap.getAverageMark());

//6Створіть метод this.dismiss, який "виключить" студента. 
//Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. 
//(Ніяких помилок, просто повертається завжди null замість масиву оцінок)
console.log(`Студента виключено`, ostap.dismiss());
console.log(`Загальна інфа про виключеного студента`, ostap);
console.log(`Масив оцінок не відображається так як студента відрахували`, ostap.getMarks);

//7 Створіть метод this.recover, який дозволить поновити студента
ostap.recovery();
console.log(`Остап реабілітувався, його поновлено!`, ostap.getMarks);

//Advanced
class BudgetStudent extends Student {
    constructor(university, course, fullName, marks, scholarship) {
        super(university, course, fullName, marks);
        this.scholarship = scholarship;
        this.getScholarship = function () {
            if (this.getAverageMark() >= 4 && this.isActiveStudent) {
                console.log(`Ви отримали ${this.scholarship} грн. стипендії.`);
            } else if (this.getAverageMark() < 4 && this.isActiveStudent) {
                console.log(`Даний студент не має права на стипендію через занадто низький середній балл.`)
            } else if (this.dismiss && this.isActiveStudent === false) {
                console.log(`Даний студент не має права на стипендію, оскільки його виключено із ВНЗ.`)
            }
        }
    }
}

const oleh = new BudgetStudent('КНЕУ м. Київ', 4, 'Олег Винник', [5, 4, 5, 5], 1400);
console.log(`Наш новий бюджетник`, oleh);
setInterval("oleh.getScholarship()", 30000);