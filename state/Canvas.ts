abstract class CanvasState {
  abstract mouseUp(): void;
  abstract mouseDown(): void;
}

class Brush extends CanvasState {
  mouseUp(): void {
    console.log("brush up");
  }

  mouseDown(): void {
    console.log("brush down");
  }
}

class Eraser extends CanvasState {
  mouseUp(): void {
    console.log("eraser up");
  }
  mouseDown(): void {
    console.log("eraser down");
  }
}

class Pointer extends CanvasState {
  mouseUp(): void {
    console.log("pointer up");
  }
  mouseDown(): void {
    console.log("pointer down");
  }
}
class Canvas {
  private state: CanvasState;

  constructor(state: CanvasState) {
    this.state = state;
  }

  mouseUp() {
    this.state.mouseDown();
  }
  mouseDown() {
    this.state.mouseDown();
  }

  setState(state: CanvasState) {
    this.state = state;
  }
}

const canvas = new Canvas(new Pointer());
canvas.mouseDown();
canvas.mouseUp();
canvas.setState(new Brush());
canvas.mouseDown();
canvas.mouseUp();
