"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const root_module_1 = require("./root.module");
const http_exception_filter_1 = require("./http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(root_module_1.RootModule);
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map