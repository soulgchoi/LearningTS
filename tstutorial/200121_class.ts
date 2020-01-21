class Person2 {
    // 클래스 프로퍼티 사전 선언
    name: string;

    constructor(name: string) {
        // 클래스 프로퍼티에 값을 할당
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking.`);
    }
}

const person2 = new Person2('Lee');
person2.walk();