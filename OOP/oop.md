# 4 main concepts of OOP

## inheritance
부모가 자식에게 유전 형질을 물려주는 것처럼, OOP도 클래스간의 inheritance 가 가능하다.

## aggregation
한 요소를 다양한 문제로 쪼개고, 그 쪼갠 것들을 모아(aggregate)시켜 다시 그 쪼개기 전 요소로 만든다.
이는 복잡하고 큰 하나의 문제를 통제 가능하고 작은 여러개의 문제로 치환하여 각 문제를 해결한 뒤 합쳐서 큰 문제를 해결하는 divide and conquer 방식을 사용할 수 있게 한다.

## polymorphism
method overriding 이 대표적인 예시이다.

Person 이라는 class 를 만들었고, 그 안에 introduceMyself() 라는 method 를 만들었다고 가정하자.
그리고 그 Person class 를 가지고 Programmer 라는 class 를 만들었는데, introduceMyself 라는 method 를 상속하였으나 조금 변경하여 수정하였다고 해보자.
이 상황에서는 Person 이란 class 로 찍어낸 instance도, 그리고 Programmer 라는 class 로 찍어낸 instance 도 전부 introduceMyself 라는 method 를 가지고있다. 
그러나, 같은 introduceMyself 라고 하여도 Programmer 의 method 와 Person 의 method 는 다르게 동작한다.

같은 method 를 상속받더라도 다른 방식으로 개조해서 사용하는 이런 상황을 method overriding 이라고 하고,
이런 식으로 한 형질을 물려받더라도 다른 식으로 개조하여 쓸 수 있는 상황을 가능하게 하는 OOP 의 개념이 바로 polymorphism 이다.

## encapsulization
스마트폰을 생각해보면 된다. 우리는 스마트폰의 앱 아이콘을 눌러 앱을 사용하고, 작업 관리자를 켜 앱을 지우는 식으로 앱을 지운다.
그러나 그게 어떻게 돌아가는지는(Under the hood) 알지 못한다. 정확히 말하면 '굳이 알 필요가 없다'

이런 식으로 모든 과정을 알지 못 하더라도 Object 와 그 method 를 사용하게 할 수 있는 개념이 encapsulization 이다.\

### public, private
encapsulization 의 개념에서 이어지는 access modifier 라는 기능이다. 

public 의 경우 obejct 의 밖에서도 object 의 안에 있는 property 나 method 를 manipulate 할 수 있게 해준다.
그리고 사실 작성하지 않아도 된다. 작성하지 않는다면 자동으로 public method/property 로 간주하나, 만약 private 을 사용하게 되는 경우 public 은 public 임을 명료하게 나타내주기 위해 작성하는 것이 조금 더 좋다. 

private 의 경우는 object 의 안에서 그 property / method 를 작동할 수 있게끔 허용한 방식으로만 접근할 수 있다.

```tsx
class Dog {
  private name: string;
  private sex: string;
  private age: number;

  constructor(
    name, 
    sex, 
    age,
  )

  this.name = name;
  this.sex = sex;
  this.age = age;

  get nameIs(): string {
    return this.name;
  }

  set nameIs(newName: string) {
    this.name = newName;
  }
}
```

이렇게 `public` 과 `private` 으로 access modifier 를 달아준 property 들이 있다. 

`const cuteDog = new Dog('barkie', 'male', 2)` 라는 `cuteDog` 을 만들어주고, 이 `cuteDog` 의 name 을 dot / bracket notation 을 통해 외부에서 직접 접근/수정하려고 하면 `private` 으로 묶여있는 property 이기 때문에 접근할 수 없으며 nameIs 라는 getter / setter 를 통해서만 접근이 가능하다. 