import { ButtonAnt } from "./Button";
import { TextFieldAnt } from "./TextField";

export class AntFactory implements WidgetFactory {
  buildTheme(): void {
    var button = new ButtonAnt();
    var textField = new TextFieldAnt();
  }
}
