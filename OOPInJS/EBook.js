import { Book, book1, book2, book3 } from './Book.js';

export class EBook extends Book {
	constructor(name, author, year, fileFormat) {
		super(name, author, year);
		this._eBookFormat = fileFormat;
	}

	// Getter for the eBook format
	get eBookFormat() {
		return this._eBookFormat;
	}

	// Setter for the eBook format, returning the assigned value
	set eBookFormat(fileFormat) {
		const allowedFormats = ['.txt', '.pdf', 'epub'];

		if (!allowedFormats.includes(fileFormat)) {
			throw new Error(
				`Invalid file format. Allowed formats are: ${allowedFormats.join(', ')}`,
			);
		}
		// Return the newly assigned value
		return (this._eBookFormat = fileFormat);
	}

	// Method to print eBook information
	printInfoEbooks() {
		console.log(
			`${this.bookName} by ${this.bookAuthor}, ${this.bookYear} is available in ${this._eBookFormat} format.`,
		);
	}

	// Static method to create an EBook instance from a Book instance
	static fromBook(book, fileFormat) {
		return new EBook(book.bookName, book.bookAuthor, book.bookYear, fileFormat);
	}
}

// Create eBook instances from Book instances
export const eBook1 = EBook.fromBook(book1, 'epub');
export const eBook2 = EBook.fromBook(book2, '.txt');
export const eBook3 = EBook.fromBook(book3, '.pdf');
