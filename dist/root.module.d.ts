import { NestModule, MiddlewareConsumer } from '@nestjs/common';
export declare class RootModule implements NestModule {
    constructor();
    configure(consumer: MiddlewareConsumer): void;
}
