import LinkedListNode from './linked-list-node';

export default class LinkedList<T> {
  #first: LinkedListNode | null = null;
  #last: LinkedListNode | null = null;

  get first(): LinkedListNode | null {
    return this.#first;
  }

  get last(): LinkedListNode | null {
    return this.#last;
  }

  push(value: T): this {
    const newNode = new LinkedListNode(value);
    if (!this.#first) {
      this.#first = newNode;
    }
    if (this.#last) {
      this.#last.next = newNode;
      newNode.prev = this.#last;
    }
    this.#last = newNode;
    return this;
  }

  pop(): this {
    if (!this.#last) {
      throw new Error('Linked list has not elements');
    }
    const lastNode = this.#last;
    if (!lastNode.prev) {
      this.#first = null;
    } else {
      lastNode.prev.next = null;
    }
    this.#last = lastNode.prev;
    return this;
  }

  unshift(value): this {
    const newNode = new LinkedListNode(value);
    if (!this.#last) {
      this.#last = newNode;
    }
    if (this.#first) {
      this.#first.prev = newNode;
      newNode.next = this.#first;
    }
    this.#first = newNode;
    return this;
  }

  shift(): this {
    if (!this.#first) {
      throw new Error('Linked list has not elements');
    }
    const firstNode = this.#first;
    if (!firstNode.next) {
      this.#first = null;
    } else {
      firstNode.next.prev = null;
    }
    this.#first = firstNode.next;
    return this;
  }
}
