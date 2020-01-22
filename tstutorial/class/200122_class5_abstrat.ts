abstract class Animal {
    // 추상 메서드
    abstract makeSound(): void;
    // 일반 메서드
    move(): void {
        console.log('roaming the earth ...');
    }
}

// 직접 인스턴스를 생성할 수 없다.
// new Animal();
// Error: 추상 클래스의 인스턴스를 만들 수 없습니다.

class Dog extends Animal {
    // 추상 클래스를 상속한 클래스는 추상 클래스의 추상 메서드를 반드시 구현해야 한다.
    // 구현하지 않으면,
    // Error: 비추상 클래스 'Dog'은(는) 'Animal' 클래스에서 상속된 추상 멤버 'makeSound'을(를) 구현하지 않습니다.
    makeSound() {
        console.log('bowwow');
    }
}

// 인스턴스를 생성할 수 있다.
const myDog = new Dog();
myDog.makeSound();
myDog.move();