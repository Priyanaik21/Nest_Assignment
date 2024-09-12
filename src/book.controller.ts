import { Controller, Delete, Get, Param, Post, Put, Body, UseFilters } from "@nestjs/common";
import { BookService } from "./book.service";
import { HttpExceptionFilter } from './http-exception.filter';

@Controller("book")
@UseFilters(HttpExceptionFilter)
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Post("/add")
    addBook(@Body() bookData): string {
        return this.bookService.addBook(bookData);
    }

    @Delete("/delete/:bookId")
    deleteBook(@Param('bookId') bookId: string): string {
        return this.bookService.deleteBook(bookId);
    }

    @Put("/update/:bookId")
    updateBook(@Param('bookId') bookId: string, @Body() bookData): string {
        return this.bookService.updateBook(bookId, bookData);
    }

    @Get("/findAll")
    findAllBooks(): string {
        return this.bookService.findBooks();
    }

    @Get('/findBookById/:bookId')
    findBookById(@Param('bookId') bookId: string): string {
       return this.bookService.findBookById(bookId);
    }
}
