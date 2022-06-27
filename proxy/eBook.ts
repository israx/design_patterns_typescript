type EbookType = {
  [key: string]: Ebook | EbookProblem;
};

// The problem

console.log("Problem");
class LibraryProblem {
  private ebooks: EbookType = {};

  fileNames = ["a", "b", "c", "d"];
  constructor() {
    this.fileNames.forEach(
      (name) => (this.ebooks[name] = new EbookProblem(name))
    );
  }

  search(ebook: string): EbookProblem {
    return this.ebooks[ebook] as EbookProblem;
  }
}

class EbookProblem {
  private fileName: string;
  constructor(fileName: string) {
    this.fileName = fileName;

    this.load();
  }

  private load(): void {
    console.log("Loading the ebook " + this.fileName);
  }

  public show(): void {
    console.log("showing the ebook");
  }
}

const library = new LibraryProblem();

const ebook = library.search("a");
console.log(ebook);
ebook.show();

// The solution
console.log("Solution");
interface Ebook {
  show(): void;
  getFileName(): string;
}

class Library {
  private ebooks: EbookType = {};

  constructor() {}
  add(eBook: Ebook) {
    this.ebooks[eBook.getFileName()] = eBook;
  }
  openEbook(ebook: string) {
    this.ebooks[ebook].show();
  }
}

class RealEbook implements Ebook {
  fileName: string;
  constructor(fileName: string) {
    this.fileName = fileName;

    this.loadEbook();
  }
  loadEbook() {
    console.log("Loading ebook data");
  }
  getFileName(): string {
    return this.fileName;
  }
  show() {
    console.log(`showing ebook ${this.fileName}`);
  }
}

class EbookProxy implements Ebook {
  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }
  getFileName(): string {
    return this.fileName;
  }

  ebook: RealEbook | null = null;
  show(): void {
    if (!this.ebook) this.ebook = new RealEbook(this.fileName);
    this.ebook.show();
  }
}

const librarySolution = new Library();

const fileNames = ["a", "b", "c", "d"];
fileNames.forEach((name) => librarySolution.add(new EbookProxy(name)));
librarySolution.openEbook("a");
