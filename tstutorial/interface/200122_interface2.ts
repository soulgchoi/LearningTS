// 인터페이스를 함수의 타입으로 사용할 수 있다.
// 이 때 인터페이스에 타입이 선언된 파라미터 리스트와 리턴 타입을 정의한다.

interface SquareFunc {
    (num: number): number;
}

const squareFunc: SquareFunc = function (num: number) {
    return num * num;
}

console.log(squareFunc(10));  // 100