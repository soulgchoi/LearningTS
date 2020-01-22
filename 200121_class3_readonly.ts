// readonly 가 선언된 클래스 프로퍼티는 선언시, 또는 생성자 내부에서만 값을 할당한다.
// 그 외의 경우에는 오직 읽기만 가능하다.
// 상수의 선언에 주로 사용한다.

class Foo {
    private readonly MAX_LEN: number = 5;
    private readonly MSG: string;

    constructor() {
        this.MSG = 'hello';
    }

    log() {
        // readonly 는 재할당 금지
        this.MAX_LEN = 10;
        // Cannot assign to 'MAX_LEN' because it is a read-only property.
        this.MSG = 'Hi';
        // Cannot assign to 'MSG' because it is a read-only property.

        console.log(`MAX_LEN: ${this.MAX_LEN}`);  // MAX_LEN: 5
        console.log(`MSG: ${this.MSG}`);  // MSG: hello
    }
}

new Foo().log();