interface DialogBox {
  notify(sender: UIControl, event: string): void;
}

class ArticlesDialogBox implements DialogBox {
  newsArticle: TextField = new TextField(this);
  sportsArticle: TextField = new TextField(this);
  submit: Button = new Button(this);
  notify(sender: UIControl, event: string): void {
    if (sender instanceof TextField) {
      if (!sender.getSelection()) {
        this.submit.setIsDisabled();
      }
    }
  }

  uiInteraction(input: string | null) {
    this.newsArticle.setSelection(input);
    const newsArticleSelection = this.newsArticle.getSelection();

    const submitButton = this.submit.getIsDisabled();

    console.log({ newsArticleSelection, submitButton });
  }
}

class UIControl {
  // establish the link between the UI and the mediator
  protected owner: DialogBox;

  constructor(mediator: DialogBox) {
    this.owner = mediator;
  }
}

class TextField extends UIControl {
  private selection?: string | null;

  getSelection(): string | null | undefined {
    return this.selection;
  }
  setSelection(value: string | null) {
    this.selection = value;
    this.owner.notify(this, "set selection");
  }
}

class Button extends UIControl {
  private isDisabled: boolean = true;

  setIsDisabled() {
    this.isDisabled = !this.isDisabled;
    this.owner.notify(this, "set disabled");
  }

  getIsDisabled(): boolean {
    return this.isDisabled;
  }
}

const articles = new ArticlesDialogBox();

articles.uiInteraction("hello");
articles.uiInteraction(null);
