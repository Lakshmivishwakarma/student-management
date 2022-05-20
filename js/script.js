// helpers
function getRanks(students) {
    let sortedResult = [];
    // sort the array in descending order

    sortedResult = students.sort((a, b) => {
        return a.percent - b.percent;
    });
    return sortedResult.reverse();
}
function printTop3(ranks) {
    for (let index = 0; index < 3; index++) {
        const s = ranks[index];
        console.log(`RANK: ${index + 1} Name: ${s.name}, Percentage: ${s.percent} % `);
    }
}

function resultProcessing(students) {
    for (let index = 0; index < students.length; index++) {
        const student = students[index];
        student.setPercent(calculatePercantage(student.subjects));
        // set wether student is pass of fail
        const failureSubjects = student.subjects.filter((sub) => sub < 35);
        const passedInAllSubjects = failureSubjects.length === 0;
        if (student.percent >= 35 && passedInAllSubjects) {
            student.setPassed(true)
        }
    }
}

function printResult(s) {
    console.log(`Name: ${s.name} (${s.rollNo}), Percentage: ${s.percent} % RESULT: ${s.isPass ? 'Passed' : 'Fail'}`);

}
function calculatePercantage(numbers) {
    var total = 0;
    for (var i in numbers) {
        total += numbers[i];
    }

    let percent = total / numbers.length;
    // return percent.toFixed(2);
    return Math.round(percent * 100) / 100
}

// classes
class Student {
    hobbies = [];
    subjects = []; // array of number
    percent = 0;
    isPass = false; // default everyone is fail

    constructor(name, dob, rollNo) {
        if (!name) {
            throw new Error(" Name caanot empty")
        }
        this.name = name;
        this.dob = dob;
        this.rollNo = rollNo;
    }

    getStudentDetails() {
        return ({
            name: this.name,
            dob: this.dob,
            rollNo: this.rollNo,
        });
    }
    setSubjects(subjects) {
        this.subjects = subjects;
    }
    setPercent(percent) {
        this.percent = percent;
    }

    setPassed(value) {
        this.isPass = value;
    }

}
// Starting MAIN APPLICATION
const STUDENT_DB = [];
console.log('Creating Student Records .... ');
// application
let s;

s = new Student("Lakshmi", new Date("1995-01-11"), 111);
STUDENT_DB.push(s);

s = new Student("Neeraj", new Date("1991-07-22"), 112);
STUDENT_DB.push(s);

s = new Student("Kirti", new Date("2004-01-18"), 113);
STUDENT_DB.push(s);

s = new Student("Priya", new Date("1999-09-20"), 114);
STUDENT_DB.push(s);

s = new Student("Anshu", new Date("1995-07-10"), 115);
STUDENT_DB.push(s);


console.log('Student Admission complete');
console.log('Conducting Exams')
STUDENT_DB[0].setSubjects([20, 35, 50]);
STUDENT_DB[1].setSubjects([50, 75, 50]);
STUDENT_DB[2].setSubjects([40, 55, 60]);
STUDENT_DB[3].setSubjects([80, 85, 90]);
STUDENT_DB[4].setSubjects([90, 95, 90]);

console.log('Exams  complete');




console.log(STUDENT_DB);

console.log('Conducting result');
resultProcessing(STUDENT_DB);


console.log(STUDENT_DB);

console.log('Announcing result');
for (let index = 0; index < STUDENT_DB.length; index++) {
    printResult(STUDENT_DB[index]);
};


console.log('*****TOP 3 Rankers *****')
const rankings = getRanks(STUDENT_DB);
printTop3(rankings);

