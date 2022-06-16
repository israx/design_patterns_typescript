class NavigatorClass {
  strategy: NavigatorStrategy;

  constructor(strategy: NavigatorStrategy) {
    this.strategy = strategy;
  }

  buildRoute(start: number, finish: number) {
    this.strategy.buildRoute(start, finish);
  }

  changeStrategy(strategy: NavigatorStrategy) {
    this.strategy = strategy;
  }
}
// Interface
abstract class NavigatorStrategy {
  abstract buildRoute(start: number, finish: number): void;
}

// Strategies: Bike, Plane, Car

class Bike implements NavigatorStrategy {
  buildRoute(start: number, finish: number): void {
    console.log("implement strategy algorithm for bike route");
  }
}

class Plane implements NavigatorStrategy {
  buildRoute(start: number, finish: number): void {
    console.log("implement strategy algorithm for plane route");
  }
}
class Car implements NavigatorStrategy {
  buildRoute(start: number, finish: number): void {
    console.log("implement strategy algorithm for car route");
  }
}

const navigatorInstance = new NavigatorClass(new Bike());

navigatorInstance.buildRoute(1, 10);

navigatorInstance.changeStrategy(new Plane());

navigatorInstance.buildRoute(0, 10000);
