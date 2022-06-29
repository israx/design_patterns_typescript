enum OSCONFIG {
  WINDOWS,
  WEB,
  IOS,
}

abstract class Dialog {
  render() {
    var button: ButtonDialog = this.createButton();

    button.render();
  }
  abstract createButton(): ButtonDialog;
}

class WindowsDilog extends Dialog {
  createButton(): ButtonDialog {
    return new WindowsButton();
  }
}

class WebDialog extends Dialog {
  createButton(): ButtonDialog {
    return new WebButton();
  }
}

interface ButtonDialog {
  render(): void;
  onClick(f: (button: ButtonDialog) => void): void;
}

class WindowsButton implements ButtonDialog {
  render(): void {
    // Render a button in windows style
    console.log("rendering button with windows interface");
  }
  onClick(f: (button: ButtonDialog) => void): void {
    f(this);
  }
}

class WebButton implements ButtonDialog {
  render(): void {
    // Render a button in web style
    console.log("rendering button with web interface");
  }
  onClick(f: (button: ButtonDialog) => void): void {
    f(this);
  }
}

class Aplication {
  private dialog: Dialog | undefined;

  private config: OSCONFIG;

  constructor(config: OSCONFIG) {
    this.config = config;
  }
  initialize() {
    if (this.config === OSCONFIG.WEB) {
      this.dialog = new WebDialog();
    } else if (this.config === OSCONFIG.WINDOWS) {
      this.dialog = new WindowsDilog();
    }

    this.dialog && this.dialog.render();
  }
}

const aplication = new Aplication(OSCONFIG.WEB);

aplication.initialize();
