"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
const http_exception_filter_1 = require("./http-exception.filter");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    addBook(bookData) {
        return this.bookService.addBook(bookData);
    }
    deleteBook(bookId) {
        return this.bookService.deleteBook(bookId);
    }
    updateBook(bookId, bookData) {
        return this.bookService.updateBook(bookId, bookData);
    }
    findAllBooks() {
        return this.bookService.findBooks();
    }
    findBookById(bookId) {
        return this.bookService.findBookById(bookId);
    }
};
exports.BookController = BookController;
__decorate([
    (0, common_1.Post)("/add"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], BookController.prototype, "addBook", null);
__decorate([
    (0, common_1.Delete)("/delete/:bookId"),
    __param(0, (0, common_1.Param)('bookId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], BookController.prototype, "deleteBook", null);
__decorate([
    (0, common_1.Put)("/update/:bookId"),
    __param(0, (0, common_1.Param)('bookId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", String)
], BookController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Get)("/findAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], BookController.prototype, "findAllBooks", null);
__decorate([
    (0, common_1.Get)('/findBookById/:bookId'),
    __param(0, (0, common_1.Param)('bookId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], BookController.prototype, "findBookById", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)("book"),
    (0, common_1.UseFilters)(http_exception_filter_1.HttpExceptionFilter),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
//# sourceMappingURL=book.controller.js.map