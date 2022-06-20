class Client {}

interface IteratorInterface {
  getNext(): void;
  hasmore(): boolean;
}

interface IterableCollection {
  createIterator(): IteratorInterface;
}

class ConcreteCollection implements IterableCollection {
  createIterator(): IteratorInterface {
    throw new Error("Method not implemented.");
  }
}

class ConcreteIterator implements IteratorInterface {
  private collection: ConcreteCollection;

  constructor(collection: ConcreteCollection) {
    this.collection = collection;
  }

  getNext(): void {
    throw new Error("Method not implemented.");
  }
  hasmore(): boolean {
    throw new Error("Method not implemented.");
  }
}
