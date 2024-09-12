import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService {

    addBook(bookData: any): string {
        return `Book added: ${JSON.stringify(bookData)}`;
    }

    updateBook(bookId: string, bookData: any): string {
        return `Book with ID ${bookId} updated: ${JSON.stringify(bookData)}`;
    }

    deleteBook(bookId: string): string {
        return `Book with ID ${bookId} deleted.`;
    }

    findBooks(): string {
        return "This will return all books.";
    }

    findBookById(bookId: string): string {
        return `Book with ID ${bookId} found.`;
    }
}
