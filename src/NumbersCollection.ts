import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  data: number[];

  constructor(data: number[]) {
    super();
    this.data = data;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const lefthand = this.data[leftIndex];
    const righthand = this.data[rightIndex];
    this.data[leftIndex] = righthand;
    this.data[rightIndex] = lefthand;
  }

  get length(): number {
    return this.data.length;
  }
}
