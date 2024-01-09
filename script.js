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

// Display books in library under books container
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

// Functions for displaying and closing dialog box

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#openDialogButton");
const closeButton = document.querySelector("#closeDialogButton");

// Show dialog when showButton pressed
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// Close dialog when closeButton pressed
closeButton.addEventListener("click", () => {
    dialog.close();
});

// Add book in form to library

const submitButton = document.querySelector("#submitFormButton");

submitButton.addEventListener("click", (event) => {
    // Select input elements from form
    let bookTitle = document.querySelector("#title");
    bookTitle = bookTitle.value;

    let bookAuthor = document.querySelector("#author");
    bookAuthor = bookAuthor.value;

    let bookTotalPages = document.querySelector("#totalPages");
    bookTotalPages = bookTotalPages.value;

    let bookReadStatus = document.querySelector("#readStatus");

    // If bookread status is checked, set read status to true, otherwise set to false
    if (bookReadStatus.checked == true) {
        bookReadStatus = true;
    } else {
        bookReadStatus = false;
    }

    // Create new book with input elements
    let newBook = new Book(bookTitle, bookAuthor, bookTotalPages, bookReadStatus);

    // Add new book to library
    addBookToLibrary(newBook);

    // Clear current books container
    bookContainer.textContent = "";

    // Close dialog
    dialog.close();

    // Reset form
    document.querySelector("form").reset();

    // Display book in library
    displayLibrary();
});
