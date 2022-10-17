export default class LinkedListNode<T = unknown> {
  value: T | null = null;
  next: LinkedListNode<T> | null = null;
  prev: LinkedListNode<T> | null = null;

  constructor(value) {
    this.value = value;
  }
}
