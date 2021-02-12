// make String() constructor by myself!

class MyString {
  private inputValue: string[];

  constructor(inputValue: any) {
    this.inputValue = [...`${inputValue}`];
  }

  toString(): string {
    return this.inputValue.join('');
  }

  charAt(index: number): string {
    return this.inputValue[index];
  }

  concat(anotherInput: string): string {
    return `${this.inputValue}${anotherInput}`;
  }

  slice(startIndex, endIndex): string {
    let strToReturn: string = '';
    for (let i = startIndex; i < endIndex; i++) {
      strToReturn = strToReturn + this.inputValue[i];
    }
    return strToReturn;
  }  
}