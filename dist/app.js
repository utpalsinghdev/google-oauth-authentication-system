"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const morgan_1 = __importDefault(require("morgan"));
const test_routes_1 = __importDefault(require("./test/test.routes"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use("/api/v1/test", test_routes_1.default);
app.use((req, res, next) => {
    next((0, http_errors_1.default)(404, "Endpoint Not found"));
});
// app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
//     console.error(error);
//     let errorMessage = "An unknown error occurred!";
//     let errorCode = 500;
//     if (isHttpError(error)) {
//         errorMessage = error.message;
//         errorCode = error.status;
//     }
//     res.status(errorCode).json({ message: errorMessage })
// });
exports.default = app;
