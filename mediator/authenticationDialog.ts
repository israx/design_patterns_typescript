interface Mediator {
  notify(sender: Component, event: string): void;
}

type Callback = (value: string) => void;

class Component {
  dialog: Mediator;
  constructor(dialog: Mediator) {
    this.dialog = dialog;
  }

  onClick(fn: Callback) {
    fn("on click method");
  }

  onChange(fn: Callback) {
    fn("on change method");
  }
}

class TextBox extends Component {}

class CheckBox extends Component {}

class AuthenticationDialog implements Mediator {
  private usernameTextBox = new TextBox(this);
  private lastNameTextBox = new TextBox(this);
  private universityCheckBox = new CheckBox(this);

  notify(sender: Component, event: string): void {}
}
