import { ButtonMaterial } from "./Button";
import { TextFieldMaterial } from "./TextField";

export class MaterialDesignFactory implements WidgetFactory {
  buildTheme(): void {
    var button = new ButtonMaterial();
    var textField = new TextFieldMaterial();
  }
}
