interface ComponentInterface {
  render(): void;
  clone(): ComponentInterface;
}

class Circle implements ComponentInterface {
  radius: string;
  color: string;

  constructor(radius: string, color: string) {
    this.radius = radius;
    this.color = color;
  }

  clone(): Circle {
    return new Circle(this.radius, this.color);
  }
  render(): void {}
}

class ContextMenu {
  duplicate(component: ComponentInterface): void {
    var newComponent = component.clone();
    // add target to our document
  }
}
