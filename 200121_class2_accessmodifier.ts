class Foo {
    /*
        접근 제한자가 선언된 생성자 파라미터 x 는 클래스 프로퍼티로 선언되고 자동으로 초기화된다.
        public 이 선언되었으므로 x 는 외부에서도 참조 가능하다.
    */
   constructor(public x: string) {}
}

const foo = new Foo('Hello');
console.log(foo);  // Foo {x: 'Hello'}
console.log(foo.x);  // Hello

class Bar {
    /*
        접근 제한자가 선언된 생성자 파라미터 x 는 멤버 변수로 선언되고 자동으로 초기화된다.
        private 이 선언되었으므로 x 는 클래스 내부에서만 참조 가능하다.
    */
   constructor(private x: string) {}
}

const bar = new Bar('Hello');

console.log(bar);

// console.log(bar.x);
// Error: 'x' 속성은 private이며 'Bar' 클래스 내에서만 액세스할 수 있습니다.


class Foo2 {
    // x2 는 생성자 내부에서만 유효한 지역 변수이다.
    constructor(x2: string) {
        console.log(x2);
    }
}

const foo = new Foo('Hello');
console.log(foo);  // Foo {]}