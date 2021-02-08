import { skipPartiallyEmittedExpressions } from "typescript";

// interface for information needed to making a new Person instance
interface IPersonInfo {
  name: string;
  age: number;
  isMarried: boolean;
}

// private, public practice with TS
class Person {
  // the public keyword can be skipped, but write down for implictiy
  public name: string;
  public age: number;
  // private keyword mean this property can't be accessed from outside of this Class
  // accessable only in this Method;
  private isMarried: boolean;

  constructor(personInfo: IPersonInfo) {
    this.name = personInfo.name;
    this.age = personInfo.age;
    this.isMarried = personInfo.isMarried;
  }

  // getter and setter for this properies
  get personName(): string {
    return this.name;
  }

  set personName(newName: string) {
    this.name = newName;
  }

  get personAge(): number {
    return this.age;
  }

  set personAge(newAge: number) {
    this.age = newAge;
  }

  // changing the property 'isMarried' is available only with this method, changeMartialStatus
  changeMartialStatus() {
    this.isMarried = !this.isMarried;
  }

  // a method to introduce myself
  introduceMyself(): string {
    return `hi my name is ${this.name} and my age is ${this.age}`;
  }
};

const inseobPerson = new Person({
  name: 'inseob',
  age: 26,
  isMarried: false,
});

// interface for programmer from interfae of person
interface iProgrammerInfo extends IPersonInfo {
  position: string;
};

// Class Programmer inherited from Class Person 
class Programmer extends Person {
  private position: string;
  constructor(personInfo: IPersonInfo, position) {
    super(personInfo);
    this.position = position;
  }
  introduceMyself(): string {
    return `hi, my name is ${this.name} and i'm a ${this.position} developer!`
  }
  get devPosition(): string {
    return this.position;
  }

  set assignPosition(newPosition: string) {
    this.position = newPosition;
  }
};

const inseobBackend = new Programmer({
  name: 'inseob',
  age: 26,
  isMarried: false,
}, 'backend');

console.log(inseobBackend);
console.log(inseobBackend.devPosition);
inseobBackend.assignPosition = 'frontend';
console.log(inseobBackend);

// same method but work in different way because of method over-riding(not overloading)
// overriding is a case of polymorphism
console.log(inseobBackend.introduceMyself());
console.log(inseobPerson.introduceMyself());

