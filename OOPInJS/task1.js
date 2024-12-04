import { Book, book1, book2, book3 } from "./Book.js ";
import { eBook1, eBook2, eBook3 } from "./EBook.js";


// Info about books
book1.printInfoBooks()
book2.printInfoBooks()
book3.printInfoBooks()

// Info about eBooks
eBook1.printInfoEbooks()
eBook2.printInfoEbooks()
eBook3.printInfoEbooks()

// Find the oldest book
const books = [book1, book2, book3];
console.log("The oldest book is:", Book.findOldestBook(books).bookName);

