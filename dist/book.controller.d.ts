import { BookService } from "./book.service";
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    addBook(bookData: any): string;
    deleteBook(bookId: string): string;
    updateBook(bookId: string, bookData: any): string;
    findAllBooks(): string;
    findBookById(bookId: string): string;
}
