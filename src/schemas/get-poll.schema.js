"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPollParamsSchema = void 0;
const zod_1 = require("zod");
exports.GetPollParamsSchema = zod_1.z.object({
    pollId: zod_1.z.string().uuid(),
});
