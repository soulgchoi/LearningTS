/*
    TypeScript 에서는 static 키워드를 클래스 프로퍼티에 사용할 수 있다.
    정적 클래스 프로퍼티는 인스턴스가 아닌 클래스 이름으로 호출하며
    클래스 인스턴스를 생성하지 않아도 호출할 수 있다.
*/

class Foo {
    // 생성된 인스턴스의 갯수
    static instanceCounter = 0;
    constructor() {
        // 생성자가 호출될 때마다 카운터 1씩 증가
        Foo.instanceCounter++;
    }
}

var foo1 = new Foo();
var foo2 = new Foo();

console.log(Foo.instanceCounter);  // 2
// console.log(foo2.instanceCounter)
// Error: Property 'instanceCounter' is a static member of type 'Foo'