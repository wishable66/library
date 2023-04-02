interface Book {
  title: string;
  author: string;
  pages: number;
  read: boolean;
}

let myLibrary = [];

function Book(title: string, author: string, pages: number, read: boolean) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function info() {
  return `${this.title} by ${this.author}, has ${this.pages} pages, and ${
    this.read ? 'has been read' : 'has not been read'
  } `;
};

function addBookToLibrary(book: Book) {
  myLibrary.push(book);
}

const thehobbit: Book = new Book('The Hobbit', 'J.R.R Tolken', 295, false);

addBookToLibrary(thehobbit);

console.log(myLibrary);
