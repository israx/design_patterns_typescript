import { MaterialDesignFactory } from "./material_design/material";

class ContactForm {
  static render(factory: WidgetFactory) {
    factory.buildTheme();
  }
}

ContactForm.render(new MaterialDesignFactory());
