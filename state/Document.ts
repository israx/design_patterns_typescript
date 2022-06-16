class Documents {
  private state: DocumentState;

  constructor(initialState: DocumentState) {
    this.state = initialState;
  }

  changeState(state: DocumentState) {
    this.state = state;
  }

  publish() {
    this.state.publish(this);
  }

  getState(): DocumentState {
    return this.state;
  }
}

enum UserStatus {
  ADMIN = 1,
  PUBLISHER = 2,
  AUTHOR = 3,
}
const user = {
  status: UserStatus.ADMIN,
};

// Interface
abstract class DocumentState {
  abstract publish(document: Documents): void;
}

// Application States: DRAFT, MODERATION, PUBLISHED
class Draft implements DocumentState {
  publish(document: Documents): void {
    if (user.status === UserStatus.ADMIN) {
      return document.changeState(new Published());
    }

    document.changeState(new Moderation());
  }
}

class Published implements DocumentState {
  publish(document: Documents): void {
    console.log("document is published");
  }
}

class Moderation implements DocumentState {
  publish(): void {
    console.log("document is being reviewed");
  }
}

const documents: Documents = new Documents(new Draft());

console.log(documents.getState());

documents.publish();

console.log(documents.getState());
