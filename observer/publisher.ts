interface Subscriber {
  update(context: Publisher): void;
}

class Publisher {
  private subscribers: Subscriber[] = [];
  private state: PublisherState = {
    news: [],
    location: "queens, ny, 54321",
  };

  subscribe(s: Subscriber) {
    this.subscribers.push(s);
  }

  unsubscribe(s: Subscriber) {
    this.subscribers = this.subscribers.filter((sub) => sub != s);
  }

  notifySubscribers() {
    if (this.subscribers.length < 1)
      return new Error("there are no subscribers at the moment");

    this.subscribers.forEach((sub) => sub.update(this));
  }

  mainBusinessLogic() {
    this.state = publisherState;
  }
}

class Israel implements Subscriber {
  update(context: Publisher): void {
    console.log("Israel reading update");
    console.log(context);
  }
}

class John implements Subscriber {
  update(context: Publisher): void {
    console.log("John reading update");
    console.log(context);
  }
}

// Data

interface Article {
  title: string;
  date: Date;
  description: string;
}
interface PublisherState {
  news: Article[];
  location: string;
}

const sportsArticle: Article = {
  title: "sport title 1",
  description: "description about sports",
  date: new Date(),
};

const scienceArticle: Article = {
  title: "science title 1",
  description: "description about science",
  date: new Date(),
};

const publisherState: PublisherState = {
  news: [sportsArticle, scienceArticle],
  location: "bronx, ny, 12345",
};

// UI

const publisher = new Publisher();

publisher.subscribe(new Israel());
publisher.subscribe(new John());
publisher.notifySubscribers();
