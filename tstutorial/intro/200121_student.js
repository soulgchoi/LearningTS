"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _200121_person_1 = require("./200121_person");
class Student extends _200121_person_1.Person {
    study() {
        return `${this.name} is studying.`;
    }
}
const student = new Student('Lee');
console.log(student.sayHello());
console.log(student.study());
//# sourceMappingURL=200121_student.js.map