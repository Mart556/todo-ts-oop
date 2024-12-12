"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const todos_1 = __importDefault(require("./routes/todos"));
app.use('/todos', todos_1.default);
app.use((error, req, res, next) => {
    res.json({ message: error.message });
});
app.listen(3011, () => {
    console.log('Server is started at http://localhost:3011');
});