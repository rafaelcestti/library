const library = [];

// Book Class
class Book {
    constructor(title, author, totalPages, readStatus) {
        this.title = title;
        this.author = author;
        this.totalPages = totalPages;
        this.readStatus = readStatus;
    }

    toggleReadStatus() {
        this.readStatus = !this.readStatus;
    }
}

// Push individual books to library array
function addBookToLibrary(book) {
    library.push(book);
}

// Remove book from library array
function removeBook(index) {
    library.splice(index, 1);
    displayLibrary();
}

const bookContainer = document.querySelector(".bookContainer");

// Display books in library under books container
function displayLibrary() {
    // Clear current books container
    bookContainer.textContent = "";

    for (let i = 0; i < library.length; i++) {
        // Create book element
        let currentBook = document.createElement("div");
        currentBook.setAttribute("class", "book");

        // Create book title element & set appropiate content
        let bookTitle = document.createElement("h1");
        bookTitle.textContent = library[i].title;
        currentBook.appendChild(bookTitle);

        // Create book author element & set appropiate content
        let bookAuthor = document.createElement("h2");
        bookAuthor.textContent = `By: ${library[i].author}`;
        currentBook.appendChild(bookAuthor);

        // Create book pages element & set appropiate content
        let bookPages = document.createElement("h3");
        bookPages.textContent = `${library[i].totalPages} pages`;
        currentBook.appendChild(bookPages);

        // Create book read status element & set appropiate content
        let bookReadStatus = document.createElement("h3");
        bookReadStatus.textContent = `${library[i].readStatus ? "Read" : "Not Read"}`;
        currentBook.appendChild(bookReadStatus);

        // Create remove button
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.setAttribute("id", i);

        // Add event listener to remove corresponding book
        removeButton.addEventListener("click", () => {
            removeBook(i);
        });
        currentBook.appendChild(removeButton);

        // Create change read status button
        let changeReadStatusButton = document.createElement("button");
        changeReadStatusButton.textContent = "Change Read Status";

        // Add event listener to change corresponding book read status
        changeReadStatusButton.addEventListener("click", () => {
            library[i].toggleReadStatus();
            // Display library again
            displayLibrary();
        });
        currentBook.appendChild(changeReadStatusButton);

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
    if (checkValidity()) {
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

        // Close dialog
        dialog.close();

        // Reset form
        document.querySelector("form").reset();

        // Display book in library
        displayLibrary();
    }
});

function checkValidity() {
    // Select input elements from form
    let bookTitle = document.querySelector("#title");
    let bookAuthor = document.querySelector("#author");
    let bookTotalPages = document.querySelector("#totalPages");


    // Add initial validity
    if (bookTitle.validity.valueMissing) {
        bookTitle.setCustomValidity("Book title is required");
        bookTitle.reportValidity();
        return false;
    } else if (bookAuthor.validity.valueMissing) {
        bookAuthor.setCustomValidity("Book author is required");
        bookAuthor.reportValidity();
        return false;
    } else if (bookTotalPages.validity.valueMissing) {
        bookTotalPages.setCustomValidity("Number of pages is required");
        bookTotalPages.reportValidity();
        return false;
    } else {
        bookTitle.setCustomValidity("");
        bookAuthor.setCustomValidity("");
        bookTotalPages.setCustomValidity("");
    }

    return true;
}
