import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  data: string;

  constructor(data: string) {
    super();
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const arrayOfChars = this.data.split('');

    const lefthand = arrayOfChars[leftIndex];
    const righthand = arrayOfChars[rightIndex];
    arrayOfChars[leftIndex] = righthand;
    arrayOfChars[rightIndex] = lefthand;

    this.data = arrayOfChars.join('');
  }
}
