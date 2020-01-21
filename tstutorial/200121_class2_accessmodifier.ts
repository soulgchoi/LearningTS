class Foo {
    public x: string;
    protected y: string;
    private z: string;

    constructor(x: string, y: string, z: string) {
        // 모두 클래스 내부에서 참조 가능하다.
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

const foo = new Foo('x', 'y', 'z');

// public 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 가능하다.
console.log(foo.x);

// protected 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
// console.log(foo.y);
// Error: 'string' 형식에 'y' 속성이 없습니다.

// private 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
// console.log(foo.z);
// Error: 'string' 형식에 'z' 속성이 없습니다.

class Bar extends Foo {
    constructor(x: string, y: string, z: string) {
        super(x, y, z);

        // public 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
        console.log(this.x);

        // protected 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
        console.log(this.y);

        // private 접근 제한자는 자식 클래스 내부에서 참조할 수 없다.
        // console.log(this.z);
        // Error: 'z' 속성은 private이며 'Foo' 클래스 내에서만 액세스할 수 있습니다.
    }
}