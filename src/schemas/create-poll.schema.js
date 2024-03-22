"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePollBodySchema = void 0;
const zod_1 = require("zod");
exports.CreatePollBodySchema = zod_1.z.object({
    title: zod_1.z.string(),
    options: zod_1.z.array(zod_1.z.string()),
});
