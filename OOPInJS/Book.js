export class Book {
	constructor(name, author, year) {
		this._bookName = name;
		this._bookAuthor = author;
		this._bookYear = year;
	}

	get bookName() {
		return this._bookName;
	}

	get bookAuthor() {
		return this._bookAuthor;
	}

	get bookYear() {
		return this._bookYear;
	}

	set bookName(name) {
		if (typeof name !== 'string' || name.trim() === '') {
			throw new Error('Invalid book name');
		}
		this._bookName = name;
	}

	set bookAuthor(author) {
		if (typeof author !== 'string' || author.trim() === '') {
			throw new Error('Invalid book name');
		}
		this._bookAuthor = author;
	}

	set bookYear(year) {
		if (isNaN(year) || year <= 0) {
			throw new Error('Invalid year');
		}
		this._bookYear = year;
	}

	printInfoBooks() {
		console.log(
			`${this.bookName} was written by ${this.bookAuthor} in ${this.bookYear}.`,
		);
	}

	static findOldestBook(books) {
		return books.reduce((oldest, current) => {
			return current.bookYear < oldest.bookYear ? current : oldest;
		});
	}
}

export const book1 = new Book('The Midnight Library', 'Matt Haig', 2020);
export const book2 = new Book('Klara and the Sun', 'Kazuo Ishiguro', 2021);
export const book3 = new Book('Lessons in Chemistry', 'Bonnie Garmus', 2022);
