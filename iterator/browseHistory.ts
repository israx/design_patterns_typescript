interface IteratorInter {
  next(): void;
  current(): void;
  isDone(): void;
}

class BrowseHistory {
  private urls: string[] = [];
  push(url: string) {
    this.urls.push(url);
  }
  pop() {
    this.urls.splice(0, this.urls.length - 2);
  }
  createIterator() {
    return new ListIterator(this);
  }
}

class ListIterator implements IteratorInter {
  private browserHistory: BrowseHistory;

  constructor(browserHistory: BrowseHistory) {
    this.browserHistory = browserHistory;
  }

  next(): void {
    throw new Error("Method not implemented.");
  }
  current(): void {
    throw new Error("Method not implemented.");
  }
  isDone(): void {
    throw new Error("Method not implemented.");
  }
}

class ArrayIterator implements IteratorInter {
  next(): void {
    throw new Error("Method not implemented.");
  }
  current(): void {
    throw new Error("Method not implemented.");
  }
  isDone(): void {
    throw new Error("Method not implemented.");
  }
}
