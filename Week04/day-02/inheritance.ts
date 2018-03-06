class Person {
    name: string;
    age: number;
    gender: string;

    introduce() {
        console.log(`Hi I'm ` + `${this.name}` +`, a ` + `${this.age} ` + `year old ` + `${this.gender}.`);
    }

    getGoal() {
        console.log("My goal is: Live for the moment!");
    }

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class Student {
    name: string;
    age: number;
    gender: string;
    previousOrganization: string;
    skippedDays: number;

    getGoal() {
        console.log("My goal is: Be a junior software developer.");
    }

    introduce() {
        console.log(`Hi I'm ` + `${this.name}` +`, a ` + `${this.age} ` + `year old ` + `${this.gender} ` + `from ` + `${this.previousOrganization}` + ` who skipped ` + `${this.skippedDays}` + ` days from the course already.`);
    }

    skipDays(numberOfDays) {
        this.skippedDays += numberOfDays;
    }

    constructor(name, age, gender, previousOrganization) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;
    }
}

class Mentor {
    name: string;
    age: number;
    gender: string;
    level: string;

    getGoal() {
        console.log("My goal is: Educate brilliant junior software developers.");
    }

    introduce() {
        console.log(`Hi I'm ` + `${this.name}` +`, a ` + `${this.age} ` + `year old ` + `${this.gender} ` + `${this.level} ` + `mentor`);
    }

    constructor(name, age, gender, level) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.level = level;
    }
}

class Sponsor {
    name: string;
    age: number;
    gender: string;
    company: string;
    hiredStudents: number;

    introduce() {
        console.log(`Hi I'm ` + `${this.name}` +`, a ` + `${this.age} ` + `year old ` + `${this.gender} ` + `who represents ` + `${this.company} ` + `and hired ` + `${this.hiredStudents} ` + `students so far.`);
    }

    hire() {
        this.hiredStudents++;
    }

    getGoal() {
        console.log("My goal is: Hire brilliant junior software developers.");
    }

    constructor(name, age, gender, company) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.company = company;
        this.hiredStudents = 0;
    }
}

class Cohort {
    name: string;
    students: string[];
    mentors: string[];

    addStudent(Student) {
        this.students.push(Student);
    }

    addMentor(Mentor) {
        this.mentors.push(Mentor);
    }

    info() {
        console.log(`The` + `${this.name}` + ` cohort has` + `${this.students.length}` + ` students and` + `${this.mentors.length}` + `mentors`);
    }

    constructor(name: string, students: string[], mentors: string[]) {
        this.students = students;
        this.mentors = mentors;
        this.name = name;
    }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person('Jane Doe', 30, 'female');
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student('Jane Doe', 30, 'female', 'The School of Life');
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor('Jane Doe', 30, 'female', 'intermediate');
people.push(mentor);
let sponsor = new Sponsor('Jane Doe', 30, 'female', 'Google');
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(sponsor);
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();