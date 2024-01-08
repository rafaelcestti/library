const library = [];

// Book Constructor
function Book(title, author, totalPages, readStatus) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.readStatus = readStatus;
}

// Push individual books to library array
function addBookToLibrary(book) {
    library.push(book);
}

const bookContainer = document.querySelector(".bookContainer");

// Display books in library under books container HTML element
function displayLibrary() {
    for (let book of library) {
        // Create book element
        let currentBook = document.createElement("div");
        currentBook.setAttribute("class", "book");

        // Create book title element & set appropiate content
        let bookTitle = document.createElement("h1");
        bookTitle.textContent = book.title;
        currentBook.appendChild(bookTitle);

        // Create book author element & set appropiate content
        let bookAuthor = document.createElement("h2");
        bookAuthor.textContent = `By: ${book.author}`;
        currentBook.appendChild(bookAuthor);

        // Create book pages element & set appropiate content
        let bookPages = document.createElement("h3");
        bookPages.textContent = `${book.totalPages} pages`;
        currentBook.appendChild(bookPages);

        // Create book read status element & set appropiate content
        let bookReadStatus = document.createElement("h3");
        bookReadStatus.textContent = `${book.readStatus ? "Read" : "Not Read"}`;
        currentBook.appendChild(bookReadStatus);

        // Append current book to the book container
        bookContainer.appendChild(currentBook);
    }
}
