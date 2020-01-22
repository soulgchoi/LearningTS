/* 
    정적 타이핑
    
    변수에 할당할 값의 타입에 따라 사전에 타입을 명시적으로 선언하고,
    선언에 맞는 값을 할당하는 것을 정적 타이핑(Static Typing)이라고 한다.

    자바스크립트는 동적 타입(dynamic typed) 언어이다. 
    즉, 변수의 타입 선언 없이 값이 할당되는 과정에서 동적으로 타입을 추론(Type Inference)한다는 의미이다.
    타입 추론으로 변수의 타입이 결정된 후에도 같은 변수에 
    여러 타입의 값을 할당할 수 있는 것을 동적 타이핑(Dynamic Typing)이라고 한다.

    사용하기는 편하지만 예상치 못한 오류가 생길 수 있다.

    Type Script 의 가장 독특한 특징은 정적 타이핑을 지원한다는 것이다.
    타입을 명시적으로 선언하고, 이후에 타입을 변경할 수 없다.
    잘못된 타입 값이 할당 또는 반환되면 컴파일 단계에서 에러가 발생한다.
*/

let foo: string,
    bar: number,
    baz: boolean;

foo = 'Hello';
bar = 123;
// baz = 'true';  // Error: '"true"' 형식은 'boolean' 형식에 할당할 수 없습니다.

// 함수의 매개변수와 반환값에도 사용할 수 있다.
function add(x: number, y: number): number {
    return x + y;
}

console.log(add(10, 10));
// console.log(add('10', '10'));
// '"10"' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.
