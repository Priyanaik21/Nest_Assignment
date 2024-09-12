import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],
})
export class RootModule implements NestModule {
  constructor() {
    console.log('Root Module Initialized');
  }

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(BookController); 
  }
}
