interface Book {
  title: string;
  coverPage: string;
  author: string;
  pages: number;
  read: boolean;
}

let myLibrary = [];

const library: HTMLDivElement = document.querySelector('.library');
const form: HTMLFormElement = document.querySelector('form#addnewbook');

function Book(
  title: string,
  coverPage: string,
  author: string,
  pages: number,
  read: boolean
) {
  this.title = title;
  this.coverPage = coverPage;
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

function createButtonsDiv() {
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');

  const hasReadButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  const trashIcon = document.createElement('img');

  hasReadButton.classList.add('has-read');
  deleteButton.classList.add('delete');

  trashIcon.setAttribute('src', 'assets/trash-can-outline.svg');
  trashIcon.setAttribute('alt', 'delete');

  deleteButton.appendChild(trashIcon);

  buttonsDiv.appendChild(hasReadButton);
  buttonsDiv.appendChild(deleteButton);

  return buttonsDiv;
}

function clearLibrary() {
  while (library.firstChild) {
    library.removeChild(library.firstChild);
  }
}

function displayBooks(books) {
  clearLibrary();
  books.forEach((book, index) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.setAttribute('data-index', String(index));

    const bookTitleElement = document.createElement('h1');
    bookTitleElement.classList.add('book-title');

    const coverPageElement = document.createElement('img');
    coverPageElement.classList.add('cover-page');

    const bookAuthorElement = document.createElement('p');
    bookAuthorElement.classList.add('book-author');

    const bookPagesElement = document.createElement('p');
    bookPagesElement.classList.add('book-pages');

    const buttonsDiv = createButtonsDiv();

    const hasRead = buttonsDiv.firstChild;

    Object.entries(book).map(([key, value]) => {
      if (key === 'title') {
        bookTitleElement.textContent = String(value);
      }

      if (key === 'coverPage') {
        coverPageElement.setAttribute('src', String(value));
      }

      if (key === 'author') {
        bookAuthorElement.textContent = String(value);
      }

      if (key === 'pages') {
        bookPagesElement.textContent = `Pages: ${String(value)}`;
      }

      if (key === 'read') {
        hasRead.textContent = Boolean(value) ? 'Read' : 'Not Read';
      }
    });
    bookElement.appendChild(bookTitleElement);
    bookElement.appendChild(coverPageElement);
    bookElement.appendChild(bookAuthorElement);
    bookElement.appendChild(bookPagesElement);
    bookElement.appendChild(buttonsDiv);

    library.appendChild(bookElement);
  });
}

// TODO: Fix checkbox field with creating new book
// TODO: Add in functionally for delete and clicking "Read" button

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = (
    form.querySelector('input[name="title"]') as HTMLInputElement
  ).value;
  const bookCoverPage = (
    form.querySelector('input[name="cover"]') as HTMLInputElement
  ).value;
  const bookAuthor = (
    form.querySelector('input[name="author"]') as HTMLInputElement
  ).value;
  const bookPages = (
    form.querySelector('input[name="pages"]') as HTMLInputElement
  ).value;
  const bookHasRead = (
    form.querySelector('input[name="hasread"]') as HTMLInputElement
  ).value;
  if (bookHasRead === '1') {
    addBookToLibrary(
      new Book(bookTitle, bookCoverPage, bookAuthor, parseInt(bookPages), true)
    );
  } else {
    addBookToLibrary(
      new Book(bookTitle, bookCoverPage, bookAuthor, parseInt(bookPages), false)
    );
  }
  displayBooks(myLibrary);
});
