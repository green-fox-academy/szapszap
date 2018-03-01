/* Create Student and Teacher classes
-Student
learn()
question(teacher) -> calls the teachers answer method
-Teacher
teach(student) -> calls the students learn method
answer() */

class Student {
    learn() {
        console.log("I learned what recursion is!")
    }

    question(teacher) {
        teacher.answer();
    }
}

class Teacher {
    teach(student) {
        student.learn();
    }

    answer() {
        console.log("Now you know what recursion is.")
    }
}

let Peti = new Student;
let Gabibá = new Teacher;

console.log(Peti.question(Gabibá));
console.log(Gabibá.teach(Peti));
