class Slide {
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}

class PdfDocument {
  slides: string[] = [];

  addSlide(value: string) {
    this.slides.push(value);
  }
}

class MoviDocument {
  slides: string[] = [];

  addSlide(value: string) {
    this.slides.push(value);
  }
}

interface PresentationBuilder {
  addSlice(slide: Slide): void;
}

class PdfDocumentBuilder implements PresentationBuilder {
  private document = new PdfDocument();
  addSlice(slide: Slide): void {
    this.document.addSlide(slide.content);
  }

  getPdfDocument() {}
}

class MoviBuilder implements PresentationBuilder {
  private document = new MoviDocument();
  addSlice(slide: Slide): void {
    this.document.addSlide(slide.content);
  }
  getPdfDocument() {
    return this.document;
  }
}

class Presentation {
  private slides: Slide[] = [
    new Slide("title 1"),
    new Slide("title 2"),
    new Slide("title 3"),
    new Slide("title 4"),
  ];

  export(builder: PresentationBuilder) {
    this.slides.forEach((slide) => builder.addSlice(slide));
  }

  addNewSlide(slide: Slide) {
    this.slides.push(slide);
  }
}

const presentation = new Presentation();

presentation.addNewSlide(new Slide("new slide"));
presentation.export(new PdfDocumentBuilder());
