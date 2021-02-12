// make String() constructor by myself!
class MyString {
  private inputValue: any;
  private stringifiedInputValue: any;
  private converToArr: any;

  constructor(inputvalue: any) {
    this.inputValue = inputvalue;
    this.stringifiedInputValue = `${inputvalue}`;
    this.converToArr = [...this.stringifiedInputValue];
  }

  toString(): string {
    return this.stringifiedInputValue;
  }

  charAt(index: number): any {
    return this.converToArr[index];
  }

  concat(anotherInput: string): string {
    return `${this.stringifiedInputValue}${anotherInput}`;
  }

  slice(startIndex, endIndex): string {
    let strToReturn: string = '';
    for (let i = startIndex; i < endIndex; i++) {
      strToReturn = strToReturn + this.converToArr[i];
    }
    return strToReturn;
  }
  
  valueOf(): string {
    return this.inputValue;
  }
};

const test = new MyString(123);
console.log(
  test,
  test.charAt(1),
  test.slice(0, 1),
  test.valueOf()
);