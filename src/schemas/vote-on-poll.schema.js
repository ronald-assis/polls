"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteOnPollParamsSchema = exports.VoteOnPollBodySchema = void 0;
const zod_1 = require("zod");
exports.VoteOnPollBodySchema = zod_1.z.object({
    pollOptionsId: zod_1.z.string().uuid(),
});
exports.VoteOnPollParamsSchema = zod_1.z.object({
    pollOptionsId: zod_1.z.string().uuid(),
});
