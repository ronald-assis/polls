"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./routes");
const app = (0, fastify_1.default)();
const PORT = 3333;
app.register(routes_1.routes, { prefix: '/api' });
app.listen({ port: PORT }).then(() => {
    console.log(`HTTP server running in ${PORT}`);
});
