function multiply1(x: number, y: number): number {
    return x * y;
}

const multiply2 = (x: number, y: number): number => x * y;

console.log(multiply1(10, 2));
console.log(multiply2(10, 3));

// console.log(multiply1(true, 1));  에러

// 타입 선언

// boolean
let isDone: boolean = false;

// null
let n: null = null;

// undefined
let u: undefined = undefined;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "blue";
color = 'red';
let myName: string = `Lee`;
let greeting: string = `Hello, my name is ${ myName }.`;

// object
const obj: object = {};

// array
let list1: any[] = [1, 'two', true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3];  // 제네릭 배열 타입

// tuple: 고정된 요소 수만큼 타입을 미리 선언 후 배열 표현
let tuple: [string, number];
tuple = ['hello', 10];
// tuple = [10, 'hello'];  // Error
// tuple = ['hello', 10, 'world', 100];  // Error
// tuple.push(true);  // Error

// enum: 열거형은 숫자값 집합에 이름을 지정한 것이다.
enum Color1 { Red, Green, Blue };
let c1: Color1 = Color1.Green;

console.log(c1);  // 1

enum Color2 { Red = 1, Green, Blue };
let c2: Color2 = Color2.Green;

console.log(c2);  // 2

enum Color3 { Red = 1, Green = 2, Blue = 4 };
let c3: Color3 = Color3.Blue;

console.log(c3);  // 4

/* 
    any: 타입 추론(type inference)할 수 없거나 타입 체크가 필요 없는 변수에 사용.
    var 키워드로 선언한 변수처럼 어떤 타입의 값이라도 할당 할 수 있다.
*/
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;  // 완전 boolean

// void: 일반적으로 함수에서 반환값이 없을 경우 사용한다.
function warnUser(): void {
    console.log("This is my warning message");
}

// never: 결코 발생하지 않는 값
function infiniteLoop(): never {
    while (true) {}
}

function error(message: string): never {
    throw new Error(message);
}

