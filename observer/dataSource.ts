class Subject {
  private observers: Observer[] = [];
  subscribe(observer: Observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer: Observer) {
    this.observers = this.observers.filter((ob) => ob != observer);
  }

  notify(concreteSub: Subject) {
    this.observers.forEach((ob) => ob.update(concreteSub));
  }
}

class DataSource extends Subject {
  private data = "abcd";

  getData() {
    return this.data;
  }

  setData(value: string) {
    this.data = value;
    this.notify(this);
  }
}

interface Observer {
  update(context: Subject): void;
}

class SpreadSheet implements Observer {
  update(context: Subject): void {
    console.log(context);
  }
}

class Chart implements Observer {
  update(context: Subject): void {
    console.log(context);
  }
}
