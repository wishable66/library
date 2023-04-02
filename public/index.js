let myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.info = function info() {
    return `${this.title} by ${this.author}, has ${this.pages} pages, and ${this.read ? 'has been read' : 'has not been read'} `;
};
function addBookToLibrary(book) {
    myLibrary.push(book);
}
const thehobbit = new Book('The Hobbit', 'J.R.R Tolken', 295, false);
addBookToLibrary(thehobbit);
console.log(myLibrary);
