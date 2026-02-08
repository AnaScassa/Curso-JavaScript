let bookTitle;
let bookAuthor;
let publicationYear;
let bookPages;
let bookChapters;

function createBook(bookTitle, bookAuthor, publicationYear, bookPages, bookChapters) {
    let book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: publicationYear,
        pages: bookPages,
        bookChapters: bookChapters,

        printBook: function() {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Publication Year: ${book.publicationYear}`);
        console.log(`Pages: ${book.pages}`);
        }
    }
    return book;
}

// instanciando um objeto
const book1 = createBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 180, ["Chapter 1", "Chapter 2", "Chapter 3"]);
const book2 = createBook("To Kill a Mockingbird", "Harper Lee", 1960, 281, ["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4"]);

book2.color = "blue"; // Adicionando uma nova propriedade ao objeto book2

book1.printBook();
book2.printBook();
console.log(book1);