const myLibrary = [];

// Book Constructor
function Book(author, title, total_pages, read_status) {
    this.author = author;
    this.title = title;
    this.total_pages = total_pages;
    this.read_status = read_status;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}
