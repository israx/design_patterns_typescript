class StocksSubject {
  private observers: Stock[] = [];
  subscribe(observer: Stock) {
    this.observers.push(observer);
  }
  unsubscribe(observer: Stock) {
    this.observers = this.observers.filter((ob) => ob != observer);
  }

  notify(concreteSub: StocksSubject) {
    this.observers.forEach((ob) => ob.update(concreteSub));
  }
}

// concrete subject
class StockDataSource extends StocksSubject {
  private state: StockState = stocksState;

  getPopularStocks() {
    return this.state.popularStocks;
  }

  getAllStocks() {
    return this.state.stocks;
  }
  updateStocks() {
    this.state.stocks = [...this.state.stocks, "IBM"];
    this.notify(this);
  }
}

interface Stock {
  update(subject: StocksSubject): void;
}

class StatusBar implements Stock {
  update(subject: StocksSubject): void {
    if (subject instanceof StockDataSource)
      return console.log(subject.getPopularStocks());
  }
}

class StockListView implements Stock {
  update(subject: StocksSubject): void {
    if (subject instanceof StockDataSource) console.log(subject.getAllStocks());
  }
}

interface StockState {
  popularStocks: string[];
  stocks: string[];
}

const stocksState: StockState = {
  popularStocks: ["TESLA", "APPLE", "AMAZON"],
  stocks: ["TESLA", "APPLE", "AMAZON", "NETFLIX", "TWITTER"],
};
