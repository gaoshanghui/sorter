import { Sorter } from './Sorter';

class Node {
  data: number;
  next: Node | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    // create a new node with the new data.
    const node = new Node(data);

    // if head is null then point head(first linked item) to the new node.
    if (!this.head) {
      this.head = node;
      return;
    }

    // Loop through the linked list,
    // if the current tail has pointed to a node, then setting it points to the pointed node.
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    // add the node as the last item of the linked list
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('List is empty.');
    }

    let node: Node | null = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }

      node = node.next;
      counter++;
    }

    throw new Error('Index is out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty.');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    const rightHand = rightNode.data;

    leftNode.data = rightHand;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
