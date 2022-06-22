enum Events {
  CLICK = 0,
  ONCHANGE = 1,
  CHECK = 2,
  KEYPRESS = 3,
}

interface Mediator {
  notify(sender: Component, event: Events): void;
}

type Callback = (value: string) => void;

class Component {
  dialog: Mediator;
  constructor(dialog: Mediator) {
    this.dialog = dialog;
  }

  onClick(fn: Callback) {
    this.dialog.notify(this, Events.CLICK);
  }

  onChange(fn: Callback) {
    this.dialog.notify(this, Events.ONCHANGE);
  }

  onKeyPress(fn: Callback) {
    this.dialog.notify(this, Events.KEYPRESS);
  }
}

class TextBox extends Component {}

class CheckBox extends Component {
  checked: boolean = false;
  check() {
    this.dialog.notify(this, Events.CHECK);
    this.checked = !this.checked;
  }
}

class ButtonComponent extends Component {}

class AuthenticationDialog implements Mediator {
  private title?: string;
  private loginOrRegister: boolean = false;

  // Login
  private loginUsername = new TextBox(this);
  private loginPassword = new TextBox(this);

  // Register
  private registerUsername = new TextBox(this);
  private registerEmail = new TextBox(this);
  private registerPassword = new TextBox(this);

  // Checkbox
  private loginOrRegisterChkBx = new CheckBox(this);

  // Buttons
  private ok = new ButtonComponent(this);
  private cancel = new ButtonComponent(this);

  notify(sender: Component, event: Events): void {
    if (sender == this.loginOrRegisterChkBx && event == Events.CHECK)
      if (this.loginOrRegisterChkBx.checked) this.title = "Login";
      // 1. Show login form components.
      // 2. Hide registration form components.
      else this.title = "Register";
    // 1. Show registration form components.
    // 2. Hide login form components

    if (sender == this.ok && event == Events.CLICK)
      if (this.loginOrRegisterChkBx.checked) {
      }
    // Try to find a user using login credentials.
    //if(!found)
  }
}
