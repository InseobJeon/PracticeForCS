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
};

// make a new instance variable named 'inseob'
const inseob = new Person({
  name: 'Inseob',
  age: 26,
  isMarried: false,
});

console.log(inseob);
console.log(inseob.personName);
console.log(inseob.personAge);
inseob.changeMartialStatus();
console.log(inseob);
